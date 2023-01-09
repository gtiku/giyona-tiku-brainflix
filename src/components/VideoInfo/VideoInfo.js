import React from "react";
import "./VideoInfo.scss";
import views_icon from "../../assets/images/icons/views.svg";
import likes_icon from "../../assets/images/icons/likes.svg";

const VideoInfo = ({ video }) => {
  return (
    <div className="video-info">
      <h1 className="video-info__heading">{video.title}</h1>
      <div className="video-info__stats">
        <div className="video-info__creator-date">
          <p className="video-info__creator">{video.channel}</p>
          <p className="video-info__date">
            {new Date(video.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="video-info__engagement">
          <span className="video-info__views">
            <img src={views_icon} />
            {video.views}
          </span>
          <span className="video-info__likes">
            <img src={likes_icon} />
            {video.likes}
          </span>
        </div>
      </div>

      <p className="video-info__description">{video.description}</p>
    </div>
  );
};

export default VideoInfo;
