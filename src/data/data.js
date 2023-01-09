import videoDetailsData from "./video-details.json";
import videosData from "./videos.json";

//  VIDEO DETAILS: Display details of playing video
const findCurrentVideo = (id) => {
  return videoDetailsData.find((video) => video.id === id);
};

// NEXT VIDEOS: Display all videos where id != id of playing video
const nextVideosData = (id) => {
  return videosData.filter((video) => video.id !== id);
};

export { findCurrentVideo, nextVideosData };
