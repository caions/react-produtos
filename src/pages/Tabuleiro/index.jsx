import MiniTabuleiro from "../../components/MiniTabuleiro";
import { Container } from "./styled";

const Tabuleiro = () => (
  <Container>
    <MiniTabuleiro quantidade={4} />
  </Container>
);

export default Tabuleiro;
