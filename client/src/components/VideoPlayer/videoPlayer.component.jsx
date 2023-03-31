import React from 'react';
import ReactPlayer from 'react-player/lazy';

import './videoPlayer.styles';

const VideoPlayer = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      controls={true}
      width='100%'
      height='315px'
      style={{ marginTop: '1rem' }}
    />
  );
};

export default VideoPlayer;
