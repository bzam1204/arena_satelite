import styled from "styled-components";
import Cores from "./Cores";

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

export { SectionTitle, ItensPD, ParagraphPD };
