import React from "react";
import styled from "styled-components";
import backBtn from "../../assets/img/backArrow.svg";
import poster from "../../assets/img/poster.png";
import { Link } from "react-router-dom";

const Torneio = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100vw;
`;

const Cabecalho = styled.section``;

const BgPoster = styled.div`
  background: url(${poster});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 0px 0px 170px;
  height: 280px;
  width: 360px;
`;

const BackBtn = styled.div`
  background-image: url(${backBtn});
  background-repeat: no-repeat;
  background-size: cover;
  border: 16px solid transparent;
  height: 32px;
  width: 32px;
`;

const Title = styled.h2`
  width: fit-content;
  height: fit-content;
  font-family: quicksand;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #333333;
`;

export default function Torneios() {
  return (
    <Torneio>
      <Cabecalho>
        <BgPoster>
          <Link to={"/"}>
            <BackBtn></BackBtn>
          </Link>
        </BgPoster>
        <Title>V Torneio de Futevôlei Arena Satélite</Title>
      </Cabecalho>
    </Torneio>
  );
}
