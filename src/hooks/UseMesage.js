import { useContext } from "react";
import { context } from "./GlobalContext";

export const UseMesageContext = () => {
  const { mensagem, setMensagem } = useContext(context);

  const atualizaMensagem = (key, value) => {
    setMensagem({
      ...mensagem,
      [key]: value,
    });
  };

  return { mensagem, atualizaMensagem };
};
