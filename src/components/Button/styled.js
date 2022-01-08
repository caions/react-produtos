import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#1284df";
      case "alert":
        return "yellow";
      case "danger":
        return "red";
      default:
        return "white";
    }
  }};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 100ms;

  :active {
    background: ${(props) => (props.color ? "palevioletred" : "white")};
    border-color: white;
  }
`;
