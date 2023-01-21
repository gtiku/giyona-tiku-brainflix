import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoComments from "../../components/VideoComments/VideoComments";
import NextVideosList from "../../components/NextVideos/NextVideosList";

const HomeView = () => {
  document.title = "Brainflix";
  let { videoID } = useParams();

  const [video, setVideo] = useState(null);
  const [nextVideos, setNextVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!videoID) {
      const startHomeView = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:8080/api/v1/videos/"
          );
          setVideo(data.video);
          setNextVideos(data.nextVideos);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      startHomeView();
    }
  });

  useEffect(() => {
    if (videoID) {
      const nextVideoView = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:8080/api/v1/videos/${videoID}`
          );
          setVideo(data.video);
          setNextVideos(data.nextVideos);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      nextVideoView();
    }
  }, [videoID]);

  while (isLoading || !video) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <VideoPlayer video={video} />
      <div className="app__flex">
        <div className="app__flex-left">
          <VideoInfo video={video} className="VideoInfo" />
          <VideoComments video={video} className="VideoComments" />
        </div>
        <div className="app__flex-right">
          <NextVideosList nextVideos={nextVideos} className="NextVideoList" />
        </div>
      </div>
    </main>
  );
};

export default HomeView;
