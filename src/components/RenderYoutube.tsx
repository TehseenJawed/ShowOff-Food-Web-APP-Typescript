import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const RenderYoutube = ({videoId}:any) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '200px',
    width: '320px',
    playerVars: {
      autoplay: 0,
    },
  };

  return <div style={{width:'320px', height:'200px'}}><YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} /></div>;
}

export default RenderYoutube