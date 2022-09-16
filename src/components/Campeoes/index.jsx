import React from "react";
import styled from "styled-components";
import CardCampeao from "../CardCampeao";
import { SectionPD, SectionTitle } from "../UI";
import Cores from "../UI/Cores";

const Campeoes = styled(SectionPD)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8.88vw;
  background-color: ${Cores.branco};
  width: 100vw;
`;

const Itens = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4.44vw;
  padding: 4.44vw 0 7vw 4.44vw;
  width: calc(100% - 4.44vw);

  height: fit-content;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Campeoes data-campeoes>
      <SectionTitle data-campeoes_title>Campeões</SectionTitle>
      <Itens>
        <CardCampeao />
        <CardCampeao />
        <CardCampeao />
      </Itens>
    </Campeoes>
  );
}
