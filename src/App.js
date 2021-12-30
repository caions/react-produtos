import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import TextField from "./components/TextField";

function App() {
  let [numero, setNumero] = useState(1);

  const increaseNumber = () => {
    setNumero((numero += 1));
  };

  return (
    <>
      <TextField texto={numero} />
      <Button onclick={increaseNumber}>Enviar Mensagem</Button>
    </>
  );
}

export default App;
