import styled from "styled-components";
import fotoDupla from "../../assets/img/campeoesEx.png";
import Cores from "../UI/Cores";

const CardCampeao = styled.li`
  align-items: center;
  justify-content: space-between;
  background: ${Cores.branco};
  border-radius: 1.38vw;
  box-shadow: 2.7vw 2.7vw 5.5vw ${Cores.shadow};
  display: flex;
  flex-direction: column;
  height: 95.27vw;
  padding: 0px;
  width: 80vw;
  position: relative;
`;

const BgTop = styled.div`
  width: 80vw;
  height: 30.83vw;
  background: ${Cores.amarelo};
  border-radius: 1.38vw 1.38vw 0px 0px;
`;

const ContainerFoto = styled.div`
  position: absolute;
  margin-top: 6.94vw;
  width: 47.77vw;
  height: 47.77vw;
  border-radius: 50vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw rgba(0, 0, 0, 0.05));
`;
const BgFoto = styled.div`
  width: 47.77vw;
  border-radius: 50vw;
  height: 47.77vw;
  background: #ffffff;
`;

const Foto = styled.img`
  border-radius: 50vw;
  position: absolute;
  margin: 1.66vw 0 0 1.66vw;
  width: 44.44vw;
  object-fit: cover;
  height: 44.44vw;
`;

const Posicao = styled.h3`
  background-color: ${Cores.amarelo};
  border-radius: 0 0 1.38vw 1.38vw;
  color: ${Cores.cinzaEscuro};
  font-family: "Quicksand";
  font-size: 6.66vw;
  font-style: normal;
  font-style: normal;
  font-weight: 500;
  font-weight: 500;
  height: fit-content;
  line-height: 8.33vw;
  margin: 0;
  padding: 2.22vw 0;
  text-align: center;
  width: 100%;
`;

const TorneioNome = styled.h3`
  color: ${Cores.cinzaEscuro};
  font-family: notoDBold;
  font-size: 4.44vw;
  font-style: normal;
  height: fit-content;
  line-height: 6.11vw;
  margin-top: 26.11vw;
  white-space: nowrap;
  width: fit-content;
`;

const Categoria = styled.h3`
  color: ${Cores.cinzaEscuro};
  font-family: notoLight;
  font-size: 4.44vw;
  font-style: normal;
  font-weight: 700;
  height: fit-content;
  line-height: 6.11vw;
  margin-top: 4.44vw;
  margin-bottom: 9.16vw;
  white-space: nowrap;
  width: fit-content;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <CardCampeao>
      <BgTop></BgTop>
      <ContainerFoto>
        <Foto src={fotoDupla}></Foto>
        <BgFoto></BgFoto>
      </ContainerFoto>
      <TorneioNome>III Torneio Arena Satélite</TorneioNome>
      <Categoria>Duplas Mistas</Categoria>
      <Posicao>1º Lugar</Posicao>
    </CardCampeao>
  );
}
