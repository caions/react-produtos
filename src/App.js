import { useEffect, useState } from "react";
import Button from "./components/button";
import Input from "./components/Input";
import TextField from "./components/TextField";
import { Container, FormContainer } from "./styled";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:3000";

  let [nome, setNome] = useState("");
  let [endereco, setEndereco] = useState("");

  let [dados, setDados] = useState([]);

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

      setDados(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeDado = async function (item) {
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
        {dados.map((item) => (
          <li key={item.id}>
            {item.nome} - {item.endereco}
          </li>
        ))}
      </ol>
      <table border={2}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereco</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.endereco}</td>
              <td>
                <Button
                  onclick={() => {
                    removeDado(item);
                  }}
                >
                  deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default App;
