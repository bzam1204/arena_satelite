import React from "react";
import styled from "styled-components";
import torneioIcon from "../../assets/img/torneioIcon.svg";
import trophyIcon from "../../assets/img/trophyIcon.svg";
import handshakeIcon from "../../assets/img/handshakeIcon.svg";
import facaParteIcon from "../../assets/img/facaParteIcon.svg";
import quemSomosIcon from "../../assets/img/quemSomosIcon.svg";

const Navbar = styled.nav``;

const Itens = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4.44vw;
  gap: 8px;

  width: 91.22vw;
  height: fit-content;
  overflow-x: scroll;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  scrollbar-color: transparent;

  &::-webkit-scrollbar {
    border: none;
  }
  scrollbar-color: #e6e6e6 green;
  scrollbar-width:0px;


`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  width: fit-content;
  height: fit-content;

  background: #feea90;
  border-radius: 50px;
`;

const Icone = styled.img`
  width: 16px;
  height: 16px;
`;

const Nome = styled.p`
  font-family: quicksand;
  font-style: normal;
  font-weight: 500;
  padding: 0;
  margin: 0;
  width: fit-content;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  white-space: nowrap;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Navbar>
      <Itens>
        <Item>
          {" "}
          <Icone src={torneioIcon} /> <Nome>Torneios Abertos</Nome>
        </Item>
        <Item>
          {" "}
          <Icone src={trophyIcon} /> <Nome>Campeões</Nome>
        </Item>
        <Item>
          {" "}
          <Icone src={handshakeIcon} /> <Nome>Patrocinadores</Nome>
        </Item>
        <Item>
          {" "}
          <Icone src={facaParteIcon} /> <Nome>Faça Parte</Nome>
        </Item>
        <Item>
          {" "}
          <Icone src={quemSomosIcon} /> <Nome>Quem Somos</Nome>
        </Item>
      </Itens>
    </Navbar>
  );
}
