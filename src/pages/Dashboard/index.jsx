import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";
import Table from "../../components/Table";
import useApi from "../../hooks/UseApi";

const Dashboard = () => {
  const baseUrl = "http://localhost:3000";

  const { response, fetchApi } = useApi(baseUrl);
  // console.log(response);
  const removeDado = async (item) => {
    try {
      await fetchApi(`${baseUrl}/${item.id}`, "DELETE");
      await fetchApi(baseUrl);
    } catch (error) {
    //  console.error(error);
    }
  };

  useEffect(() => {
    fetchApi(baseUrl);
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
        dataBody={response.data}
        deleteFunc={removeDado}
      />
    </Container>
  );
};

export default Dashboard;
