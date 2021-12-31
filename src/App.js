import { useEffect, useState } from "react";
import Button from "./components/button";
import Input from "./components/Input";
import TextField from "./components/TextField";
import { Container } from "./styled";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:3000/";

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ol>
        {dados.map((x) => (
          <li key={x.id}>
            {x.nome} - {x.endereco}
          </li>
        ))}
      </ol>
      <table border={2}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereco</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.endereco}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form>
        <TextField texto={`Nome: ${nome}`} />
        <TextField texto={`Endereço: ${endereco}`} />
        <Input onchange={enterNome} name="nome" value={nome} />
        <Input onchange={enterEndereco} name="endereco" />
        <Button onclick={sendForm}>Enviar Mensagem</Button>
      </form>
    </Container>
  );
}

export default App;
