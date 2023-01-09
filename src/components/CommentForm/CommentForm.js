import React from "react";
import pfp from "../../assets/images/Mohan-muruge.jpg";
import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <div>
      <form className="comment-form__form">
        <div className="comment-form__pfp-box"></div>

        <div className="comment-form__form-box">
          <label name="comment" className="comment-form__form-text">
            JOIN THE CONVERSATION
          </label>
          <br />
          <textarea
            name="comment"
            placeholder="Add a new comment"
            required
          ></textarea>
          <button className="comment-form__button">COMMENT</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
