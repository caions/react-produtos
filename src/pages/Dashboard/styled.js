import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  nav {
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  max-width: 200px;
  overflow: hidden;

  input {
    margin-bottom: 20px;
    height: 20px;
  }
`;
