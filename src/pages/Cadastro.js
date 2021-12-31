import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/Input";
import TextField from "../components/TextField";
import { Container, FormContainer } from "./styled";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:3000";

  let [nome, setNome] = useState("");
  let [endereco, setEndereco] = useState("");

  let [usuario, setUsuario] = useState([]);

  const enterNome = (e) => {
    setNome(e.target.value);
  };

  const enterEndereco = (e) => {
    setEndereco(e.target.value);
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
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(baseUrl);

      setUsuario(data);
      console.log(data);
    } catch (error) {
      console.error(error);
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
          <br />
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
            {item.nome} - {item.endereco}
          </li>
        ))}
      </ol>
    </Container>
  );
}

export default App;
