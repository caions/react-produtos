import { Link } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/Button";
import { MensagemContext } from "../../hooks/MeuContext";

const Home = () => {
  const { mensagem, atualizarMensagem } = useContext(MensagemContext);

  return (
    <>
      <h1>Bem vindo!</h1>
      <h1>{mensagem}</h1>
      <Button type="button" onclick={atualizarMensagem}>
        clique
      </Button>
      <Link to="dashboard">
        <Button>Entrar</Button>
      </Link>
    </>
  );
};

export default Home;
