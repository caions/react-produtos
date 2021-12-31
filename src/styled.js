import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;

  table {
    height: 100px;
    margin-left: 50px;
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
