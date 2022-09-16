import React from "react";
import styled from "styled-components";
import { ItensPD, TorneioSectionTitle } from "../UI";
import Cores from "../UI/Cores";

const Requisitos = styled.section`
  align-items: center;
  background: ${Cores.brancoQuase};
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

const Requisito = styled.p`
  color: ${Cores.cinzaEscuro};
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 500;
  height: fit-content;
  line-height: 8.33vw;
  width: 100%;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Requisitos>
      <TorneioSectionTitle>Requisitos</TorneioSectionTitle>
      <Itens>
        <Item>
          <Requisito>Ser membro da Arena Satélite</Requisito>
        </Item>
        <Item>
          <Requisito>Duplas Mistas</Requisito>
        </Item>
        <Item>
          <Requisito>Pagamento da inscrição</Requisito>
        </Item>
      </Itens>
    </Requisitos>
  );
}
