import './styles/App.scss';
import Header from './components/Header';
import Video from './components/Video/Video';
import VideoContent from './components/VideoContent/VideoContent';

import { useState } from 'react';

function App() {

// const [videoOrder, setvideoOrder] = useState[0];

  return (
    <>
    <div className='header'>
      <Header />
    </div>

    <div className='video'>
      <Video/>
    </div>

<div className='video-content'>
  <VideoContent/>
</div>

    </>
  );
}


export default App;
