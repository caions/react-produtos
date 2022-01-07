import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextField from "../../components/TextField";
import { Container, FormContainer } from "../Dashboard/styled";
import useApi from "../../hooks/UseApi";

const App = () => {
  const baseUrl = "http://localhost:3000";
  const { response, fetchApi } = useApi(baseUrl);

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [lista, setLista] = useState([]);

  const enterNome = (e) => {
    setNome(e.target.value);
  };

  const enterEndereco = (e) => {
    setEndereco(e.target.value);
  };

  function renderList(userArray) {
    setLista(userArray.map((user) => <li key={user.nome}>{user.nome}</li>));
  }

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      await fetchApi("POST", {
        nome,
        endereco
      });
      // clean nome and endereco fields
      setNome("");
      setEndereco("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    renderList(response.data);
  }, [response]);

  return (
    <Container>
      <FormContainer>
        <nav>
          <Link to="/">Home</Link>
          {"  "}
          <Link to="/dashboard">Tabela</Link>
        </nav>
        <TextField texto={`Nome: ${nome}`} />
        <TextField texto={`Endereço: ${endereco}`} />
        <Input onchange={enterNome} name="nome" value={nome} />
        <Input onchange={enterEndereco} name="endereco" value={endereco} />
        <Button onclick={sendForm}>Enviar Mensagem</Button>
      </FormContainer>
      <ol>
        { lista.length === 0 ? false : lista }
      </ol>
    </Container>
  );
};

export default App;
