import "./App.scss";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";
import Video from "./components/Video/Video";
import { findCurrentVideo, nextVideosData } from "./data/data";
// import { useState } from "react";

function App() {
  // Select  videoID
  // const [videoID, setVideoID] = useState(
  //   "84e96018-4022-434e-80bf-000ce4cd12b8"
  // );

  // Select video video
  // const [video, setVideo] = useState(getVideoDetailsData(videoID));

  // Click handler
  // const clickHandler = (event, videoID) => {
  //   event.preventDefault();
  // };

  const videoID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const currentVideo = findCurrentVideo(videoID);
  const nextVideos = nextVideosData(videoID);

  // const findVideo = (id) => {
  //   return videoDetailsData.find((video) => video.id === videoID);
  // };

  // const video = findVideo(videoID);
  console.log(currentVideo.video, currentVideo.title);
  console.log(nextVideos);

  return (
    <div className="App">
      <Header />
      <Video video={currentVideo} />
      <NextVideos nextVideos={nextVideos} />
    </div>
  );
}

export default App;
