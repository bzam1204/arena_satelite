import React from "react";
import styled from "styled-components";
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
const Itens = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6.66vw;
  height: fit-content;
  padding: 0px 4.44vw;
  width: calc(100% - 8.88vw);
`;
const Item = styled.li`
  list-style: disc;
  width: calc(100% - 8.88vw);
`;

const Requisito = styled.p`
  width: 100%;
  height: fit-content;
  font-style: normal;
  font-weight: 500;
  font-size: 6.66vw;
  line-height: 8.33vw;
  color: ${Cores.cinzaEscuro};
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Requisitos>
      <Subtitle>Requisitos</Subtitle>
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
