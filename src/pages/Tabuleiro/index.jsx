import MiniTabuleiro from "../../components/MiniTabuleiro";
import { Container } from "./styled";

function Tabuleiro() {
  return (
    <Container>
      <MiniTabuleiro quantidade={4} />
    </Container>
  );
}

export default Tabuleiro;
