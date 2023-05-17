import "../styles/Header.scss";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

import { ReactComponent as Logo } from "../assets/Logo/BrainFlix-logo.svg";
import { ReactComponent as SearchIcon } from "../assets/Icons/search.svg";
import { ReactComponent as UploadIcon } from "../assets/Icons/upload.svg";
import AvatarIcon from "../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <>
      <div className="header-item">
                        <div className="header-item__logo">
                        <Logo />
                        </div>

                    <div className="header-item__container">
                            <div className="header-item__input">
                                <input
                                type="text"
                                className="header-item__searchInput"
                                placeholder="Search"
                                />
                            </div>
                            <div className="header-item__button">
                                <Button icon={UploadIcon} buttonText="Upload" />
                            </div>

                            <div className="header-item__avatar">
                                <Avatar img={AvatarIcon} />
                            </div>
                    </div>
      </div>
    </>
  );
}
