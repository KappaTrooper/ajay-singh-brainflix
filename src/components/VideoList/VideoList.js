// VideoList.js
import React from 'react';
import './VideoList.scss';

export default function VideoList(props) {
  // props passed down
  const { videoData, onImageClick, defaultVideoId } = props;

  const videoList = videoData.filter(video => video.id !== defaultVideoId);

  return (
    <section className="video">
      <h3 className="video__header">NEXT VIDEOS</h3>
      <ul className="video__list">
        {videoList.map(video => (
          <div
            key={video.id}
            className="video__item"
            onClick={() => onImageClick(video.id)}
          >
            <div className="video__item--image">
              <img
                className="video__item--image--thumbnail"
                src={video.image}
                alt="Video Image"
              />
            </div>

            <div className="video__item--details">
              <div className="video__item--content">
                <p className="video__item--header">{video.title}</p>
                <p className="video__item--name">{video.channel}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

