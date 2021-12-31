import { useState } from "react";
import Button from "./components/button";
import Input from "./components/Input";
import TextField from "./components/TextField";
import { Container } from "./styled";

function App() {
  let [nome, setNome] = useState("");
  let [endereco, setEndereco] = useState("");

  const enterNome = (e) => {
    setNome(e.target.value);
  };

  const enterEndereco = (e) => {
    setEndereco(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form action="" method="post">
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
