import React from "react";
import styled from "styled-components";
import fotoArena from "../../assets/img/fotoArena.png";
import whatsIcon from "../../assets/img/whatsLogo.svg";
import Maps from "../Maps";

const VemJogar = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8.88vw;
  height: fit-content;
  padding: 4.44vw 0;
  width: 100vw;
`;

const Title = styled.h2`
  align-items: center;
  color: #333333;
  display: flex;
  font-family: quicksand;
  font-size: 13.33vw;
  font-style: normal;
  font-weight: 600;
  height: fit-content;
  line-height: 16.66vw;
  width: 91.11vw;
`;

const FotoArena = styled.div`
  background: url(${fotoArena}) no-repeat;
  background-size: cover;
  border-radius: 1.38vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.16));
  height: 60vw;
  width: 91.11vw;
`;

const TextWhats = styled.p`
  color: #333333;
  font-family: quicksand;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 500;
  line-height: 8.33vw;
  text-align: justify;
  text-indent: 4.44vw;
  width: 91.11vw;
  height: fit-content;
`;

const Botao = styled.button`
  align-items: center;
  background: #feea90;
  border-radius: 1.38vw;
  box-shadow: 2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  outline: none;
  border: none;
  gap: 4.44vw;
  height: 17.22vw;
  justify-content: center;
  padding: 4.44vw 5.55vw;
  width: calc(100% - 11.5vw);
`;

const Texto = styled.p`
  color: #333333;
  font-family: quicksand;
  font-size: 6.66vw;
  font-style: normal;
  font-size: 500;
  text-align: justify;
  height: fit-content;
  line-height: 8.33vw;
  text-indent: 6.66vw;
  width: fit-content;
  white-space: nowrap;
`;

const WhatsIcon = styled.img`
  width: 6.66vw;
  height: 6.66vw;
  background-size: cover;
`;

const ContainerEnderecoContato = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 8.88vw;
  padding: 0px;
  width: 91.11vw;
`;

const Endereco = styled.p`
  align-items: center;
  color: #333333;
  display: flex;
  font-family: quicksand;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 500;
  height: fit-content;
  line-height: 8.33vw;
  text-align: center;
  width: fit-content;
`;

const Contato = styled.p`
  align-items: center;
  color: #333333;
  display: flex;
  font-family: quicksand;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 500;
  height: fit-content;
  line-height: 8.33vw;
  text-align: center;
  width: fit-content;
`;



const Negrito = styled.strong`
  font-weight: bold;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <VemJogar>
      <Title>Vem jogar com a gente</Title>
      <FotoArena></FotoArena>
      <TextWhats>
        Entre no nosso grupo do <Negrito>whatsapp</Negrito> para ficar por
        dentro dos <Negrito>horários</Negrito> e <Negrito>dias</Negrito> de
        funcionamento. Além de ser avisado dos <Negrito>torneios</Negrito> e{" "}
        <Negrito>eventos</Negrito> da <Negrito>Arena Satélite</Negrito>.
      </TextWhats>
      <Botao>
        <WhatsIcon src={whatsIcon}></WhatsIcon>
        <Texto>Entrar no Grupo</Texto>
      </Botao>
      <ContainerEnderecoContato>
        <Endereco>Endereço: Praça Arcoires, Cidade Satélite</Endereco>
        <Contato>Contato: (95) 99126-3017</Contato>
        <Maps/>
      </ContainerEnderecoContato>
    </VemJogar>
  );
}
