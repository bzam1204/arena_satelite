import React from "react";
import styled from "styled-components";
import inscreverSeImg from "../../assets/img/inscreverSe.svg";
import { Botao } from "../UI";
import Cores from "../UI/Cores";

const InscreverSe = styled(Botao)``;
const Icon = styled.img`
  width: 6.66vw;
  height: 6.66vw;
`;
const Text = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 500;
  height: 8.33vw;
  line-height: 8.33vw;
  width: fit-content;
`;

const Anchor = styled.a`
  color: ${Cores.cinzaEscuro};
  text-decoration: none;
  &:visited {
    color: ${Cores.cinzaEscuro};
    text-decoration: none;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Anchor href="https://api.whatsapp.com/send?1=pt_BR&phone=5595991263017">
      <InscreverSe>
        <Icon src={inscreverSeImg}></Icon>
        <Text>Inscrever-se</Text>
      </InscreverSe>
    </Anchor>
  );
}
