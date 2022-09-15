import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import naoHaTorneios from "../../assets/img/naoHaTorneios.png";
import poster from "../../assets/img/poster.png";
import Cores from "../UI/Cores";
import { SectionTitle, ItensPD } from "../UI";

const TorneiosAbertos = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4.44vw;
  height: fit-content;
  padding: 4.44vw 0 0;
  width: 100vw;
  background-color: ${Cores.branco};
`;

const Poster = styled.img`
  border-radius: 1.38vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw ${Cores.shadow});
  height: 122.22vw;
  width: 88.11vw;
`;
const Item = styled.li``;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <TorneiosAbertos data-torneios_abertos>
      <SectionTitle>Torneios Abertos</SectionTitle>
      <ItensPD>
        <Item>
          <Link to={"/"}>
            <Poster src={naoHaTorneios}></Poster>
          </Link>
        </Item>
        <Item>
          <Link to={"/torneio"}>
            <Poster src={poster}></Poster>
          </Link>
        </Item>
      </ItensPD>
    </TorneiosAbertos>
  );
}
