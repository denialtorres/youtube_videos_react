import React from "react";
import htmlReactParser from "html-react-parser";

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  if (!video) {
    return <div>Loading..</div>;
  } else {
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{htmlReactParser(video.snippet.title)}</h4>
          <p>{htmlReactParser(video.snippet.description)}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
