import { useContext } from "react";
import { context } from "./GlobalContext";

export const UseCount = () => {
  const { count, setCount } = useContext(context);

  const addCount = (n) => {
    setCount(count + n);
  };

  return { count, addCount };
};
