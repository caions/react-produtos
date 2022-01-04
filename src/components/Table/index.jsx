import React from "react";
import Button from "../Button";
import { Container } from "./styled";

function Table(props) {
  const {
    border, dataBody, dataHead, deleteFunc,
  } = props;

  return (
    <Container>
      {dataBody === "" ? (
        "Não existem dados"
      ) : (
        <table border={border}>
          <thead>
            <tr>
              {dataHead.map((item) => (
                <th>{item}</th>
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
