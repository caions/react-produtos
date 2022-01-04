import React from "react";
import { Container } from "./styled";

function Input(props) {
  const {
    onchange, name, value, refer,
  } = props;
  return (
    <Container
      type="text"
      name={name}
      value={value}
      onChange={(e) => onchange(e)}
      ref={refer}
    />
  );
}

export default Input;
