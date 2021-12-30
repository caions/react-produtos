import React from "react";
import "./styles.css";

const TextField = (props) => {
  const { texto } = props;
  return (
    <>
      <h1>{texto}</h1>
    </>
  );
};

export default TextField;
