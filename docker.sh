#!/bin/bash

# Exit this script if any error is encountered
set -e

# Execute inside this script directory
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

# Find script name from invoke path
NAME=$(basename "${BASH_SOURCE[0]}")

# Find script version from git
source Docker/version.sh
VERSION=$IRYS_BUILD_DESCRIBE

# Attempt to determine host operating system type (default to linux)
export system=linux
if sw_vers &> /dev/null
then
  export system=darwin
fi

# Usage or help for this script
USAGE="NAME
    $NAME - Build using docker containers

SYNOPSIS
    $NAME [options]

DESCRIPTION
    $NAME is a script to build inside docker containers.

    Most commands can work without any user input, but they will ask
    for more information if it anything was missing from the arguments.

OPTIONS
    The options can either start with one or two dashes.
    Some options support an additional input value after them.

    Short version options with no additional input after them
    can be combined and put next to each other, for example the
    individual options -a, -B and -c can be used like this: -aBc.

    -c, --clean
        Clean all local docker containers and images then exit.
    -d, --download
        Download (pull) docker images from private registry.
    -f, --force
        Force building docker images (this takes a very long time).
    -h, --help
        Show usage for this script and exit with success.
    -i, --interactive
        Enter interactive bash prompt instead of container default CMD.
    -o, --options <options>
        Specify docker guest environment DOCKER_SCRIPT_OPTIONS value.
    -t, --tag <tag>
        Specify which container tag to use (default: app).
    -u, --upload
        Upload (push) docker images to private registry then exit.
    -v, --version
        Show version for this script and exit with success.
"

# Process command line arguments using getopt
if [ $# -ne 0 ]
then
  ARGS=$(getopt -o cdfhio:t:uv \
    -l clean,download,force,help,interactive,options:,tag:,upload,version \
    -n "$NAME" -- "$@")
  if [ "$system" = darwin ]
  then
    # shellcheck disable=2048,2086
    ARGS=$(getopt cdfhio:t:uv $*)
  fi
  eval set -- "$ARGS"
  while [ -n "$1" ]
  do
    case "$1" in
      -c|--clean)
        clean=true
        shift
        ;;
      -d|--download)
        download=true
        shift
        ;;
      -f|--force)
        force=true
        shift
        ;;
      -h|--help)
        echo -e "$USAGE"
        exit
        ;;
      -i|--interactive)
        entrypoint=--entrypoint=/6garonne/Docker/start.sh
        shift
        ;;
      -o|--options)
        options="-e DOCKER_SCRIPT_OPTIONS=$2"
        shift 2
        ;;
      -t|--tag)
        tag=$2
        shift 2
        ;;
      -u|--upload)
        upload=true
        shift
        ;;
      -v|--version)
        echo "$NAME version $VERSION"
        exit
        ;;
      --)
        shift
        break
        ;;
      *)
        echo "Unsupported option: $1"
        exit 1
        ;;
    esac
  done
fi

# Define private registry address and port
#privhost=buildsystem
#privaddr=10.65.120.103
#registry="$privhost":5000

# Define default repository name
#repo="$registry"/6garonne

# If tag is not provided, use default
if [ -z "$tag" ]
then
  tag=6garonne
fi

# Skip most of the automatic install process on Mac OS X
if [ "$system" = darwin ]
then
  if ! which docker > /dev/null
  then
    echo 'Please download and install docker.dmg from www.docker.com"
Then add 10.65.120.103 buildsystem to your /etc/hosts file"
Then add buildsystem:5000 in docker preferences/unsecured-registry
Then press the Apply & Restart button'
  fi
else

# Automatically install docker if necessary
if ! which docker > /dev/null
then
  echo "Automatically installing docker."
  wget -qO- https://get.docker.com/ | sh
fi

# Automatically add current user to "docker" group to avoid using "sudo docker"
if ! groups | grep -qw docker
then
  sudo usermod -aG docker "$USER"
  echo "Please logout completely and login again to be able to user docker."
  exit
fi

# Automatically add private host name to local hosts file
#if ! grep -qw "$privhost" /etc/hosts
#then
#  echo "$privaddr $privhost $privhost.localdomain" \
#    | sudo tee -a /etc/hosts > /dev/null
#fi

