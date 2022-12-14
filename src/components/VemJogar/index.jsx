import React from "react";
import styled from "styled-components";
import fotoArena from "../../assets/img/fotoArena.png";
import whatsIcon from "../../assets/img/whatsLogo.svg";
import Maps from "../Maps";
import { Botao, ParagraphPD, SectionPD, SectionTitle } from "../UI";
import Cores from "../UI/Cores";

const VemJogar = styled(SectionPD)`
  gap: 8.88vw;
  padding: 4.44vw 0 8.88vw;
`;

const Title = styled(SectionTitle)`
  font-size: 13.33vw;
  line-height: 16.66vw;
  width: 91.11vw;
`;

const FotoArena = styled.div`
  background: url(${fotoArena}) no-repeat;
  background-size: cover;
  border-radius: 1.38vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw ${Cores.shadow});
  height: 60vw;
  width: 91.11vw;
`;

const TextWhats = styled(ParagraphPD)`
  text-indent: 4.44vw;
  width: 91.11vw;
`;

const BotaoEntrarNoGrupo = styled(Botao)``;

const Texto = styled(ParagraphPD)`
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

const Endereco = styled(ParagraphPD)`
  text-align: center;
`;

const Contato = styled(ParagraphPD)``;

const Negrito = styled.strong`
  font-weight: bold;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <VemJogar data-faca_parte>
      <Title>Vem jogar com a gente</Title>
      <FotoArena></FotoArena>
      <TextWhats>
        Entre no nosso grupo do <Negrito>whatsapp</Negrito> para ficar por
        dentro dos <Negrito>horários</Negrito> e <Negrito>dias</Negrito> de
        funcionamento. Além de ser avisado dos <Negrito>torneios</Negrito> e{" "}
        <Negrito>eventos</Negrito> da <Negrito>Arena Satélite</Negrito>.
      </TextWhats>
      <BotaoEntrarNoGrupo>
        <WhatsIcon src={whatsIcon}></WhatsIcon>
        <Texto>Entrar no Grupo</Texto>
      </BotaoEntrarNoGrupo>
      <ContainerEnderecoContato>
        <Endereco>Endereço: Praça Arcoires, Cidade Satélite</Endereco>
        <Contato>Contato: (95) 99126-3017</Contato>
        <Maps />
      </ContainerEnderecoContato>
    </VemJogar>
  );
}
