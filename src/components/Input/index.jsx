import React from "react";
import { Container } from "./styled";

const Input = (props) => {
  const { onchange, name, value } = props;
  return (
    <>
      <Container
        type="text"
        name={name}
        value={value}
        onChange={(e) => onchange(e)}
      />
    </>
  );
};

export default Input;
