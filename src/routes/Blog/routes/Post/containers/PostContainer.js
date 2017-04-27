import React, { Component, PropTypes } from 'react'
import { BLOG_PATH } from 'constants/paths'

import classes from './PostContainer.scss'
import CircularProgress from 'material-ui/CircularProgress'
import Subheader from 'material-ui/Subheader'
import PostItem from '../../../components/PostItem/PostItem'

// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'react-redux-firebase'
const { isLoaded, dataToJS } = helpers

@firebase(
  // Get paths from firebase
  ({ params }) => ([
    `posts/${params.postname}`
  ])
)
@connect(
  // Map state to props
  ({ firebase }, { params }) => ({
    post: dataToJS(firebase, `posts/${params.postname}`)
  })
)
export default class Post extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  static propTypes = {
    post: PropTypes.object,
    params: PropTypes.object.isRequired,
    children: PropTypes.object
  }

  render () {
    const { post } = this.props

    if (!isLoaded(post)) {
      return (
        <div className={classes['progress']}>
          <CircularProgress />
        </div>
      )
    }

    return (
      <div className={classes['container']}>
        <Subheader className='link' onClick={() => this.context.router.push(BLOG_PATH)}>Retour au journal de bord</Subheader>
        <PostItem
            key={post.key}
            id={post.key}
            post={post}
            onDeleteClick={() => this.deletePostItem(post.key)}
            onSelect={() => this.context.router.push(`${BLOG_PATH}/${post.key}`)}
            loggedIn={false}
        />
      </div>
    )
  }
}
