import React from "react";

import play_icon from "../../assets/images/icons/play.svg";
import pause_icon from "../../assets/images/icons/pause.svg";
import scrub_icon from "../../assets/images/icons/scrub.svg";
import fullscreen_icon from "../../assets/images/icons/fullscreen.svg";
import volume_up_icon from "../../assets/images/icons/volume_up.svg";
import volume_off_icon from "../../assets/images/icons/volume_off.svg";

const VideoControls = () => {
  return (
    <div className="video__controls">
      <div className="video__controls--left">
        <img
          src={play_icon}
          className="video__controls-icon video__controls-icon--play"
        />
        <img
          src={pause_icon}
          className="video__controls-icon video__controls-icon--pause"
        />
      </div>

      <div className="video__controls--middle">
        <img src={scrub_icon} className="video__controls-icon" />
        <span className="video__controls-time"></span>
      </div>

      <div className="video__controls--right">
        <img src={fullscreen_icon} className="video__controls-icon" />
        <img
          src={volume_up_icon}
          className="video__controls-icon video__controls-icon--volume"
        />
        <img
          src={volume_off_icon}
          className="video__controls-icon video__controls-icon--mute"
        />
      </div>
    </div>
  );
};

export default VideoControls;
