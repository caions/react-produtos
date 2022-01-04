import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextField from "../../components/TextField";
import { Container, FormContainer } from "../Dashboard/styled";

function App() {
  const baseUrl = "http://localhost:3000";

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");

  const [usuario, setUsuario] = useState([]);

  const enterNome = (e) => {
    setNome(e.target.value);
  };

  const enterEndereco = (e) => {
    setEndereco(e.target.value);
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(baseUrl);

      setUsuario(data);
    } catch (error) {
      // console.error(error);
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(baseUrl, {
        nome,
        endereco,
      });
      getData();
      setNome("");
      setEndereco("");
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
        {usuario.map((item) => (
          <li key={item.id}>
            {item.nome}
            {" "}
            -
            {" "}
            {item.endereco}
          </li>
        ))}
      </ol>
    </Container>
  );
}

export default App;
