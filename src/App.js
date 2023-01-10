import "./App.scss";
import Header from "./components/Header/Header";
import NextVideosList from "./components/NextVideos/NextVideosList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoComments from "./components/VideoComments/VideoComments";
import { findCurrentVideo, nextVideosData } from "./data/data";
import { useState } from "react";

function App() {
  // Select  videoID
  const [videoID, setVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  // Select video
  const [currentVideo, setVideo] = useState(findCurrentVideo(videoID));

  // Next videos
  const [nextVideos, setnextVideos] = useState(nextVideosData(videoID));

  // Next video click handler
  const handleNextVideoClick = (event, id) => {
    event.preventDefault();
    setVideoID(id);
    setVideo(findCurrentVideo(id));
    setnextVideos(nextVideosData(id));
  };

  return (
    <div className="app">
      <Header />
      <VideoPlayer video={currentVideo} />
      <div className="app__flex">
        <div className="app__flex-left">
          <VideoInfo video={currentVideo} className="VideoInfo" />
          <VideoComments
            videoComments={currentVideo.comments}
            className="VideoComments"
          />
        </div>
        <div className="app__flex-right">
          <NextVideosList
            nextVideos={nextVideos}
            handleNextVideoClick={handleNextVideoClick}
            className="NextVideoList"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
