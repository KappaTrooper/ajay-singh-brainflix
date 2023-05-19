import ViewLogo from "../../assets/Icons/views.svg";
import LikeLogo from "../../assets/Icons/likes.svg";

import "./VideoContent.scss";

export default function VideoContent() {
  return (
    <div className="videoContent">
      <h1 className="videoContent__title">BMX Rampage: 2021 Highlight</h1>
      <div className="videoContent__info">
            <div className="videoContent__nameDate">
              <p className="videoContent__name">By Red Crow</p>

              <p className="videoContent__date">07/11/2021</p>
            </div>

            <div className="videoContent__viewsLikes">
              <div className="videoContent__view">
                
                <p className="videoContent__viewCounter"> <img className="videocontent__viessimg" src={ViewLogo} alt='views'/> 1,001,023</p>
              </div>

              <div className="videoContent__likes">
              
                <p className="videoContent__likeCounter"> <img className="videocontent__likeimg" src={LikeLogo} alt='views'/>110.985</p>
              </div>
            </div>
          </div>

      <div className="videoContent__description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.p
        </p>

        <p className="videoContent__comments">3 Comments</p>
      </div>
    </div>
  );
}
