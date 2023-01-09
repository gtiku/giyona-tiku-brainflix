import React from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./VideoComments.scss";

const Comments = ({ videoComments }) => {
  return (
    <div>
      <CommentForm />

      <div>
        {videoComments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
