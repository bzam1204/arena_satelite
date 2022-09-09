import React from "react";
import styled from "styled-components";
import Apresentacao from "../Apresentacao";
import Campeoes from "../Campeoes";
import Navbar from "../Navbar";

const Home = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Home>
      <Apresentacao />
      <Navbar />
      <Campeoes />
    </Home>
  );
}
