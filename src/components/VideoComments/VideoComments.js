import React, { useState } from "react";
import axios from "axios";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./VideoComments.scss";

const Comments = ({ video }) => {
  const [comments, setComments] = useState(video.comments);

  const API_URL = "https://project-2-api.herokuapp.com/videos/";
  const API_KEY = "?api_key=8b3718fa-5961-46ff-943a-ff0407423b81";

  const updateComments = async () => {
    try {
      const { data } = await axios.get(API_URL + video.id + API_KEY);
      setComments(data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (deletedComment) => {
    try {
      await axios.delete(
        `${API_URL}${video.id}/comments/${deletedComment.id}${API_KEY}`
      );
      updateComments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="comments">
      <h2 className="comments__total">{comments.length} Comments</h2>
      <CommentForm video={video} updateComments={updateComments} />

      <div>
        {comments
          .map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              deleteComment={deleteComment}
            />
          ))
          .sort((a, b) => {
            return b.props.comment.timestamp - a.props.comment.timestamp;
          })}
      </div>
    </section>
  );
};

export default Comments;
