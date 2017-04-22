#!/bin/bash

# Run as user buildsystem but with host UID and GID inside docker container
# shellcheck disable=SC1090
#source "$IRYS_LRT_HOME"/Docker/user.sh

# Use a bash terminal prompt by default (instead of just /bin/sh)
/bin/bash
