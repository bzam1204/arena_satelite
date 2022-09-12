import React from "react";
import styled from "styled-components";
import fotoGrupo from "../../assets/img/fotoGrupo.png";

const QuemSomos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:  0px;
  gap: 4.44vw;
  width: calc(100vw);
  height: fit-content;
`;

const FotoGrupo = styled.div`
  background-image: url(${fotoGrupo});
  background-size: cover;
  width: 91.11vw;
  height: 60vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.16));
  border-radius: 1.38vw;
`;

const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 4.44vw;
  gap: 4.44vw;
  width: calc(100vw - 8.88vw);
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
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
`;

const Paragraph = styled.p`
  width: 91.11vw;
  height: fit-content;
  font-family: quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 6.66vw;
  line-height: 8.33vw;
  text-align: justify;
  text-indent: 2.22vw;
  color: #333333;
  opacity: 0.8;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <QuemSomos>
      <FotoGrupo></FotoGrupo>
      <Texto>
        <Title>Quem Somos</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          suscipit, dicta blanditiis ea quae obcaecati pariatur neque. Tenetur
          optio, corrupti molestias qui ut eum ad, in nam, architecto
          consequatur iusto? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Laudantium sed quidem dolorem pariatur dolore. Libero,
          assumenda, temporibus dolor animi doloribus inventore cupiditate
          porro, praesentium dolores eius laudantium reiciendis. Odio, harum!
        </Paragraph>
      </Texto>
    </QuemSomos>
  );
}
