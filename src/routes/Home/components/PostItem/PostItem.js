import React, { PropTypes, Component } from 'react'
import classes from './PostItem.scss'
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import Delete from 'material-ui/svg-icons/action/delete'
import { isObject } from 'lodash'

export default class PostItem extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onDeleteClick: PropTypes.func,
    onCompleteClick: PropTypes.func
  }

  render () {
    const { post, id, onCompleteClick, onDeleteClick } = this.props

    return (
      <div className={classes.container}>
        <ListItem
          leftIcon={
            <Checkbox
              defaultChecked={post.done}
              onCheck={() => onCompleteClick(post, post._key || id)}
            />
          }
          rightIcon={
            <Delete onClick={() => onDeleteClick(post._key || id)} />
          }
          secondaryText={
            <p>
               <span className='TodoItem-Text'>
                {post.data.titre}
              </span><br />
              <span className='TodoItem-Text'>
                {post.data.text}
              </span><br />
              <span className='TodoItem-Owner'>
                {
                  isObject(post.owner)
                  ? post.owner.displayName || post.owner.username
                  : post.owner || 'No Owner'
                }
              </span>
            </p>
          }
          secondaryTextLines={2}
        />
      </div>
    )
  }
}
