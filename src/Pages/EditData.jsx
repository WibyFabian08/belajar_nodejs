import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import axios from "axios";
import qs from "querystring";
import { Form, Button, Alert } from "react-bootstrap";

const apiUrl = "http://localhost:3001";

class EditData extends React.Component {
  state = {
    id_mahasiswa: this.props.location.state.id_mahasiswa,
    nim: this.props.location.state.nim,
    nama: this.props.location.state.nama,
    jurusan: this.props.location.state.jurusan,
    display: "none",
    response: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  editData = (e, id_mahasiswa) => {
    e.preventDefault();
    const data = qs.stringify({
      id_mahasiswa: id_mahasiswa,
      nim: this.state.nim,
      nama: this.state.nama,
      jurusan: this.state.jurusan,
    });

    axios.put(apiUrl + "/edit", data).then((json) => {
      if (json.data.values == 200) {
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
          <h2>Edit Data</h2>
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
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => this.editData(e, this.state.id_mahasiswa)}
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default EditData;
