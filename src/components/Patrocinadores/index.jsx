import React from "react";
import styled from "styled-components";
import softgate from "../../assets/img/Slogo.svg";
import hbEletronica from "../../assets/img/hbLogo.png";
import { ItensPD, SectionPD, SectionTitle } from "../UI";
import Cores from "../UI/Cores";
import { useRecoilState } from "recoil";
import { patrocinadoresState } from "../../states/patrocinadores";

const Patrocinadores = styled(SectionPD)`
  gap: 11.11vw;
`;

const Itens = styled(ItensPD)`
  padding: 4.44vw 4.44vw 8.88vw 4.44vw;
  width: calc(100% - 8.88vw);
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

const getFoto = (foto) => {
  const img = require(`../../assets/img/${foto}`);
  return img;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [listaPatrocinadores, setListaPatrocinadores] =
    useRecoilState(patrocinadoresState);
  return (
    <Patrocinadores data-patrocinadores>
      <SectionTitle>Patrocinadores</SectionTitle>
      <Itens>
        {listaPatrocinadores.map((item) => {
          return (
            <Item key={item.id}>
              <Logo src={getFoto(item.img)}></Logo>
              <Nome>{item.nome}</Nome>
            </Item>
          );
        })}
      </Itens>
    </Patrocinadores>
  );
}
