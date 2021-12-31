import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 100ms;

  :active {
    color: white;
    border-color: white;
  }
`;
