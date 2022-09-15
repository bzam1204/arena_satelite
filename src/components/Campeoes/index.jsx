import React from "react";
import styled from "styled-components";
import CardCampeao from "../CardCampeao";
import Cores from "../UI/Cores";

const Campeoes = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8.88vw;
  background-color: ${Cores.branco};
  width: 100vw;
`;

const Title = styled.h2`
  width: fit-content;
  height: fit-content;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 8.88vw;
  line-height: 11.11vw;
  color: ${Cores.cinzaEscuro};
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
      <Title data-campeoes_title>Campeões</Title>
      <Itens>
        <CardCampeao />
        <CardCampeao />
        <CardCampeao />
      </Itens>
    </Campeoes>
  );
}
