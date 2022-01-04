import React from "react";
import { Container } from "./styled";

function Button(props) {
  const { onclick, children } = props;
  return (
    <Container onClick={onclick}>{children}</Container>
  );
}

export default Button;
