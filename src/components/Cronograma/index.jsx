import React from "react";
import styled from "styled-components";
import { ItensPD, ParagraphPD } from "../UI";
import Cores from "../UI/Cores";

const Cronograma = styled.section`
  align-items: center;
  background: ${Cores.poscaBranco};
  border-radius: 1.38vw;
  box-shadow: 2.77vw 2.77vw 5.55vw ${Cores.shadow};
  display: flex;
  flex-direction: column;
  gap: 4.44vw;
  height: fit-content;
  padding: 0px 0px 4.44vw;
  width: 100%;
`;
const Subtitle = styled.div`
  align-items: flex-start;
  background: ${Cores.amarelo};
  border-radius: 1.38vw 1.38vw 0px 0px;
  color: ${Cores.cinzaEscuro};
  display: flex;
  flex-direction: row;
  font-size: 8.88vw;
  font-style: normal;
  font-weight: 700;
  height: 11.11vw;
  justify-content: center;
  line-height: 11.11vw;
  padding: 2.22vw;
  width: calc(100% - 4.44vw);
`;
const Itens = styled(ItensPD)`
  align-items: center;
  flex-direction: column;
  gap: 6.66vw;
  padding: 0px 4.44vw;
  width: calc(100% - 8.88vw);
`;
const Item = styled.li`
  list-style: disc;
  width: calc(100% - 8.88vw);
`;

const Evento = styled(ParagraphPD)`
  text-align:  justify;
  width: 100%;
  `

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Cronograma>
      <Subtitle>Cronograma</Subtitle>
      <Itens>
        <Item>
          <Evento>Inscrições - 01/01 a 10/01</Evento>
        </Item>
        <Item>
          <Evento>Pagamento da inscrição - 01/01 a 12/01</Evento>
        </Item>

        <Item>
          <Evento>Sorteio das duplas - 15/01</Evento>
        </Item>
        <Item>
          <Evento>Torneio - 22/01</Evento>
        </Item>
      </Itens>
    </Cronograma>
  );
}
