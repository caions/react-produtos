import React from "react";
import { Container } from "./styled";

const TextField = (props) => {
  const { texto } = props;
  return (
    <Container>{texto}</Container>
  );
};

export default TextField;
