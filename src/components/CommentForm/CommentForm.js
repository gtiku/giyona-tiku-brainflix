import React, { useState, useEffect } from "react";
import "./CommentForm.scss";
import add_comment from "../../assets/images/icons/add_comment.svg";
import Button from "../Button/Button";
import axios from "axios";

const CommentForm = ({ video, updateComments }) => {
  const [comment, setComment] = useState("");
  const [valid, setValid] = useState(false);

  const API_URL = "https://project-2-api.herokuapp.com/videos/";
  const API_KEY = "?api_key=8b3718fa-5961-46ff-943a-ff0407423b81";

  useEffect(() => {
    setValid(comment.length > 2);
  }, [comment]);

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
      alert("Comments must include at least 3 characters.");
    } else {
      postComment();
      setComment("");
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
            className="comment-form__textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
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
