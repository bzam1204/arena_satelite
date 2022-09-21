import React from "react";
import styled from "styled-components";
import backBtn from "../../assets/img/backArrow.svg";
import poster from "../../assets/img/poster.png";
import { Link } from "react-router-dom";
import Info from "../Info";
import ScrollToTop from "../ScrolToTop";
import Cores from "../UI/Cores";

const Torneio = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100vw;
`;

const Linguica = styled.div`
  height: 77.77vw;
  width: 100%;
`;

const BgWhite = styled.div`
  width: 100vw;
  height: fit-content;
  background-color: ${Cores.branco};
`;

const BgPoster = styled.img`
object-fit: cover;
object-position:top;
  border-radius: 0px 0px 0px 47.22vw;
  height: 77.77vw;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -10;
  margin-bottom: 5vw;
`;

const BackBtn = styled.img`
  position: fixed;
  left: 0;
  padding: 4.44vw;
  border-radius: 50vw;
  height: 8.88vw;
  width: 8.88vw;
`;

const Title = styled.h2`
  margin-top: 4.44vw;
  width: fit-content;
  height: fit-content;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11.11vw;
  line-height: 13.88vw;
  text-align: center;
  color: ${Cores.cinzaEscuro};
`;

const getFoto = (foto) => {
  const img = require(`../../assets/img/${foto}`);
  return img;
};

export default function Torneios({ dados }) {
  return (
    <Torneio>
      <ScrollToTop />
      <Link to={"/"}>
        {" "}
        <BackBtn src={backBtn}></BackBtn>
      </Link>
      <BgPoster src={getFoto(dados.foto)}></BgPoster>
      <Linguica></Linguica>
      <BgWhite>
        <Title>{dados.nome}</Title>
        <Info dados={dados}></Info>
      </BgWhite>
    </Torneio>
  );
}
