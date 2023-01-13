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

  let { videoID } = useParams();

  if (videoID === undefined) {
    videoID = "9c268c0a-83dc-4b96-856a-bb5ded2772b1";
  }

  useEffect(() => {
    let API_URL = "https://project-2-api.herokuapp.com/videos/";
    let API_KEY = "?api_key=8b3718fa-5961-46ff-943a-ff0407423b81";

    const getVideos = async () => {
      try {
        const { data } = await axios.get(API_URL + videoID + API_KEY);
        setVideo(data);
      } catch (error) {
        console.error(error);
      }
    };
    getVideos();

    const getNextVideos = async () => {
      try {
        const { data } = await axios.get(API_URL + API_KEY);
        setNextVideos(data.filter((video) => video.id !== videoID));
      } catch (error) {
        console.error(error);
      }
    };
    getNextVideos();
  }, [videoID]);

  if (!video || !nextVideos) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <VideoPlayer video={video} />
      <div className="app__flex">
        <div className="app__flex-left">
          <VideoInfo video={video} className="VideoInfo" />
          <VideoComments
            videoComments={video.comments}
            className="VideoComments"
          />
        </div>
        <div className="app__flex-right">
          <NextVideosList nextVideos={nextVideos} className="NextVideoList" />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
