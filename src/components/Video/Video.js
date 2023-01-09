import React from "react";
import VideoComments from "../VideoComments/VideoComments";
import VideoControls from "../VideoControls/VideoControls";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Video = ({ video }) => {
  const videoUrl = video.video;
  const videoPoster = video.image;
  const videoComments = video.comments;
  return (
    <div>
      <VideoPlayer videoUrl={videoUrl} videoPoster={videoPoster} />
      {/* <VideoControls /> */}
      <VideoInfo video={video} />
      <VideoComments videoComments={videoComments} />
    </div>
  );
};

export default Video;
