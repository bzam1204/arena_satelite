import React from "react";
import styled from "styled-components";
import Cores from "../UI/Cores";
import { ItensPD, PrideBrackets, TorneioSectionTitle } from "../UI";

const Premios = styled.div`
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

const Itens = styled(ItensPD)`
  flex-direction: column;
  gap: 6.66vw;
  padding: 0px 4.44vw;
  width: calc(100% - 8.88vw);
`;
const Item = styled.li``;

const First = styled(PrideBrackets)`
  background: ${Cores.ouro};
`;
const Second = styled(PrideBrackets)`
  background: ${Cores.prata};
`;
const Third = styled(PrideBrackets)`
  background: ${Cores.bronze};
`;
const FourthAhead = styled(PrideBrackets)`
  background: ${Cores.cinzaClaro};
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Premios>
      <TorneioSectionTitle>Prêmios</TorneioSectionTitle>
      <Itens>
        <Item>
          <First>1º - R$ 3000,00</First>
        </Item>
        <Item>
          <Second>2º - R$ 2000,00</Second>
        </Item>
        <Item>
          <Third>3º - R$ 1000,00</Third>
        </Item>
        <Item>
          <FourthAhead>4º - R$ 500,00</FourthAhead>
        </Item>
        <Item>
          <FourthAhead>5º - R$ 500,00</FourthAhead>
        </Item>
        <Item>
          <FourthAhead>6º - R$ 500,00</FourthAhead>
        </Item>
      </Itens>
    </Premios>
  );
}
