import React from "react";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideosList.scss";

const NextVideosList = ({ nextVideos, handleNextVideoClick }) => {
  return (
    <div className="next-videos">
      <h2 className="next-videos__heading">NEXT VIDEOS</h2>
      {nextVideos.map((video) => (
        <div className="next-videos__box">
          <NextVideo
            key={video.id}
            video={video}
            handleNextVideoClick={(event) =>
              handleNextVideoClick(event, video.id)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default NextVideosList;
