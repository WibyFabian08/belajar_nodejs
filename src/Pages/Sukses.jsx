import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Sukses extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="mt-2 text-center body">
            <img src="../Assets/sukses.png" width="500"></img>
            <h2>Sukses</h2>
            <h6>Terimakasih Sudah Memesan</h6>
            <Button variant="primary" as={Link} to="/">
              Kembali
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Sukses;
