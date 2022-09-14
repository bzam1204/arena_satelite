import React, { useEffect } from "react";
import styled from "styled-components";
import torneioIcon from "../../assets/img/torneioIcon.svg";
import trophyIcon from "../../assets/img/trophyIcon.svg";
import handshakeIcon from "../../assets/img/handshakeIcon.svg";
import facaParteIcon from "../../assets/img/facaParteIcon.svg";
import quemSomosIcon from "../../assets/img/quemSomosIcon.svg";
import navbarClickAndScroll from "../../js/navbarClickAndScroll";
import fixNavbar from "../../js/fixNavbar";

const Navbar = styled.nav`
  position: initial;
  z-index: 10;
  padding: 2.22vw 0;
  transition: all 0.4s;
  background-color: #fff;
`;

const Itens = styled.li`
  padding: 0 4.44vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.22vw;
  width: 91.22vw;
  height: fit-content;
  overflow-x: scroll;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    height: 0;
  }
  scrollbar-color: #e6e6e6 green;
  scrollbar-width: 0px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2.22vw 4.44vw;
  gap: 2.22vw;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  background: #feea90;
  border-radius: 50vw;
`;

const Icone = styled.img`
  width: 4.44vw;
  height: 4.44vw;
`;

const Nome = styled.p`
font-family: 'Quicksand', sans-serif;  font-style: normal;
  font-weight: 500;
  padding: 0;
  margin: 0;
  width: fit-content;
  font-size: 4.44vw;
  line-height: 5.55vw;
  color: #333333;
  white-space: nowrap;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  useEffect(() => {
    navbarClickAndScroll();
    fixNavbar();
  }, []);

  return (
    <Navbar data-navbar>
      <Itens>
        <Item data-navbar_torneio>
          <Icone src={torneioIcon} />{" "}
          <Nome className="naoSelecionavel">Torneios Abertos</Nome>
        </Item>
        <Item data-navbar_campeoes>
          <Icone src={trophyIcon} />{" "}
          <Nome className="naoSelecionavel">Campeões</Nome>
        </Item>
        <Item data-navbar_patrocinadores>
          <Icone src={handshakeIcon} />{" "}
          <Nome className="naoSelecionavel">Patrocinadores</Nome>
        </Item>
        <Item data-navbar_faca_parte>
          <Icone src={facaParteIcon} />{" "}
          <Nome className="naoSelecionavel">Faça Parte</Nome>
        </Item>
        <Item data-navbar_quem_somos>
          <Icone src={quemSomosIcon} />{" "}
          <Nome className="naoSelecionavel">Quem Somos</Nome>
        </Item>
      </Itens>
    </Navbar>
  );
}
