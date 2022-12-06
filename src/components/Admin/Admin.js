import "../../styles/Admin/Admin.css";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

function Admin() {
  const { name } = useParams();
  return (
    <Container>
      <h2>WELCOME !</h2>
      <p>It's time for fun ! Let's go to connect front with back ! ENJOY 😈</p>
      <i>{name}</i>
    </Container>
  );
}

export default Admin;
