import React from "react";
import styled from "styled-components";

const PrideBrackets = styled.div`
  align-items: center;
  border-radius: 1.38vw;
  color: #333333;
  display: flex;
  flex-direction: row;
  font-family: quicksand;
  font-size: 6.66vw;
  font-style: normal;
  font-weight: 600;
  height: 12.77;
  justify-content: center;
  line-height: 8.33vw;
  padding: 2.22vw 4.44vw;
  width: calc(82.22vw - 8.88vw);
`;
const Premios = styled.div`
  align-items: center;
  background: #fdfdfd;
  border-radius: 1.38vw;
  box-shadow: 2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  gap: 4.44vw;
  height: fit-content;
  padding: 0px 0px 4.44vw;
  width: 100%;
`;
const Subtitle = styled.div`
  align-items: flex-start;
  background: #b4fef9;
  border-radius: 1.38vw 1.38vw 0px 0px;
  color: #333333;
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
const Itens = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6.66vw;
  height: fit-content;
  padding: 0px 4.44vw;
  width: calc(100% - 8.88vw);
`;
const Item = styled.li``;

const First = styled(PrideBrackets)`
  background: rgba(255, 215, 0, 0.5);
`;
const Second = styled(PrideBrackets)`
  background: rgba(192, 192, 192, 0.5);
`;
const Third = styled(PrideBrackets)`
  background: rgba(226, 128, 30, 0.5);
`;
const FourthAhead = styled(PrideBrackets)`
  background: rgba(58, 226, 30, 0.32);
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Premios>
      <Subtitle>Prêmios</Subtitle>
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
