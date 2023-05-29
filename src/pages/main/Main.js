import './Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";

import Video from '../../components/Video/Video';
import VideoContent from '../../components/VideoContent/VideoContent';
import VideoList from '../../components/VideoList/VideoList';
import CommentForm from '../../components/comment-form/CommentForm';
import CommentList from '../../components/Comment-List/CommentList';
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
            <VideoContent
              title={Currentvideo.title}
              channel={Currentvideo.channel}
              timestamp={Currentvideo.timestamp}
              views={Currentvideo.views}
              likes={Currentvideo.likes}
              description={Currentvideo.description}
              comments={Currentvideo.comments}
            />
          </div>

          <div className="commentform">
            <CommentForm />
          </div>

          <div className="commentlist">
            <CommentList comments={Currentvideo.comments} />
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
