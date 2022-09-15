import React from "react";
import styled from "styled-components";
import Cronograma from "../Cronograma";
import InscreverSe from "../InscreverSe";
import Premios from "../Premios";
import Requisitos from "../Requisitos";
import Cores from "../UI/Cores";

const PrideBrackets = styled.div`
  align-items: center;
  border-radius: 1.38vw;
  color: ${Cores.cinzaEscuro};
  display: flex;
  flex-direction: row;
  font-family: 'Quicksand', sans-serif;  font-size: 6.66vw;
  font-style: normal;
  font-weight: 600;
  height: 12.77;
  justify-content: center;
  line-height: 8.33vw;
  padding: 2.22vw 4.44vw;
  width: calc(82.22vw - 8.88vw);
`;

const Info = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8.88vw;
  height: fit-content;
  padding: 8.88vw 4.44vw 11.11vw;
  width: 91.11vw;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Info>
      <Premios></Premios>
      <Requisitos></Requisitos>
      <Cronograma></Cronograma>
      <InscreverSe></InscreverSe>
    </Info>
  );
}