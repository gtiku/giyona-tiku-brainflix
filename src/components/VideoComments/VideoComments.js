import React from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./VideoComments.scss";

const Comments = ({ videoComments }) => {
  return (
    <div className="comments">
      <h2 className="comments__total">{videoComments.length} Comments</h2>
      <CommentForm />

      <div>
        {videoComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
