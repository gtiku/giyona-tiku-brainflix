import React from "react";
import pfp from "../../assets/images/Mohan-muruge.jpg";
import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <div className="comment-form">
      <form className="comment-form__form">
        <div className="comment-form__pfp-box"></div>

        <div className="comment-form__form-inputs">
          <div className="comment-form__label-textarea">
            <label name="comment">JOIN THE CONVERSATION</label>
            <textarea
              name="comment"
              placeholder="Add a new comment"
              required
            ></textarea>
          </div>

          <button className="comment-form__button">COMMENT</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
