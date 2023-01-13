import React from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  return (
    <form onSubmit={() => navigate("/")}>
      <label htmlFor="title">
        TITLE YOUR VIDEO <input type="text" name="title" id="title" />
      </label>
      <label htmlFor="description">
        ADD A VIDEO DESCRIPTION{" "}
        <textarea rows="4" cols="50" name="description" id="description" />
      </label>
      <div>
        <button type="reset">CANCEL</button>
        <button type="submit">PUBLISH</button>
      </div>
    </form>
  );
};

export default Upload;
