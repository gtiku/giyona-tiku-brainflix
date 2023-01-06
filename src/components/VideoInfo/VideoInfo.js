import React from "react";
import "./VideoInfo.scss";
import views_icon from "../../assets/images/icons/views.svg";
import likes_icon from "../../assets/images/icons/likes.svg";

const VideoInfo = () => {
  return (
    <div className="video-info">
      <h1 className="video-info__heading">BMX Rampage: 2021 Highlights</h1>
      <div className="video-info__stats">
        <div className="video-info__creator-date">
          <p className="video-info__creator">By Red Crow</p>
          <p className="video-info__date">07/11/2021</p>
        </div>
        <div className="video-info__engagement">
          <span className="video-info__views">
            <img src={views_icon} />
            1,001,023
          </span>
          <span className="video-info__likes">
            <img src={likes_icon} />
            110,985
          </span>
        </div>
      </div>

      <p className="video-info__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title.
      </p>
    </div>
  );
};

export default VideoInfo;
