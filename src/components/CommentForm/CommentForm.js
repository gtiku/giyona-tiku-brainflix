import React from "react";
import pfp from "../../assets/images/Mohan-muruge.jpg";

const CommentForm = () => {
  return (
    <div>
      <form className="comment-form">
        <div>
            <img src={pfp} className="pfp comment-form__pfp" />
        </div>
        
        <div className="comment-form__input-label">
          <label name="name">JOIN THE CONVERSATION</label>
          <br /> 
          <input
            type="text"
            name="name"
            placeholder="Add a new comment"
          ></input>
        </div>

        <button>COMMENT</button>
      </form>
    </div>
  );
}

export default CommentForm;
