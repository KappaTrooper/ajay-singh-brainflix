import "./Header.scss";

import { ReactComponent as Logo } from "../assets/Logo/BrainFlix-logo.svg";

import AvatarImg from "../assets/Images/Mohan-muruge.jpg";



export default function Header() {
  return (
    <>
      <div className="header-item">
        <div className="header-item__logo">
          <Logo />
        </div>
        <div className="header-item__inputavatar">
          <div className="header-item__input">
            <input
              type="text"
              className="header-item__searchInput"
              placeholder="Search"
            />
          </div>

          <div className="header-item__avatar">
            <img src={AvatarImg} alt="Avatar Img" className="header-item__avatar-icon" />
          </div>
        </div>

        <div className="header-item__button">
          <button type="button">
            <div>Upload</div>
          </button>
        </div>
      </div>
    </>
  );
}
