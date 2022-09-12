import React from "react";
import styled from "styled-components";
import video from "../../assets/video/demo.mp4";

const Video = styled.video`
  width: 100vw;
  height: 125vw;
  position: absolute;
  object-fit: cover;
  z-index: -10;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Video playsinline autoPlay muted loop id="myVideo">
      <source src={video} type="video/mp4" />
    </Video>
  );
}
