import ViewLogo from "../../assets/Icons/views.svg";
import LikeLogo from "../../assets/Icons/likes.svg";

import "./VideoContent.scss";

export default function VideoContent(props) {
  return (
    <div className="videoContent">
      <h1 className="videoContent__title">{props.title}</h1>
      <div className="videoContent__info">
            <div className="videoContent__nameDate">
              <p className="videoContent__name">By {props.channel}</p>

              <p className="videoContent__date">{new Date (props.timestamp).toLocaleDateString()}</p>
            </div>

            <div className="videoContent__viewsLikes">
              <div className="videoContent__view">
                
                <p className="videoContent__viewCounter"> <img className="videocontent__viessimg" src={ViewLogo} alt='views'/> {props.views}</p>
              </div>

              <div className="videoContent__likes">
              
                <p className="videoContent__likeCounter"> <img className="videocontent__likeimg" src={LikeLogo} alt='views'/>{props.likes}</p>
              </div>
            </div>
          </div>

      <div className="videoContent__description">
        <p>
         {props.description}
        </p>

        <p className="videoContent__comments">3 Comments</p>
      </div>
    </div>
  );
}
