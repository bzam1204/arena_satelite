import React from "react";
import styled from "styled-components";
import fotoDupla from "../../assets/img/campeoesEx.png";

const Campeoes = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8.88vw;
  width: 100vw;
`;

const Title = styled.h2`
  width: fit-content;
  height: fit-content;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 8.88vw;
  line-height: 11.11vw;
  /* identical to box height */

  color: #333333;
`;

const Itens = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4.44vw;
  padding: 4.44vw 0 4.44vw 4.44vw;
  width: calc(100% - 8.88vw);

  height: fit-content;
  overflow-x: scroll;
`;

const CardCampeao = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 80vw;
  height: 95.27vw;

  background: #b4fef9;
  box-shadow: 2.7vw 2.7vw 5.5vw rgba(0, 0, 0, 0.16);
  border-radius: 1.38vw;
`;

const Foto = styled.div`
  width: 80vw;
  height: 48.88vw;
  background-image: url(${fotoDupla});
  background-size: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.44vw 4.44vw 6.66vw;
  gap: 4.44vw;
  width: calc(100% - 8.88vw);
  height: calc(46.66vw - 10vw);
`;

const Posicao = styled.h3`
  width: fit-content;
  height: fit-content;

  font-family: quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 11.66vw;
  line-height: 14.16vw;

  color: #333333;
`;

const TorneioNome = styled.h3`
  width: fit-content;
  height: fit-content;

  font-family: notoLight;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;

  font-size: 4.44vw;
  line-height: 6.11vw;
  /* identical to box height */

  color: #333333;
`;

const Categoria = styled.h3`
  width: fit-content;
  height: fit-content;
  white-space: nowrap;
  font-family: notoDBold;
  font-style: normal;
  font-weight: 700;
  font-size: 4.44vw;
  line-height: 6.11vw;
  /* identical to box height */

  color: #333333;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Campeoes>
      <Title>Campeões</Title>
      <Itens>
        <CardCampeao>
          <Foto></Foto>
          <Info>
            <Posicao>1º Lugar</Posicao>
            <TorneioNome>III Torneio Arena Satélite</TorneioNome>
            <Categoria>Duplas Mistas</Categoria>
          </Info>
        </CardCampeao>

        <CardCampeao>
          <Foto></Foto>
          <Info>
            <Posicao>2º Lugar</Posicao>
            <TorneioNome>II Open Arena Satélite</TorneioNome>
            <Categoria>Duplas Feminino</Categoria>
          </Info>
        </CardCampeao>
      </Itens>
    </Campeoes>
  );
}
