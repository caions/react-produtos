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

  let [data, setData] = useState("");

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
      const novo = data.map((x) => (
        <li key={x.id}>
          {x.nome} - {x.endereco}
        </li>
      ));
      console.log(novo);
      setData(novo);
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
      <ol>{data}</ol>
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
