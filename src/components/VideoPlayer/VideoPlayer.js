import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ video }) => {
  return (
    <section className="video">
      <div className="video__player-box">
        <video className="video__player" controls poster={video.image}>
          <source src={video.video} type="#"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
