import './Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../Components/Header/Header";

import Video from '../../Components/Video/Video';
import VideoContent from '../../Components/VideoContent/VideoContent';
import VideoList from '../../Components/VideoList/VideoList';
import CommentForm from '../../Components/comment-form/CommentForm';
import CommentList from '../../Components/Comment-List/CommentList';
import { API_URL, API_KEY } from '../../utilities/ApiPage';

import { useParams } from 'react-router-dom';

export default function Main() {


  const [Currentvideo, setCurrentvideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const { videoId } = useParams();

  // CurrentVideo useEffect and API Call
  useEffect(() => {
    if (!videoId) {
      axios.get(`${API_URL}/videos${API_KEY}`)
        .then(response => {
          return axios.get(`${API_URL}/videos/${response.data[0].id}${API_KEY}`)
        })
        .then(response => {
          setCurrentvideo(response.data);
        })
    } else {
      axios.get(`${API_URL}/videos/${videoId}${API_KEY}`)
        .then(response => {
          setCurrentvideo(response.data);
        })
    }
  }, [videoId]);


  // Videolist useEffect and API Call
  useEffect(() => {
    axios.get(`${API_URL}/videos${API_KEY}`)
      .then(response => {
        setVideoList(response.data);
        console.log(response.data);
        const filteredVideoData = response.data.filter(video => video.id !== Currentvideo.id);
        console.log(filteredVideoData);
        setVideoList(filteredVideoData);


      })

  }, [videoId]);


  // loading screen it comments don't load
  if (!Currentvideo.comments) {
    return <span>Loading....</span>;
  }

  return (
    <>

    <div className='header'>
    <Header />

    </div>
      <div className="video">
        <Video image={Currentvideo.image} />
      </div>

      <div className="desktop-design">
        <div className="desktop-design__container">
          <div className="video-content">
            <VideoContent {...Currentvideo}
           
            />
          </div>

          <div className="commentform">
            <CommentForm />
          </div>

          <div className="commentlist">
            <CommentList {...Currentvideo} />
          </div>
        </div>


        {/* Setting the videoData to come from videoList */}
        <div className="video-list">
          <VideoList
            videoData={videoList}
            defaultVideoId={Currentvideo.id}
          />
        </div>
      </div>
    </>
  );
}
