/* eslint-disable no-plusplus */
import Quadrado from "../Quadrado";
import { Container } from "./styled";

function MiniTabuleiro(props) {
  const { quantidade } = props;

  const element = (
    <div>
      <div className="row">
        <Quadrado color="white" />
        <Quadrado color="black" />
      </div>
      <div className="row">
        <Quadrado color="black" />
        <Quadrado color="white" />
      </div>
    </div>
  );

  const arrElement = [];

  for (let i = 0; i < quantidade; i++) {
    arrElement.push(element);
  }

  return (
    <Container>
      {arrElement}
    </Container>
  );
}

export default MiniTabuleiro;
