import React, { PropTypes, Component } from 'react'
import classes from './PostItem.scss'
import { ListItem } from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import profilePic from 'static/image/2frere.jpg'
import bandeauVideo from 'static/image/bandeau-video.jpg'
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
    const date =  new Date(parseInt(post.date)).toLocaleString('FR-ca')

    var videoCard = ""
    var imageUrl = post.imageUrl

   if (post.imageUrl.indexOf("videos") > -1) {
      videoCard = '<video width="98%" controls> <source src="' + post.imageUrl + '" type="video/mp4" /> </video>'
      imageUrl = bandeauVideo
    }


    const mediaCard = (
      <div className={classes.container}>
        <Card>
          <CardHeader
              title="Les 6 jours de Garonne"
              subtitle="De Toulouse à Bordeaux en Kayak sur la Garonne"
              avatar={profilePic}
          />
          <CardMedia
              overlay={<CardTitle title={post.title} />}
          >
              <img src={imageUrl} />
          </CardMedia>
          <CardTitle title={post.titre} subtitle={post.subTitle} />
          <CardText dangerouslySetInnerHTML={{__html: videoCard}} />
          <CardText dangerouslySetInnerHTML={{__html: post.text}} />
          <CardText>
            {date}
          </CardText>
        </Card>
      </div>
    )

    return (
      mediaCard
    )
  }
}
