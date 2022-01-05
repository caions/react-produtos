import React from "react";
import Button from "../Button";
import { Container } from "./styled";

function Table(props) {
  const {
    border, dataBody, dataHead, deleteFunc,
  } = props;
  return (
    <Container>
      {dataBody.length === 0 ? <h3>Não existem dados cadastrados</h3> : (
        <table border={border}>
          <thead>
            <tr>
              {dataHead.map((headerName) => (
                <th key={headerName}>{headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataBody.map((item) => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.endereco}</td>
                <td>
                  <Button
                    onclick={() => {
                      deleteFunc(item);
                    }}
                  >
                    deletar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
}

export default Table;
