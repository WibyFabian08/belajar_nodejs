import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardComp extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img variant="top" src="../Assets/rumah2.jpg" />
          <Card.Body>
            <Card.Title>{this.props.judul}</Card.Title>
            <Card.Text>{this.props.tanggal}</Card.Text>
            <Button
              variant="secondary"
              as={Link}
              to={{
                pathname: `/detail/${this.props.id}`,
                data: {
                  judul: this.props.judul,
                  tanggal: this.props.tanggal,
                  gambar: <Image src="../Assets/rumah2.jpg" width='400px'></Image>
                },
              }}
            >
              Detail
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardComp;
