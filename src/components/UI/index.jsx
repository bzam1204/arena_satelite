import styled from "styled-components";
import Cores from "./Cores";

const SectionPD = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Cores.branco};
  width: 100vw;
`;

const SectionTitle = styled.h2`
  width: fit-content;
  height: fit-content;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 8.88vw;
  line-height: 11.11vw;
  color: ${Cores.cinzaEscuro};
`;

const TorneioSectionTitle = styled.h2`
  align-items: flex-start;
  background: ${Cores.amarelo};
  border-radius: 1.38vw 1.38vw 0px 0px;
  color: ${Cores.cinzaEscuro};
  display: flex;
  flex-direction: row;
  font-size: 8.88vw;
  font-style: normal;
  font-weight: 700;
  height: fit-content;
  justify-content: center;
  line-height: 11.11vw;
  padding: 2.22vw;
  width: calc(100% - 4.44vw);
`;

const ItensPD = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 4.44vw;
  height: fit-content;
  overflow-x: scroll;
  padding: 8.88vw 0 11.88vw 4.44vw;
  width: calc(100% - 4.44vw);

  &::-webkit-scrollbar {
    height: 0;
  }
`;

const ParagraphPD = styled.p`
  color: ${Cores.cinzaEscuro};
  font-family: "Quicksand", sans-serif;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 500;
  height: fit-content;
  line-height: 8.33vw;
  text-align: justify;
  text-indent: 6.66vw;
  width: fit-content;
`;

const PrideBrackets = styled.div`
  align-items: center;
  border-radius: 1.38vw;
  color: ${Cores.cinzaEscuro};
  display: flex;
  flex-direction: row;
  font-family: "Quicksand", sans-serif;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 600;
  height: 12.77;
  justify-content: center;
  line-height: 8.33vw;
  padding: 2.22vw 4.44vw;
  width: calc(82.22vw - 8.88vw);
`;

const Botao = styled.div`
  align-items: center;
  background: ${Cores.amarelo};
  border-radius: 5px;
  box-shadow: 2.77vw 2.77vw 5.55vw ${Cores.shadow};
  display: flex;
  flex-direction: row;
  gap: 4.44vw;
  height: calc(17.22vw - 8.88vw);
  justify-content: center;
  padding: 4.44vw 5.55vw;
  width: calc(91.11vw - 11.1vw);
`;

export {
  SectionTitle,
  ItensPD,
  ParagraphPD,
  PrideBrackets,
  TorneioSectionTitle,
  Botao,
  SectionPD,
};
