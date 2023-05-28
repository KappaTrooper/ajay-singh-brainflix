import React from 'react'
import "./upload.scss";
import { useNavigate } from 'react-router-dom';

export default function Upload() {
  const navigate = useNavigate();
  return (

    <>
  <div className="upload">
    <div className='upload--item'>
      <h1> Upload Page</h1>
      <img src='http://placekitten.com/g/200/300' className='upload-item__image'></img>
      <button onClick={() => {navigate('/')}} className='upload-item__button'>Upload</button>

</div>


    

</div>

    </>
  )
}
