import React, { useState } from "react";

import "./Comment.scss";
import delete_icon from "../../assets/images/icons/delete.svg";

const Comment = ({ comment, deleteComment }) => {
  const [addClass, setAddClass] = useState("");
  return (
    <div className={`comment  ${addClass}`}>
      <div className="comment__pfp-box"></div>

      <div className="comment__text-display">
        <div className="comment__name-date">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </div>

        <div className="comment__comment-delete">
          <p className="comment__comment">{comment.comment}</p>
          <img
            src={delete_icon}
            alt="delete comment"
            className="comment__delete"
            onClick={() => {
              setAddClass("comment--delete");
              deleteComment(comment);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
