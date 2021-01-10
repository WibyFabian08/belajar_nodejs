import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const apiUrl = "http://localhost:3001";

class TambahData extends React.Component {
  state = {
    nim: "",
    nama: "",
    jurusan: "",
    response: "",
    display: "none",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  tambahData = (e) => {
    e.preventDefault();
    const data = {
      nim: this.state.nim,
      nama: this.state.nama,
      jurusan: this.state.jurusan,
    };

    axios.post(apiUrl + "/tambah", data).then((json) => {
      if (json.data.status == 200) {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      } else {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="body mt-3">
          <h2>Tambah Data</h2>
          <Alert variant="success" style={{ display: this.state.display }}>
            {this.state.response}
          </Alert>
          <hr />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>NIM</Form.Label>
              <Form.Control
                type="text"
                name="nim"
                onChange={this.handleChange}
                value={this.state.nim}
                placeholder="NIM"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                placeholder="Nama"
                onChange={this.handleChange}
                value={this.state.nama}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Jurusan</Form.Label>
              <Form.Control
                type="text"
                value={this.state.jurusan}
                name="jurusan"
                placeholder="Jurusan"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.tambahData}>
              Tambah
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default TambahData;
