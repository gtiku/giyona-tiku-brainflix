import React from "react";
import "./NextVideo.scss";

const NextVideo = ({ video }) => {
  return (
    <div className="next-video__box">
      <div className="next-video__image-box">
        <img
          className="next-video__image"
          src={video.image}
          alt="video thumbnail"
        />
      </div>

      <div className="next-video__video-text">
        <p className="next-video__title">{video.title}</p>
        <p className="next-video__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default NextVideo;
