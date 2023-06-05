import React, { useState, useEffect } from "react";
import './upload.scss';
import axios from "axios";
import Header from "../../Components/header/Header";
import UploadView from "../../assets/Images/Upload-video-preview.jpg";
import uploadImage from "../../assets/Icons/upload.svg";
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../utilities/ApiPage';


export default function Upload() {
  const [topInputInvalid, setTopInputInvalid] = useState(false);
  const [bottomInputInvalid, setBottomInputInvalid] = useState(false);
  const [topInputValue, setTopInputValue] = useState("");
  const [bottomInputValue, setBottomInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Reset input validity when input values change
    setTopInputInvalid(false);
    setBottomInputInvalid(false);
  }, [topInputValue, bottomInputValue]);

  const handlePublish = async (event) => {
    event.preventDefault();

    if (!topInputValue || !bottomInputValue) {
      setTopInputInvalid(!topInputValue);
      setBottomInputInvalid(!bottomInputValue);
    } else {
      try {
        const response = await axios.post(`${API_URL}/videos`, {
          title: topInputValue,
          description: bottomInputValue,
        });
        console.log(response.data); // log the response from the API
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <hr className="divider-top" />

      <div className="upload">
        <div className="upload--item">
          <div className="upload--item__form">
            <h1 className="upload--item__header"> Upload Video</h1>

            <form onSubmit={handlePublish}>
              <div className="upload--item__desktop">
                <div className="upload--item__desktop--wrap">
                  <p className="upload--item__text">VIDEO THUMBNAIL</p>
                  <img src={UploadView} className="upload--item__image" alt="thumbnail" />
                </div>
                <div className="upload--item__desktop--wrap upload--item__desktop--wraptop">
                  <p className="upload--item__text">TITLE YOUR VIDEO</p>
                  <input
                    type="text"
                    className={`upload--item__input upload--item__input--top ${
                      topInputInvalid ? "upload--item__input--top--invalid" : ""
                    }`}
                    placeholder="Add a title to your video"
                    value={topInputValue}
                    onChange={(e) => setTopInputValue(e.target.value)}
                  />

                  <p className="upload--item__text">ADD A VIDEO DESCRIPTION</p>
                  <input
                    type="text"
                    className={`upload--item__input upload--item__input--bottom ${
                      bottomInputInvalid ? "upload--item__input--bottom--invalid" : ""
                    }`}
                    placeholder="Add a description of your video"
                    value={bottomInputValue}
                    onChange={(e) => setBottomInputValue(e.target.value)}
                  />
                </div>
              </div>

              <div className="upload--item__button">
                <button type="submit" className="upload--item__button--publish">
                  <img className="upload-item-image" src={uploadImage} alt="upload" />
                  <h3 className="upload-item__button--text">Publish</h3>
                </button>

                <button onClick={() => navigate("/")} className="upload--item__button--cancel">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
