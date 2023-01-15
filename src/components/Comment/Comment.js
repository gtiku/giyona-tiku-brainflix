import React from "react";
import { useParams } from "react-router";

import "./Comment.scss";
import delete_icon from "../../assets/images/icons/delete.svg";

const Comment = ({ comment, deleteComment }) => {
  let { videoID } = useParams();
  return (
    <div className="comment">
      <div className="comment__pfp-box"></div>
      <div className="comment__text-display">
        <div className="comment__name-date">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </div>
        <p className="commment__comment">{comment.comment}</p>
      </div>
      <div>
        <img
          src={delete_icon}
          alt="delete comment"
          className="commment__delete"
          onClick={() => deleteComment(videoID, comment)}
        />
      </div>
    </div>
  );
};

export default Comment;
