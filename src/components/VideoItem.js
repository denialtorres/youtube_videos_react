import "./VideoItem.css";
import React from "react";
import htmlReactParser from "html-react-parser";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{htmlReactParser(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
