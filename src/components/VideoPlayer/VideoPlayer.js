import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ videoUrl, videoPoster }) => {
  return (
    <div className="video">
      <video className="video__player" controls poster={videoPoster}>
        <source src={videoUrl} type="#"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
