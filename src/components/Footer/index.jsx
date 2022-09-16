import React from "react";
import styled from "styled-components";
import face from "../../assets/img/faceIcon.svg";
import insta from "../../assets/img/instaIcon.svg";
import whats from "../../assets/img/whatsLogo.svg";
import mail from "../../assets/img/mailIcon.svg";
import Cores from "../UI/Cores";
import { ItensPD, ParagraphPD, SectionPD } from "../UI";

const Footer = styled(SectionPD)`
  padding: 4.44vw 0px 8.88vw;
  gap: 4.44vw;
`;

const Itens = styled(ItensPD)`
  align-items: flex-start;
  gap: 8.88vw;
  height: 13.33vw;
  justify-content: center;
  padding: 0px;
  width: 100vw;
`;

const Item = styled.li`
  align-items: center;
  background: ${Cores.amarelo};
  border-radius: 30vw;
  display: flex;
  flex-direction: column;
  height: 13.33vw;
  justify-content: center;
  padding: 0px;
  width: 13.33vw;
`;

const FaceIcon = styled.img`
  height: 6.66vw;
  width: 4.04vw;
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

const ArenaSatelite = styled(ParagraphPD)`
  font-family: notoDBold;
  font-size: 11.11vw;
  font-weight: 700;
  line-height: 15vw;
  text-indent: 0;
`;

const TodosOsDireitos = styled(ParagraphPD)`
  font-size: 4.44vw;
  line-height: 5.55vw;
  text-indent: 0;
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
