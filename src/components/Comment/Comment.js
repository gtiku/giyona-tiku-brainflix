import React from "react";
import "./Comment.scss";

const Comment = ({ comment }) => {
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
    </div>
  );
};

export default Comment;
