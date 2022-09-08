import React from "react";
import styled from "styled-components";
import video from "../../assets/img/video.png";
import logoArenaSatelite from "../../assets/img/logo.png";

const Home = styled.div``;

const Apresentacao = styled.div`
  background-image: url(${video});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;
  width: 100vw;
  height: 420px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Logo = styled.div`
  width: 72px;
  height: 72px;

  background: url(${logoArenaSatelite});

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

  width: 328px;
  height: 109px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const NoSomos = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: notoLight;
  font-weight: 300;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.83);

  /* Inside auto layout */

  flex: none;
  order: 0;
`;

const ArenaSatelite = styled.div`
  width: fit-content;
  height: fit-content;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Home>
      <Apresentacao>
        <Logo />
        <Texto>
          <NoSomos>Nós Somos</NoSomos>
          <ArenaSatelite>Arena Satélite</ArenaSatelite>
        </Texto>
      </Apresentacao>
    </Home>
  );
}
