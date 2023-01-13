import React from "react";
import { Link } from "react-router-dom";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideosList.scss";

const NextVideosList = ({ nextVideos }) => {
  return (
    <div className="next-videos">
      <h2 className="next-videos__heading">NEXT VIDEOS</h2>
      {nextVideos.map((video) => (
        <div className="next-videos__box">
          <Link to={`/videos/${video.id}`}>
            <NextVideo key={video.id} video={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NextVideosList;
