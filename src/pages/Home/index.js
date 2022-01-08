import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { UseMesageContext } from "../../hooks/UseMesage";
import { UseCount } from "../../hooks/UseCount";

const Home = () => {
  const { mensagem, atualizaMensagem } = UseMesageContext();
  const { count, addCount } = UseCount();

  return (
    <>
      <h1>Bem vindo!</h1>
      <h1>{mensagem.nome}</h1>
      <h1>{mensagem.idade}</h1>
      <h2>Count: {count}</h2>
      <Button
        type="button"
        onclick={() => {
          atualizaMensagem("nome", "Clau");
        }}
      >
        clique
      </Button>
      <Button
        type="button"
        onclick={() => {
          addCount(3);
        }}
      >
        Count
      </Button>
      <Link to="dashboard">
        <Button>Entrar</Button>
      </Link>
    </>
  );
};

export default Home;
