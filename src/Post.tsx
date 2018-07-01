import * as React from 'react';
const styles = require('./Post.css');
import Photos from './Photos.tsx';
import * as moment from 'moment';

interface BasePost {
  avatar: string;
  user: string;
  description?: string;
  photos?: string[];
  link?: { image: string; description: string };
  location?: string;
  date?: Date;
  comments?: { likes: string[] };
}

interface PhotoPost extends BasePost {
  photos: string[];
}

interface LinkPost extends BasePost {
  link: { image: string; description: string };
}

export interface Props {
  post: BasePost;
}

class Post extends React.Component<Props, object> {
  render() {
    const {
      avatar,
      user,
      description,
      photos,
      link,
      location,
      date,
      comments
    } = this.props.post;

    return (
      <div className="postWrapper">
        <div className="contentWrapper">
          <div className="avatar">
            <img src={avatar} />
          </div>
          <div className="wrapper">
            <div className="username">{user}</div>
            {description ? (
              <div className="description">{description}</div>
            ) : null}
            {photos.length > 0 ? (
              <div className="photos">
                {/* <Photos photos={this.props} /> */}
              </div>
            ) : null}
            {link.image ? (
              <div className="linkWrapper">
                <div className="linkImage">image</div>
                <div className="linkDescription">description</div>
              </div>
            ) : null}
            {location ? <div className="location">{location}</div> : null}
            <div className="dateCommentsWrapper">
              <div className="date">{moment(date).toNow()}</div>
              <div className="commentsButton" />
            </div>
            {comments.likes.length > 0 ? (
              <div className="commentsWrapper">
                <div className="likeHeart">heart</div>
                <div className="likeUsers">likeUsers</div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="hairSpacer" />
      </div>
    );
  }
}

export default Post;
