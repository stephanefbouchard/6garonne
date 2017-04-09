import React, { PropTypes, Component } from 'react'
import classes from './PostItem.scss'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { isObject } from 'lodash'

export default class PostItem extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render () {
    const { post, id, onDeleteClick } = this.props

    return (
      <div className={classes.container}>
        <Card>
          <CardHeader
              title="Jérôme et Jean-François"
              subtitle="Les deux frères"
              avatar="https://lh6.googleusercontent.com/FxH6McUefs6iamNJtgfzYqESeSPi-QaPddy1pr0pJa7GFQUJamPiEUeNFFD5q59b50He7c1IGQ=w271"
          />
          <CardMedia
              overlay={<CardTitle title={post.data.titre} subtitle={post.data.subTitle} />}
          >
            <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
          </CardMedia>
          <CardTitle title={post.data.titre} subtitle={post.data.subTitle} />
          <CardText>
            {post.data.text}
          </CardText>
          <CardText>
            {post.data.date}
          </CardText>
        </Card>
      </div>
    )
  }
}
