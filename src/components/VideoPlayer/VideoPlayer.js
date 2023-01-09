import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ video }) => {
  return (
    <div className="video">
      <video className="video__player" controls poster={video.image}>
        <source src={video.video} type="#"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
