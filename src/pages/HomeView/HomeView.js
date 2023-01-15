import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoComments from "../../components/VideoComments/VideoComments";
import NextVideosList from "../../components/NextVideos/NextVideosList";

const HomeView = () => {
  const [video, setVideo] = useState(null);
  const [nextVideos, setNextVideos] = useState(null);

  const API_URL = "https://project-2-api.herokuapp.com/videos/";
  const API_KEY = "?api_key=8b3718fa-5961-46ff-943a-ff0407423b81";

  let { videoID } = useParams();
  if (videoID === undefined) {
    videoID = "9c268c0a-83dc-4b96-856a-bb5ded2772b1";
  }

  useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await axios.get(API_URL + videoID + API_KEY);
        setVideo(data);
      } catch (error) {
        console.error(error);
      }
    };

    const getNextVideos = async () => {
      try {
        const { data } = await axios.get(API_URL + API_KEY);
        setNextVideos(data.filter((video) => video.id !== videoID));
      } catch (error) {
        console.error(error);
      }
    };

    getVideos();
    getNextVideos();
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
