import React from 'react'

import Video from "../../components/Video/Video";
import VideoContent from "../../components/VideoContent/VideoContent";
import VideoList from "../../components/VideoList/VideoList";
import CommentForm from "../../components/comment-form/CommentForm";
import CommentList from "../../components/Comment-List/CommentList";
import { API_URL, API_KEY } from '../../utilities/ApiPage';

// Grabs data from json
import VideoData from "../../data/video-details.json";
import VideoData_Video from "../../data/videos.json";

// Importing useState and useEffect and Axios
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Main() {

  //    // sets default state to index 0 (BMX Rampage)
  // const [videoOrder, setVideoOrder] = useState(VideoData[0]);

       // sets default state to index 0 (BMX Rampage)
  const [videoOrder, setVideoOrder] = useState([]);


  useEffect(() => {
    axios.get(API_URL + "/video/:id " + API_KEY)
      .then(response => {
        console.log(response.data);
        setVideoOrder(response.data[0]);
        
      })
      
  }, []);


  // make another usestate to set default videoOrder to index 0
  


  // // calling in onclick from VideoList component to change videoOrder
  // const handleImageClick = (id) => {
  //   // using find to find ID of video with ID of video
  //   const videoClicked = VideoData.find((video) => video.id === id);

  //   // Setting the state to new videoclicked
  //   setVideoOrder(videoClicked);
  // };

  // //  Fildering to not use whatever is in usestate
  // const filteredVideoData = VideoData_Video.filter(
  //   (video) => video.id !== videoOrder.id
  // );

  
  return (
   <>
    <div className="video">
        <Video image={videoOrder.image} />
      </div>

      <div className="desktop-design">
        <div className="desktop-design__container">
        <div className="video-content">
          {/* Props to use data from json */}
          <VideoContent
            title={videoOrder.title}
            channel={videoOrder.channel}
            timestamp={videoOrder.timestamp}
            views={videoOrder.views}
            likes={videoOrder.likes}
            description={videoOrder.description}
            comments={videoOrder.comments} // Pass the comments prop
          />
        </div>

        <div className="commentform">
          <CommentForm />
        </div>

        <div className="commentlist">
          <CommentList comments={videoOrder.comments} />
        </div>

        </div>

        <div className="video-list">
          <VideoList
            videoData={filteredVideoData}
            onImageClick={handleImageClick}
          />
        </div>
      </div>
   </>
  )
}