# Automatically add support for private registry
#opts="--insecure-registry $registry"

# Automatically adjust docker service rc.d or upstart settings
defs=/etc/default/docker
if [ -e "$defs" ] && ! grep -q -- "$opts" "$defs"
then
#  echo 'DOCKER_OPTS="'"$opts"'"' | sudo tee -a "$defs" > /dev/null
  restart=true
fi

# Automatically adjust docker service systemd settings
serv=/lib/systemd/system/docker.service
if [ -e "$serv" ] && ! grep -q -- "$opts" "$serv"
then
  sudo sed 's|^\(ExecStart=.*docker.*\)|\1 '"$opts"'|' -i "$serv"
  sudo systemctl daemon-reload
  restart=true
fi

# Automatically restart docker service if settings were changed
if [ -n "$restart" ] || ! pgrep -a dockerd | grep -q -- "$opts"
then
  sudo service docker restart
fi

# Ensure git version is adequate
gitMinVer='2.11'
if [ "$( (echo "$gitMinVer" && git version | awk '{print $3}') | sort -V \
  | tail -1)" = "$gitMinVer" ]
then
  echo "Automatically upgrading git."
  sudo add-apt-repository -y ppa:git-core/ppa
  sudo apt-get update -q
  sudo apt-get install -yq git
fi

fi

# Ensure all git submodules have been initialized
if [ ! -e .git/modules ]
then
  git submodule sync --recursive
  git submodule update --init --recursive
fi

# When specified, upload all images to private registry then exit
if [ -n "$upload" ]
then
  for image in $(docker images | awk '/'"$registry"'/{print $1":"$2}')
  do
    docker push "$image"
  done
  exit
fi

# When specified, clean all local docker containers and images then exit
if [ -n "$clean" ]
then
  while [ -n "$clean" ]
  do
    unset clean
    for p in $(docker ps -aq)
    do
      docker rm -f "$p" || clean=true
    done
    for i in $(docker images -aq)
    do
      docker rmi -f "$i" || clean=true
    done
  done
  exit
fi

# This function will build or rebuild an image if necessary
# This function may call itself recursively to build dependencies
# Argument $1 is the image repo and argument $2 the image tag
function build() {
  local brepo=$1
  local btag=$2

  # Check if the image should be built or already exists
  if [ -n "$force" ] || ( ( [ -n "$download" ] \
    || ! docker images | grep -q "$brepo\s\+$btag" ) \
    && ! docker pull "$brepo:$btag" )
  then
    # Ensure the specific dockerfile exist to build the image
    if [ ! -e Docker/"$btag" ]
    then
      echo "Unable to build image, missing file: Docker/$btag"
      exit 1
    else
      # Ensure dependencies between images are respected
      local bdeps
      if bdeps=$(grep -Poim1 '^\s*FROM\s+'"$brepo"':[^\s]*' Docker/"$btag")
      then
        # Try to build any missing tag dependency
        build "$brepo" "${bdeps##*:}"
      fi

      # Ensure all image build arguments are provided
      local fargs
      if fargs=$(grep -Poi '^\s*ARG\s+[^\s]*' Docker/"$2")
      then
        # Provide build arguments from current environment
        for arg in $fargs
        do
          if [ ! "$arg" = ARG ]
          then
            local bargs=$bargs" --build-arg $arg=${!arg}"
          fi
        done
      fi

      # Build the specific tag
      # shellcheck disable=SC2086
      docker build $bargs -t "$brepo":"$btag" -f Docker/"$btag" .
    fi
  fi
}

# Build the images (or re-build them if the Dockerfiles have changed)
#build $repo $tag

# Avoid running in a terminal when jenkins is invoking this script
if [ -z "$JENKINS_HOME" ]
then
  terminal=-it
fi



# Run and enter the image
# shellcheck disable=SC2086
docker run \
  -e DISPLAY \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  --privileged \
  -v "$DIR":/6garonne \
  -p 9005:9005 \
  -p 3000:3000 \
  -it \
  --rm \
  --name 6garonne \
  node-fb-6g \
