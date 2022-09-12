import React from "react";
import styled from "styled-components";

const Map = styled.iframe`
  width: 91.11vw;
  height: 68.88vw;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9033996542057!2d-60.74549067008511!3d2.8442248070994376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c6480186e56a9ff!2sPra%C3%A7a%20Arcoires!5e0!3m2!1spt-BR!2sbr!4v1662927551960!5m2!1spt-BR!2sbr"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></Map>
  );
}
