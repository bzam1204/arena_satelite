import React from "react";
import styled from "styled-components";
import Cronograma from "../Cronograma";
import InscreverSe from "../InscreverSe";
import Premios from "../Premios";
import Requisitos from "../Requisitos";


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
