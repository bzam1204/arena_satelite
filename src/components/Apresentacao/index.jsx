import React from "react";
import styled from "styled-components";
import logoArenaSatelite from "../../assets/img/logo.png";
import Cores from "../UI/Cores";
import VideoDemo from "../VideoDemo";

const Apresentacao = styled.div`
  width: 91.22vw;
  position: fixed;
  z-index: -10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4.44vw;
  gap: 6.66vw;
  height: 116vw;
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
  color: ${Cores.brancoQuase};
`;

const ArenaSatelite = styled.div`
  width: max-content;
  height: fit-content;
  font-family: notoDBold;
  font-style: normal;
  font-weight: 700;
  font-size: 13.3vw;
  line-height: 18vw;
  color: ${Cores.branco};
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
