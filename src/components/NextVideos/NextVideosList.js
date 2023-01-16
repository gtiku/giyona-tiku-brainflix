import React from "react";
import { Link } from "react-router-dom";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideosList.scss";

const NextVideosList = ({ nextVideos }) => {
  return (
    <div className="next-videos">
      <h3 className="next-videos__heading">NEXT VIDEOS</h3>
      {nextVideos.map((video) => (
        <div className="next-videos__box">
          <Link to={`/videos/${video.id}`}>
            <NextVideo video={video} key={video.id} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NextVideosList;
