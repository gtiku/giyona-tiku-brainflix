import React, { useState } from "react";
import "./CommentForm.scss";
import add_comment from "../../assets/images/icons/add_comment.svg";
import Button from "../Button/Button";
import axios from "axios";

const CommentForm = ({ video, updateComments }) => {
  const [comment, setComment] = useState("");
  const [valid, setValid] = useState(false);
  const [addClass, setAddClass] = useState("");

  const API_URL = "https://project-2-api.herokuapp.com/videos/";
  const API_KEY = "?api_key=8b3718fa-5961-46ff-943a-ff0407423b81";

  const onChangeHandler = (event) => {
    setComment(event.target.value);
    setValid(event.target.value.trim().length > 0);
    setAddClass(!valid ? "comment-form__textarea--invalid" : "");
  };

  const postComment = async () => {
    try {
      await axios.post(API_URL + `${video.id}/comments` + API_KEY, {
        name: "Mohan Muruge",
        comment: comment,
      });
      updateComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) {
      setAddClass("comment-form__textarea--invalid");
      alert("Please enter a comment.");
    } else {
      postComment();
      setComment("");
      setAddClass("");
      setValid(false);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form__pfp-box"></div>

      <div className="comment-form__form-inputs">
        <label name="comment" className="comment-form__label">
          JOIN THE CONVERSATION
          <textarea
            name="comment"
            placeholder="Add a new comment"
            className={`comment-form__textarea ${addClass}`}
            value={comment}
            onChange={onChangeHandler}
          />
        </label>
        <div className="comment-form__button-box">
          <Button
            icon={add_comment}
            text="COMMENT"
            type={"submit"}
            className="comment-form__button"
          />
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
