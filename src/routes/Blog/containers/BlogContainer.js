import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import Theme from 'theme'
import {
  firebaseConnect,
  isLoaded,
  pathToJS,
  dataToJS,
  orderedToJS,
  // populatedDataToJS
} from 'react-redux-firebase'
import { BLOG_PATH } from 'constants/paths'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import Subheader from 'material-ui/Subheader'
import PostItem from '../components/PostItem'
import NewPostPanel from '../components/NewPostPanel'
import classes from './BlogContainer.scss'

@firebaseConnect([
  { path: 'posts', queryParams: ['orderByChild=num'] } // limit to first 20
])
@connect(
  ({firebase}) => ({
    auth: pathToJS(firebase, 'auth'),
    posts: orderedToJS(firebase, 'posts'), // if using ordering such as orderByChild
  })
)

export default class Home extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  static propTypes = {
      children: PropTypes.object,
      posts: PropTypes.oneOfType([
      PropTypes.object, // object if using dataToJS
      PropTypes.array // array if using orderedToJS
    ]),
    firebase: PropTypes.shape({
      set: PropTypes.func.isRequired,
      remove: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired
    }),
    auth: PropTypes.shape({
      uid: PropTypes.string
    })
  }

  state = {
    error: null
  }

  deletePostItem = (id) => {
    const { posts, auth, firebase } = this.props
    if (!auth || !auth.uid) {
      return this.setState({ error: 'You must be Logged into Delete' })
    }
    this.props.firebase.remove(`/posts/${id}`)
  }

  handleAdd = (newPost) => {
    // Attach user if logged in
    if (this.props.auth) {
      newPost.owner = this.props.auth.uid
    } else {
      newPost.owner = 'Anonymous'
    }
    this.props.firebase.push('/posts', newPost)
  }

  render () {
    if (this.props.children) return this.props.children

    const { posts } = this.props
    const { error } = this.state
    const loggedIn = this.props.auth

    return (
      <div className={classes.container} style={{ color: Theme.palette.primary2Color }}>
        {
          error
            ? <Snackbar
              open={!!error}
              message={error}
              autoHideDuration={4000}
              onRequestClose={() => this.setState({ error: null })}
              />
            : null
        }
        <div className={classes.posts}>
          {
            loggedIn &&
              <NewPostPanel
              onNewClick={this.handleAdd}
              disabled={false}
              />
          }
          {
            !isLoaded(posts)
              ? <CircularProgress />
              : <div className={classes.container}>
                <Subheader>Le journal de bord</Subheader>
                <div className={classes.list}>
                  {
                    posts &&
                      map(posts, (post, id) => (
                        <PostItem
                          key={id}
                          id={id}
                          post={post}
                          onDeleteClick={() => this.deletePostItem(post.key)}
                          onSelect={() => this.context.router.push(`${BLOG_PATH}/${post.key}`)}
                          loggedIn={loggedIn}
                        />
                      )
                    )
                  }
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
}
