// components/VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

// Define color palette
const colors = {
  darkBlue: '#0A1F2C',
  white: '#FFFFFF',
  green: '#00F6B4',
  buttonGreen: '#21C16C',
  buttonHoverGreen: '#17A253',
  borderColor: '#A1A7B3',
};

// Styled components
const VideoContainer = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  border: 1px solid ${colors.borderColor};
`;

const VideoTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const VideoDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  margin-bottom: 20px;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
`;

const ExploreButton = styled.button`
  background-color: ${colors.buttonGreen};
  color: ${colors.white};
  padding: 8px 16px;
  border: none;
  font-size: 14px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.buttonHoverGreen};
  }
`;

// YouTube options
const videoOpts = {
  width: '100%',
  height: '100%',
  playerVars: {
    autoplay: 0,           // Set to 0 for reliability
    modestbranding: 1,
    rel: 0,
  },
};

const VideoPlayer = () => (
  <VideoContainer>
    <VideoTitle>Organize Your ServiceNow Scripts With SnowScripting</VideoTitle>
    <VideoDescription>The ultimate platform for ServiceNow developers to store, manage, and instantly access all scripts in one beautifully organized workspace.</VideoDescription>
    <PlayerWrapper>
      <YouTube
        videoId="kV0B9q8CJfM"
        opts={videoOpts}
        iframeClassName="youtube-iframe"
      />
    </PlayerWrapper>
    <ExploreButton></ExploreButton>
  </VideoContainer>
);

export default VideoPlayer;
