import React from "react";
import styled from "styled-components";
import softgate from "../../assets/img/Slogo.svg";

const Patrocinadores = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.11vw;
  background-color:#fff;

  width: 100vw;
  height: fit-content;
`;

const Title = styled.h2`
  width: fit-content;
  height: fit-content;

  font-family: quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 8.88vw;
  line-height: 11.11vw;
  /* identical to box height */

  text-align: center;

  color: #333333;
`;

const Itens = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4.44vw 0 0 4.44vw;
  gap: 4.44vw;
  width: calc(100% - 4.44vw);
  height: fit-content;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    border: none;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2.22vw;

  width: fit-content;
  height: fit-content;
`;

const Logo = styled.div`
  background-image: url(${softgate});
  background-repeat: no-repeat;
  background-size: cover;
  border: 8.88vw solid #fff;

  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 40vw;
  height: 40vw;

  box-shadow: 2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.16);
  border-radius: 100vw;
`;

const Nome = styled.h3`
  width: 57.77vw;
  height: 8.33vw;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 6.66vw;
  line-height: 8.33vw;
  /* identical to box height */

  text-align: center;

  color: #333333;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Patrocinadores data-patrocinadores>
      <Title>Patrocinadores</Title>
      <Itens>
        <Item>
          <Logo></Logo>
          <Nome>Softgate</Nome>
        </Item>
        <Item>
          <Logo></Logo>
          <Nome>Softgate</Nome>
        </Item>
        <Item>
          <Logo></Logo>
          <Nome>Softgate</Nome>
        </Item>
      </Itens>
    </Patrocinadores>
  );
}
