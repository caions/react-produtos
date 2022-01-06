import { Container } from "./styled";

const Quadrado = (prop) => {
  let selectedColor = "red";
  const { color } = prop;

  if (color === "white") {
    selectedColor = "white";
  } else if (color === "black") {
    selectedColor = "black";
  }

  return (
    <Container backgroundColor={selectedColor} />
  );
};

export default Quadrado;
