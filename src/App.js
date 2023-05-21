import './styles/App.scss';
import Header from './components/Header';
import Video from './components/Video/Video';
import VideoContent from './components/VideoContent/VideoContent';
import VideoList from './components/VideoList/VideoList';

// Grabs data from json
import VideoData from './data/video-details.json';
import VideoData_Video from './data/videos.json';


// uses state
import { useState } from 'react';

function App() {
  // sets default state to index 0 (BMX Rampage)
 const [videoOrder, setVideoOrder] = useState(VideoData[0]);

// calling in onclick from VideoList component to change videoOrder
const handleImageClick = (id) => {
  // Find the video with the clicked ID in VideoData array
  const videoClicked = VideoData.find((video) => video.id === id);
  
  // Set the new video object to setVideoOrder
  setVideoOrder(videoClicked);
};

//  Fildering to not use whatever is in useState
 const filteredVideoData = VideoData_Video.filter((video) => video.id !== videoOrder.id);
 


  return (
    <>
    <div className='header'>
      <Header />
    </div>

    <div className='video'>
      <Video/>
    </div>

    <div className='video-content'>
    {/* Props to use data from json */}
        <VideoContent
          title={videoOrder.title}
          channel={videoOrder.channel}
          timestamp={videoOrder.timestamp}
          views={videoOrder.views}
          likes={videoOrder.likes}
          description={videoOrder.description}
        />
      </div>

<div className='video-ist'>
<VideoList videoData={filteredVideoData} onImageClick={handleImageClick}  />
</div>



    </>
  );
}


export default App;
