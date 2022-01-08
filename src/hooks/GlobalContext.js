import { createContext, useMemo, useState } from "react";

const context = createContext();

const GlobalContext = ({ children }) => {
  const [mensagem, setMensagem] = useState({
    nome: "Caio",
    idade: 34,
  });

  const [count, setCount] = useState(0);

  return (
    <context.Provider
      value={useMemo(
        () => ({
          mensagem,
          setMensagem,
          count,
          setCount,
        }),
        [mensagem, setMensagem, count, setCount]
      )}
    >
      {children}
    </context.Provider>
  );
};

export { GlobalContext, context };
