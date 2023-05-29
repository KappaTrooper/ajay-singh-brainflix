import ViewLogo from "../../assets/Icons/views.svg";
import LikeLogo from "../../assets/Icons/likes.svg";

import "./VideoContent.scss";

export default function VideoContent({ title, channel, timestamp, views, likes, description, comments }) {
  return (
    <div className="video-content">
      <h1 className="video-content__title">{title}</h1>
      <div className="video-content__info">
        <div className="video-content__nameDate">
          <p className="video-content__name">By {channel}</p>
          <p className="video-content__date">{new Date(timestamp).toLocaleDateString()}</p>
        </div>
        <div className="video-content__viewsLikes">
          <div className="video-content__view">
            <p className="video-content__view-counter">
              <img className="video-content__icon" src={ViewLogo} alt='views' /> {views}
            </p>
          </div>
          <div className="video-content__likes">
            <p className="video-content__like-counter">
              <img className="video-content__icon" src={LikeLogo} alt='views' />{likes}
            </p>
          </div>
        </div>
      </div>
      <div className="video-content__description">
        <p>{description}</p>
         <p className="video-content__comments">{comments.length} Comments</p>
      </div>
    </div>
  );
}
