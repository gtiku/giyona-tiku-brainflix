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

  const API_URL = "https://project-2-api.herokuapp.com/videos/";
  const API_KEY = "?api_key=8b3718fa-5961-46ff-943a-ff0407423b81";

  useEffect(() => {
    if (!videoID) {
      const startHomeView = async () => {
        try {
          const { data: videos } = await axios.get(API_URL + API_KEY);
          setNextVideos(videos.filter((video) => video.id !== videos[0].id));
          const { data } = await axios.get(API_URL + videos[0].id + API_KEY);
          setVideo(data);
        } catch (error) {
          console.error(error);
        }
      };
      startHomeView();
    }
  }, []);

  useEffect(() => {
    if (videoID) {
      const getVideos = async () => {
        try {
          const { data: videos } = await axios.get(API_URL + API_KEY);
          setNextVideos(videos.filter((video) => video.id !== videoID));
          const { data } = await axios.get(API_URL + videoID + API_KEY);
          setVideo(data);
        } catch (error) {
          console.error(error);
        }
      };
      getVideos();
    }
  }, [videoID]);

  while (!video || !nextVideos) {
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
