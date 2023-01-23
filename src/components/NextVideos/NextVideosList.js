import React from "react";
import { Link } from "react-router-dom";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideosList.scss";

const NextVideosList = ({ nextVideos }) => {
  return (
    <section className="next-videos">
      <h3 className="next-videos__heading">NEXT VIDEOS</h3>
      {nextVideos.map((video) => (
        <div className="next-videos__box" key={video.id}>
          <Link to={`/videos/${video.id}`} className="next-videos__links">
            <NextVideo video={video} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default NextVideosList;
