import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";
import axios from "axios";
import Table from "../../components/Table";

function Dashboard() {
  const baseUrl = "http://localhost:3000";

  let [usuario, setUsuario] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(baseUrl);

      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeDado = async (item) => {
    try {
      await axios.delete(`${baseUrl}/${item.id}`);
      await getData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/cadastro">Cadastro</Link>
      </nav>

      <Table
        border={1}
        dataHead={["nome", "endereco", "acao"]}
        dataBody={usuario}
        deleteFunc={removeDado}
      ></Table>
    </Container>
  );
}

export default Dashboard;