import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import naoHaTorneios from "../../assets/img/naoHaTorneios.png";
import poster from "../../assets/img/poster.png";
import Cores from "../UI/Cores";
import { SectionTitle, ItensPD, SectionPD } from "../UI";

import { useRecoilState } from "recoil";
import { torneiosState } from "../../states/torneiosState";
import Poster from "./Poster";
import hashCode from "../../js/hashcode";

const TorneiosAbertos = styled(SectionPD)`
  gap: 4.44vw;
  padding: 4.44vw 0 0;
`;

const Itens = styled(ItensPD)`
  padding: 8.88vw 4.44vw 11.88vw 4.44vw;
  width: calc(100% - 8.88vw);
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [listaTorneios, setListaTorneios] = useRecoilState(torneiosState);
  return (
    <TorneiosAbertos data-torneios_abertos>
      <SectionTitle>Torneios Abertos</SectionTitle>
      <Itens>
        {listaTorneios.map((element) => {
          return <Poster key={element.id} dados={element}></Poster>;
        })}
      </Itens>
    </TorneiosAbertos>
  );
}
