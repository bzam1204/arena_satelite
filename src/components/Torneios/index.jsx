import React from "react";
import styled from "styled-components";
import backBtn from "../../assets/img/backArrow.svg";
import poster from "../../assets/img/poster.png";
import { Link } from "react-router-dom";
import Info from "../Info";
import ScrollToTop from "../ScrolToTop";

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
  border-radius: 0px 0px 0px 47.22vw;
  height: 77.77vw;
  width: 100%;
`;

const BackBtn = styled.img`
  position: fixed;
  padding: 4.44vw;
  border-radius: 50vw;
  height: 8.88vw;
  width: 8.88vw;
`;

const Title = styled.h2`
  margin-top: 4.44vw;
  width: fit-content;
  height: fit-content;
  font-family: 'Quicksand', sans-serif;  font-style: normal;
  font-weight: 700;
  font-size: 11.11vw;
  line-height: 13.88vw;
  text-align: center;
  color: #333333;
`;

export default function Torneios() {
  return (
    <Torneio>
      <ScrollToTop />
      <Cabecalho>
        <Link to={"/"}>
          {" "}
          <BackBtn src={backBtn}></BackBtn>
        </Link>
        <BgPoster></BgPoster>
        <Title>V Torneio de Futevôlei Arena Satélite</Title>
      </Cabecalho>
      <Info></Info>
    </Torneio>
  );
}
