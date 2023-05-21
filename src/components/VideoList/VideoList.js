import React from 'react'
import './VideoList.scss';


export default function VideoList(props) {
    // passing data up
    const { videoData, onImageClick } = props;
    return (
    <section className='video container'>
    <h3 className='video__header'>NEXT VIDEO</h3>

        <ul className='video__list'>
        {videoData.map((video) => (
          <div className='video__item' onClick={() => onImageClick (video.id) }>
          {/* making onclick for button which calls onImageClick on props  */}
          <div className='video__item--image' >
              <img className='video__item--img' src={video.image} alt='Video Image'   />
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




    </section>
  )
}
