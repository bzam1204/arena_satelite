import { Link } from "react-router-dom";
import styled from "styled-components";
import Cores from "../../UI/Cores";

const Poster = styled.img`
  border-radius: 1.38vw;
  filter: drop-shadow(2.77vw 2.77vw 5.55vw ${Cores.shadow});
  height: 122.22vw;
  width: 88.11vw;
`;
const Item = styled.li``;

const getFoto = (foto) => {
  const img = require(`../../../assets/img/${foto}`);
  return img;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ dados }) {
  return (
    <Item>
      <Link to={`/${dados.code}`}>
        <Poster src={getFoto(dados.foto)}></Poster>
      </Link>
    </Item>
  );
}
