import ViewLogo from "../../assets/Icons/views.svg";
import LikeLogo from "../../assets/Icons/likes.svg";

import "./VideoContent.scss";

export default function VideoContent(props) {
  return (
    <div className="video-content">
      <h1 className="video-content__title">{props.title}</h1>
      <div className="video-content__info">
            <div className="video-content__nameDate">
              <p className="video-content__name">By {props.channel}</p>

              <p className="video-content__date">{new Date (props.timestamp).toLocaleDateString()}</p>
            </div>

            <div className="video-content__viewsLikes">
              <div className="video-content__view">
                
                <p className="video-content__view-counter"> <img className="video-content__icon" src={ViewLogo} alt='views'/> {props.views}</p>
              </div>

              <div className="video-content__likes">
              
                <p className="video-content__like-counter"> <img className="video-content__icon" src={LikeLogo} alt='views'/>{props.likes}</p>
              </div>
            </div>
          </div>

      <div className="video-content__description">
        <p>
         {props.description}
        </p>

        {/* <p className="video-content__comments"> {props.comments.length} Comments</p> */}
      </div>
    </div>
  );
}
