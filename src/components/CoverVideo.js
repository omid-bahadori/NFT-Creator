import React from "react";

// styles
import { styled } from "styled-components";

// gif
import Gif from "../assets/Home Video.mp4";

const VideoContainer = styled.div`
    width: 100%;

    video {
        width: 100%;
        height: auto;
    }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={Gif} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
