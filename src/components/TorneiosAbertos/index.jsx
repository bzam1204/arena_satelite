import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import poster from "../../assets/img/poster.png";

const TorneiosAbertos = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4.44vw;
  height: fit-content;
  padding: 4.44vw 0 0;
  width: 100vw;
  background-color: #fff;
`;
const Title = styled.h2`
  color: #333333;
  font-family: quicksand;
  font-size: 8.88vw;
  font-style: normal;
  font-weight: 600;
  height: fit-content;
  line-height: 11.11vw;
  text-align: center;
  width: fit-content;
`;

const Itens = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 4.44vw;
  height: fit-content;
  overflow-x: scroll;
  padding: 8.88vw 0 11.88vw 4.44vw;
  width: calc(100% - 4.44vw);

  &::-webkit-scrollbar {
    border: none;
  }
`;

const Poster = styled.div`
  background: url(${poster}) no-repeat;
  background-size: cover;
  border-radius: 1.38vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.25));
  height: 122.22vw;
  width: 88.11vw;
`;
const Item = styled.li``;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <TorneiosAbertos data-torneios_abertos>
      <Title>Torneios Abertos</Title>
      <Itens>
        <Item>
          <Link to={"/torneio"}>
            <Poster></Poster>
          </Link>
        </Item>
        <Item>
          <Link to={"/torneio"}>
            <Poster></Poster>
          </Link>
        </Item>
        <Item>
          <Link to={"/torneio"}>
            <Poster></Poster>
          </Link>
        </Item>
      </Itens>
    </TorneiosAbertos>
  );
}
