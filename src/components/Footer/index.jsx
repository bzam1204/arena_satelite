import React from "react";
import styled from "styled-components";
import face from "../../assets/img/faceIcon.svg";
import insta from "../../assets/img/instaIcon.svg";
import whats from "../../assets/img/whatsLogo.svg";
import mail from "../../assets/img/mailIcon.svg";

const Footer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.44vw 0px 8.88vw;
  gap: 16px;
  width: 100vw;
  height: fit-content;
  background: #fefefe;
`;

const Itens = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8.88vw;
  width: 100vw;
  height: 13.33vw;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 13.33vw;
  height: 13.33vw;
  background: #feea90;
  border-radius: 30vw;
`;

const FaceIcon = styled.img`
  width: 4.04vw;
  height: 6.66vw;
`;

const Insta = styled.img`
  width: 6.66vw;
  height: 6.66vw;
`;

const Whats = styled.img`
  width: 6.66vw;
  height: 6.66vw;
`;

const Mail = styled.img`
  width: 6.66vw;
  height: 5.33vw;
`;

const ArenaSatelite = styled.h1`
  width: fit-content;
  height: fit-content;
  font-family: notoDBold;
  font-style: normal;
  font-weight: 700;
  font-size: 11.11vw;
  line-height: 15vw;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
`;

const TodosOsDireitos = styled.p`
  width: fit-content;
  height: fit-content;
  font-family: quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 4.44vw;
  line-height: 5.55vw;
  display: flex;
  align-items: center;
  text-align: center;
  text-indent: 2.22vw;
  color: #333333;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Footer>
      <Itens>
        <Item>
          <FaceIcon src={face}></FaceIcon>
        </Item>
        <Item>
          <Insta src={insta}></Insta>
        </Item>
        <Item>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5595991263017">
            <Whats src={whats}></Whats>
          </a>
        </Item>
        <Item>
          <Mail src={mail}></Mail>
        </Item>
      </Itens>
      <ArenaSatelite>Arena Satélite</ArenaSatelite>
      <TodosOsDireitos>Todos os direitos reservados.</TodosOsDireitos>
    </Footer>
  );
}
