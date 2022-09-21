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

const Position = styled(PrideBrackets)`
  background: ${(props) => props.color};
  justify-content: left;
`;

const getPremioName = (premioName, index) => {
  premioName = `${index + 1}º - ${premioName}`;
  return premioName;
};

const getColor = (index) => {
  let color = "";
  index === 0 && (color = Cores.ouro);
  index === 1 && (color = Cores.prata);
  index === 2 && (color = Cores.bronze);
  index >= 3 && (color = Cores.cinzaClaro);

  return color;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ premiosList }) {
  return (
    <Premios>
      <TorneioSectionTitle>Prêmios</TorneioSectionTitle>
      <Itens>
        {premiosList.map((premio, index) => {
          return (
            <Item>
              <Position color={getColor(index)}>
                {getPremioName(premio, index)}
              </Position>
            </Item>
          );
        })}
      </Itens>
    </Premios>
  );
}
