import React from "react";
import { Container } from "./styled";

const Button = (props) => {
  const { onclick, children, color } = props;
  return (
    <Container onClick={onclick} color={color}>{children}</Container>
  );
};

export default Button;
