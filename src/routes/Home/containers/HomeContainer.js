import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import Theme from 'theme'
import {
  firebaseConnect,
  isLoaded,
  pathToJS,
  dataToJS,
  // orderedToJS,
  // populatedDataToJS
} from 'react-redux-firebase'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { List } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import PostItem from '../components/PostItem'
import NewPostPanel from '../components/NewPostPanel'
import classes from './HomeContainer.scss'

// const populates = [
//   { child: 'owner', root: 'users', keyProp: 'key' }
// ]

@firebaseConnect([
  // 'posts' // sync full list of posts
  // { path: '/projects', type: 'once' } // for loading once instead of binding
  { path: 'posts', queryParams: ['orderByChild=date'] } // limit to first 20
  // { path: 'posts', queryParams: ['limitToFirst=20'], populates } // populate
  // { path: 'posts', queryParams: ['orderByChild=text'] }, // list posts alphabetically
])
@connect(
  ({firebase}) => ({
    auth: pathToJS(firebase, 'auth'),
    posts: dataToJS(firebase, 'posts')
    // posts: populatedDataToJS(firebase, '/posts', populates), // if populating
    // posts: orderedToJS(firebase, 'posts'), // if using ordering such as orderByChild
  })
)
export default class Home extends Component {
  static propTypes = {
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

  toggleDone = (post, id) => {
    const { firebase, auth } = this.props
    if (!auth || !auth.uid) {
      return this.setState({ error: 'You must be Logged into Toggle Done' })
    }
    firebase.set(`/posts/${id}/done`, !post.done)
  }

  deleteTodo = (id) => {
    const { posts, auth, firebase } = this.props
    //if (!auth || !auth.uid) {
    //  return this.setState({ error: 'You must be Logged into Delete' })
    //}
    //if (posts[id].owner !== auth.uid) {
    //  return this.setState({ error: 'You must own post to delete' })
    //}
    firebase.remove(`/posts/${id}`)
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
    const { posts } = this.props
    const { error } = this.state
    console.log('posts:', posts)

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
          <NewPostPanel
            onNewClick={this.handleAdd}
            disabled={false}
          />
          {
            !isLoaded(posts)
              ? <CircularProgress />
              : <div className={classes.container}>
                <Subheader>Posts</Subheader>
                <div className={classes.list}>
                  {
                    posts &&
                      map(posts, (post, id) => (
                        <PostItem
                          key={id}
                          id={id}
                          post={post}
                          onDeleteClick={this.deleteTodo}
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
