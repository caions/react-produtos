import { Link } from "react-router-dom";
import Button from "./components/Button";
import { Container } from "./styled";

const App = () => (
  <Container>
    <h1>Bem vindo!</h1>
    <Link to="dashboard">
      <Button>Entrar</Button>
    </Link>
  </Container>
);

export default App;
