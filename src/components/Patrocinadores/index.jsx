import React from "react";
import styled from "styled-components";
import softgate from "../../assets/img/Slogo.svg";
import hbEletronica from "../../assets/img/hbLogo.png";
import { ItensPD, SectionTitle } from "../UI";
import Cores from "../UI/Cores";

const Patrocinadores = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.11vw;
  background-color: ${Cores.branco};
  width: 100vw;
  height: fit-content;
`;

const Itens = styled(ItensPD)`
  padding: 4.44vw 0 8.88vw 4.44vw;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2.22vw;
  width: fit-content;
  height: fit-content;
`;

const Logo = styled.img`
  border: 8.88vw solid ${Cores.branco};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 40vw;
  box-shadow: 2.77vw 2.77vw 5.55vw ${Cores.shadow};
  border-radius: 100vw;
`;

const Nome = styled.h3`
  width: 57.77vw;
  height: 8.33vw;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 6.66vw;
  line-height: 8.33vw;
  text-align: center;
  color: ${Cores.cinzaEscuro};
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Patrocinadores data-patrocinadores>
      <SectionTitle>Patrocinadores</SectionTitle>
      <Itens>
        <Item>
          <Logo src={softgate} ></Logo>
          <Nome>Softgate</Nome>
        </Item>
        <Item>
          <Logo src={hbEletronica} ></Logo>
          <Nome>hbEletrônica</Nome>
        </Item>
        <Item>
          <Logo src={softgate} ></Logo>
          <Nome>Softgate</Nome>
        </Item>
      </Itens>
    </Patrocinadores>
  );
}
