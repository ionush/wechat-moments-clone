import * as React from 'react';
const styles = require('./Post.css');
import Photos from './Photos.tsx';
import * as moment from 'moment';
import { CSSTransitionGroup } from 'react-transition-group';

interface BasePost {
  avatar: string;
  user: string;
  description?: string;
  photos?: Array<string>;
  link?: { image: string; description: string };
  location?: string;
  date?: Date;
  comments?: { likes: Array<string> };
}

interface State {
  visible: boolean;
}

export interface Props {
  post: BasePost;
}

class Post extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

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
                <Photos photos={photos} />
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
              <div className="buttonWrapper">
                {/* <CSSTransitionGroup
                transitionName="likeSelectorTransition"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              > */}
                <div
                  className={
                    this.state.visible ? 'likeSelector' : 'likeSelector-hidden'
                  }
                  key={user}
                />
                {/* </CSSTransitionGroup> */}
                <div
                  className="commentsButton"
                  onClick={(event: any) => {
                    this.setState({
                      ...this.state,
                      visible: !this.state.visible
                    });
                  }}
                />
              </div>
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
