import React from "react";
import "./NextVideos.scss";

const NextVideos = ({ nextVideos }) => {
  console.log(nextVideos[0].title);
  return (
    <div className="next-videos">
      <h2 className="next-videos__heading">NEXT VIDEOS</h2>
      {nextVideos.map((video) => (
        <div className="next-videos__box">
          <div className="next-videos__image-box">
            <img
              className="next-videos__image"
              src={video.image}
              alt="video thumbnail"
            />
          </div>

          <div className="next-videos__video-text">
            <p className="next-videos__title">{video.title}</p>
            <p className="next-videos__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NextVideos;
