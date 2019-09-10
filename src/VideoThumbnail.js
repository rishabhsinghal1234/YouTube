import React from 'react';
import './VideoThumbnail.css';
// import { Wordwrap } from './Functions'

export function VideoThumbnail(props) {
  return (
    <div className="VideoComponent">
      <img id="VideoThumbnail" src={props.src} alt="" />
      <div className="Details">
        <p id="VideoTitle">{props.VideoTitleList}</p>
        <p id="ChannelName">{props.ChannelName}</p>
        <span id="ViewsCount">{props.ViewsCount} • </span><span id="UploadTime">{props.UploadTime}</span>
      </div>
    </div>
  );
}

export default VideoThumbnail;