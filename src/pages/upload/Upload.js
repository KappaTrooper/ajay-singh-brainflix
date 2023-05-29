import React from "react";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import UploadView from "../../assets/Images/Upload-video-preview.jpg";
import uploadImage from "../../assets/Icons/upload.svg";

import "./upload.scss";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [topInputInvalid, setTopInputInvalid] = useState(false);
  const [bottomInputInvalid, setBottomInputInvalid] = useState(false);
  const [topInputValue, setTopInputValue] = useState('');
  const [bottomInputValue, setBottomInputValue] = useState('');

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <hr className="divider-top"/>

      <div className="upload">
        <div className="upload--item">
          <div className="upload--item__form">
            <h1 className="upload--item__header"> Upload Video</h1>

      <div className="upload--item__desktop">
          <div className="upload--item__desktop--wrap">
            <p className="upload--item__text">VIDEO THUMBNAIL</p>
            <img src={UploadView} className="upload--item__image"></img>
            </div>
            <div className="upload--item__desktop--wrap upload--item__desktop--wraptop">
            <p className="upload--item__text">TITLE YOUR VIDEO</p>
            <input
        type="text"
        className={`upload--item__input upload--item__input--top ${
          topInputInvalid ? 'upload--item__input--top--invalid' : ''
        }`}
        placeholder="Add a title to your video"
        value={topInputValue}
        onChange={(e) => setTopInputValue(e.target.value)}
      ></input>

            <p className="upload--item__text">ADD A VIDEO DESCRIPTION</p>
            <input
        type="text"
        className={`upload--item__input upload--item__input--bottom ${
          bottomInputInvalid ? 'upload--item__input--bottom--invalid' : ''
        }`}
        placeholder="Add a description of your video"
        value={bottomInputValue}
        onChange={(e) => setBottomInputValue(e.target.value)}
      ></input>
      </div>
      </div>

            <div className="upload--item__button">
              <button
                type="submit"
                onClick={() => {
                  if (!topInputValue || !bottomInputValue) {
                    setTopInputInvalid(!topInputValue);
                    setBottomInputInvalid(!bottomInputValue);
                  } else {
                    // Perform publishing logic here
                    navigate("/");
                  }
                }}
                className="upload--item__button--publish">
                 <img
              className="upload-item-image"
              src={uploadImage}
              alt="upload"
            />
                <h3 className="upload-item__button--text">Publish</h3>
              </button>
                
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="upload--item__button--cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="upload">
    <div className='upload--item'>
      <h1> Upload Page</h1>
      <img src='http://placekitten.com/g/200/300' className='upload-item__image'></img>
      <button onClick={() => {navigate('/')}} className='upload-item__button'>Upload</button>

</div>


    

</div> */}
    </>
  );
}
