import { createContext, useMemo, useState } from "react";

const MensagemContext = createContext();

const MeuContext = ({ children }) => {
  const [mensagem, setMensagem] = useState("msg default");

  const atualizarMensagem = () => {
    setMensagem("Mensagem Atualizada");
  };

  const obj = useMemo(
    () => ({
      mensagem,
      atualizarMensagem,
    }),
    [mensagem, atualizarMensagem]
  );

  return (
    <MensagemContext.Provider value={obj}>{children}</MensagemContext.Provider>
  );
};

export { MeuContext, MensagemContext };
