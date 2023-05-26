// Main.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Video from '../../components/Video/Video';
import VideoContent from '../../components/VideoContent/VideoContent';
import VideoList from '../../components/VideoList/VideoList';
import CommentForm from '../../components/comment-form/CommentForm';
import CommentList from '../../components/Comment-List/CommentList';
import { API_URL, API_KEY } from '../../utilities/ApiPage';
import VideoData from '../../data/video-details.json';
import { useParams } from 'react-router-dom';

export default function Main() {
  // Params not done yet
  const { defaultVideoId } = useParams();
  // videoOrder is current video and videoList is the list of videos
  const [videoOrder, setVideoOrder] = useState({});
  const [videoList, setVideoList] = useState([]);

  //get API data and sets default first
  useEffect(() => {
    axios.get(`${API_URL}/videos${API_KEY}`)
      .then(response => {
        setVideoList(response.data);
        if (response.data.length > 0) { // default video data
          const defaultVideoId = response.data[0].id;
          // gets API data with videoId second to replace the setVideoOrder with the first ID

          axios.get(`${API_URL}/videos/${defaultVideoId}${API_KEY}`)
            .then(response => {
              console.log(response.data);
              setVideoOrder(response.data);
            })
          
        }
        // getting api data for video list and setting it to setVideoList
        axios.get(`${API_URL}/videos${API_KEY}`)
        .then(response => {
          console.log(response.data);
          setVideoList(response.data);
        })
        
      })
  
  }, []);
  const handleImageClick = (id) => {
    if (id !== videoOrder.id) {
      axios.get(`${API_URL}/videos/${id}${API_KEY}`)
        .then(response => {
          console.log(response.data);
          setVideoOrder(response.data);
        })
       
    }
  };

  // loading screen it comments don't load
  if (!videoOrder.comments) {
    return <span>Loading....</span>;
  }




  // const filteredVideoData = VideoData_Video.filter(video => video.id !== videoOrder.id);

  return (
    <>
      <div className="video">
        <Video image={videoOrder.image} />
      </div>

      <div className="desktop-design">
        <div className="desktop-design__container">
          <div className="video-content">
            <VideoContent
              title={videoOrder.title}
              channel={videoOrder.channel}
              timestamp={videoOrder.timestamp}
              views={videoOrder.views}
              likes={videoOrder.likes}
              description={videoOrder.description}
              comments={videoOrder.comments}
            />
          </div>

          <div className="commentform">
            <CommentForm />
          </div>

          <div className="commentlist">
            <CommentList comments={videoOrder.comments} />
          </div>
        </div>


{/* Setting the videoData to come from videoList */}
        <div className="video-list">
          <VideoList
            videoData={videoList}
            onImageClick={handleImageClick}
            defaultVideoId={videoOrder.id}
          />
        </div>
      </div>
    </>
  );
}
