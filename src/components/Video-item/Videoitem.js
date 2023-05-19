import React from 'react'

export default function Videoitem(props) {
    const { videoData } = props;

  return (
    <ul className='video__list'>
        {videoData.map((video) => (
          <div className='video__item' key={video.id}>
            <div className='video__item--image'>
              <img className='video__item--img' src={video.image} alt='' />
            </div>

            <div className='video__item--details'>
              <div className='video__item--content'>
                <p className='video__item--header'>{video.title}</p>
                <p className='video__item--name'>{video.channel}</p>
              </div>
            </div>
          </div>
        ))}

        </ul>
  )
}
