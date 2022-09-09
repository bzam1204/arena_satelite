import React from "react";
import styled from "styled-components";
import logoArenaSatelite from "../../assets/img/logo.png";
import VideoDemo from "../VideoDemo";

const Apresentacao = styled.div`
  width: 91.22vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4.44vw;
  gap: 6.66vw;
  height: 116vw;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Logo = styled.div`
  width: 20vw;
  height: 20vw;
  background: url(${logoArenaSatelite});
  background-size: cover;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Texto = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;

  width: fit-content;
  height: fit-content;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const NoSomos = styled.div`
  width: max-content;
  height: fit-content;

  font-family: notoLight;
  font-weight: lighter;
  font-size: 8.88vw;
  line-height: 12.2vw;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.83);

  /* Inside auto layout */

  flex: none;
  order: 0;
`;

const ArenaSatelite = styled.div`
  width: max-content;
  height: fit-content;
  font-family: notoDBold;
  font-style: normal;
  font-weight: 700;
  font-size: 13.3vw;
  line-height: 18vw;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <VideoDemo />
      <Apresentacao>
        <Logo />
        <Texto>
          <NoSomos>Nós Somos</NoSomos>
          <ArenaSatelite>Arena Satélite</ArenaSatelite>
        </Texto>
      </Apresentacao>
    </>
  );
}