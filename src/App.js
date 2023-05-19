import './styles/App.scss';
import Header from './components/Header';
import Video from './components/Video/Video';
import VideoContent from './components/VideoContent/VideoContent';
import VideoList from './components/VideoList/VideoList';

// Grabs data from json
import VideoData from './data/video-details.json';


// uses state
import { useState } from 'react';

function App() {
  // sets default state to index 0 (BMX Rampage)
 const [videoOrder, setVideoOrder] = useState(1);
// Turns videodata from json file into videoOrder and assigns variable
 const videoDetails = VideoData[videoOrder];

// gets data up from VideoList (data up action down)
const handleImageClick = () => {
  // videoOrder
}


//  Fildering to not use whatever is in useState
 const filteredVideoData = VideoData.filter((video, index) => index !== videoOrder);
 


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
          title={videoDetails.title}
          channel={videoDetails.channel}
          timestamp={videoDetails.timestamp}
          views={videoDetails.views}
          likes={videoDetails.likes}
          description={videoDetails.description}
        />
      </div>

<div className='video-List'>
<VideoList videoData={filteredVideoData} onImageClick={handleImageClick}  />
</div>



    </>
  );
}


export default App;
