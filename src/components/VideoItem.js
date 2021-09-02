import React from 'react';
import './VideoItem.scss';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
      <div className="content">
        <div className="header">
          <p className="font">{video.snippet.title}</p>
        </div>

      </div>

    </div>
  );
}

export default VideoItem;