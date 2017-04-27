import React, { PropTypes, Component } from 'react'
import { BLOG_PATH } from 'constants/paths'
import classes from './PostItem.scss'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { ShareButtons, generateShareIcon } from 'react-share';
import ShareIcon from 'material-ui/svg-icons/social/share'
const { FacebookShareButton, TwitterShareButton } = ShareButtons;
import profilePic from 'static/image/2frere.jpg'

const bandeauVideo = 'https://firebasestorage.googleapis.com/v0/b/garonne-7319b.appspot.com/o/photos%2FBlog%2Fbandeau-video.jpg?alt=media&token=d461f1f6-c246-4216-878c-c62bfba9b99c'
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export default class PostItem extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render () {
    const { post, id, onDeleteClick, onSelect, loggedIn} = this.props
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
              overlay={<CardTitle className="card-title" title={post.title} onClick={() => onSelect(post)} />}
          >
              <img src={imageUrl} />
          </CardMedia>
          <CardTitle title={post.titre} subtitle={post.subTitle}/>
          <CardText dangerouslySetInnerHTML={{__html: videoCard}} />
          <CardText dangerouslySetInnerHTML={{__html: post.text}} />
          <CardText>
            {date}
            {
              loggedIn
                ? <IconButton
                  tooltip='delete'
                  onClick={onDeleteClick}
                  className='deleteButton'
                  >
                  <DeleteIcon />
                  </IconButton>
                  : null
            }
              <TwitterShareButton
                  className='shareButton'
                  url={`https://garonne-7319b.firebaseapp.com/${BLOG_PATH}/${id}`}
                  title={`Les 6 jours de Garonne - ${post.title}`}
              >
                  <TwitterIcon size={30}/>
              </TwitterShareButton>
              <FacebookShareButton
                  className='shareButton'
                  url={`https://garonne-7319b.firebaseapp.com/${BLOG_PATH}/${id}`}
                  title={`Les 6 jours de Garonne - ${post.title}`}
                  description={post.text}
                  picture={imageUrl}
              >
                  <FacebookIcon size={30} />
              </FacebookShareButton>
          </CardText>
        </Card>
      </div>
    )

    return (
      mediaCard
    )
  }
}
