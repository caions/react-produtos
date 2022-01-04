import { useEffect, useRef, useState } from "react";
import Input from "../Input";

export function Contador() {
  const [valor, setValor] = useState("");
  const [valor2, setValor2] = useState("");
  /* const [contagem, setContagem] = useState(0); */
  const count = useRef(0);
  const myInput = useRef(null);
  const myInput2 = useRef(null);

  // eslint-disable-next-line no-unused-vars
  function mostraValor(str1, str2) {
    const concatenaString = (letraAtual, indice) => `${letraAtual}${str2[indice] ?? ""}`;

    const novaString = [...str1].map(concatenaString).join("");

    return novaString;
  }

  const funcao = (e) => {
    setValor(e.target.value);
  };

  const funcao2 = (e) => {
    setValor2(e.target.value);
  };

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    count.current++;

    myInput.current.focus();
  }, [valor2]);

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    count.current++;

    myInput2.current.focus();
  }, [valor]);

  return (
    <>
      <h3>{mostraValor(valor, valor2)}</h3>
      <Input onchange={funcao} value={valor} refer={myInput} />
      <Input onchange={funcao2} value={valor2} refer={myInput2} />
    </>
  );
}
