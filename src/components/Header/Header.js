import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/Logo/BrainFlix-logo.svg";

import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import uploadImage from "../../assets/Icons/upload.svg";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className="header-wrapper">

      <div className="header-item">

      <Link to ="/">
        <div className="header-item__logo">
          <Logo />
        </div>
        </Link>


          <div className="header-item__wrapper">
          <div className="header-item__input">
            <input
              type="text"
              className="header-item__input--item"
              placeholder="Search"
            />
          </div>

          <div className="header-item__avatar">
            <img
              src={AvatarImage}
              alt="Avatar Img"
              className="header-item__avatar--icon"
            />
          </div>
       

          <Link to ="/upload">
        <div className="header-item__button">
          <button type="button" className="header-item__button--item">
           
            <img
              className="header-item-image"
              src={uploadImage}
              alt="upload"
            />
             <h3 className="header-item__button--text">Upload</h3>
          </button>
        </div>
        </Link>
        </div>
      </div>
      </div>

    </>
  );
}
