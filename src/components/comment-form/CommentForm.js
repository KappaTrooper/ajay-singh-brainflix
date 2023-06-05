import React from "react";
import "./CommentForm.scss";
import add from "../../assets/Icons/add_comment.svg";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";

export default function CommentForm() {
  return (
    <>
      <div className="form-item">
        <div className="form-item__container">
          <div className="form-item__avatar-item">
            <img
              src={AvatarImage}
              alt="Avatar Img"
              className="header-item__avatar--icon"
            />
          </div>

          <div className="form-item__form-item">
            <div className="form-item__form-item">
              <div className="form-item__tablet">
                <label className="form-item__label">
                  JOIN THE CONVERSATION
                </label>

                <input
                  className="form-item__input"
                  placeholder="Add a new comment"
                />
              </div>

              <div className="form-item__tablet">
                <button type="button" className="form-item__button">
                  <img className="form-item-image" src={add} alt="upload" />
                  <h3 className="form-item__button--text">COMMENT</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
