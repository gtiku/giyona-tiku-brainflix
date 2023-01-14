import React, { useState } from "react";
import "./CommentForm.scss";
import add_comment from "../../assets/images/icons/add_comment.svg";
import Button from "../Button/Button";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="comment-form__pfp-box"></div>

      <div className="comment-form__form-inputs">
        <label name="comment" className="comment-form__label">
          JOIN THE CONVERSATION
          <textarea
            name="comment"
            placeholder="Add a new comment"
            className="comment-form__textarea"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
          ></textarea>
        </label>
        <Button
          icon={add_comment}
          text={"COMMENT"}
          className="comment-form__button"
        />
      </div>
    </form>
  );
};

export default CommentForm;
