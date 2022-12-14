import React from "react";
import styled from "styled-components";
import Apresentacao from "../Apresentacao";
import Campeoes from "../Campeoes";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Patrocinadores from "../Patrocinadores";
import QuemSomos from "../QuemSomos";
import TorneiosAbertos from "../TorneiosAbertos";
import VemJogar from "../VemJogar";


const Home = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Linguica = styled.div`
  width: 100vw;
  height: 124vw;
  background-color: transparent;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    
      <Home>
        <Apresentacao />
        <Linguica />
        <Navbar />
        <Campeoes />
        <Patrocinadores />
        <TorneiosAbertos />
        <QuemSomos />
        <VemJogar />
        <Footer />
      </Home>
    
  );
}
