import { useEffect, useState } from "react";
import Button from "./components/button";
import Input from "./components/Input";
import TextField from "./components/TextField";
import { Container, FormContainer } from "./styled";
import axios from "axios";
import Table from "./components/Table";

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
      const { data } = await axios.post(baseUrl, {
        nome,
        endereco,
      });
      getData();
      setNome("");
      setEndereco("");
      console.log(data);
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

  const removeDado = async (item) => {
    try {
      await axios.delete(`${baseUrl}/${item.id}`);
      await getData();
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
      <Table
        border={1}
        dataHead={["nome", "endereco", "acao"]}
        dataBody={usuario}
        deleteFunc={removeDado}
      />
    </Container>
  );
}

export default App;
