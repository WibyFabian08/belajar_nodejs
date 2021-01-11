import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import { Table, Button, Alert } from "react-bootstrap";
import axios from "axios";
import qs from "querystring";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:3001";
let no = 1;

class Mahasiswa extends React.Component {
  state = {
    mahasiswa: [],
    response: "",
    display: "none",
    id_mahasiswa: "",
  };

  componentDidMount() {
    axios.get(apiUrl + "/tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  hapusData = (idmahasiswa) => {
    const data = qs.stringify({
      id_mahasiswa: idmahasiswa,
    });

    axios
      .delete(apiUrl + "/hapus", {
        data: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((json) => {
        if (json.data.values === 200) {
          axios.get(apiUrl + "/tampil").then((res) => {
            this.setState({
              mahasiswa: res.data.values,
            });
          });
          this.setState({
            response: json.data.values,
            display: "block",
          });
          this.props.history.push("/mahasiswa");
        } else {
          axios.get(apiUrl + "/tampil").then((res) => {
            this.setState({
              mahasiswa: res.data.values,
            });
          });
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
          <h2>Daftar Mahasiswa</h2>
          <Button className='mb-3' variant="success" as={Link} to="/tambah">
            Tambah Data
          </Button>
          <Alert variant="danger" style={{ display: this.state.display }}>
            {this.state.response}
          </Alert>
          <hr />
          <div className="table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nim</th>
                  <th>Nama</th>
                  <th>Jurusan</th>
                  <th>Opsi</th>
                </tr>
              </thead>
              {this.state.mahasiswa.map((mahasiswa) => (
                <tbody>
                  <tr key={mahasiswa.id_mahasiswa}>
                    <td>{mahasiswa.id_mahasiswa}</td>
                    <td>{mahasiswa.nim}</td>
                    <td>{mahasiswa.nama}</td>
                    <td>{mahasiswa.jurusan}</td>
                    <td>
                      <Button
                        variant="primary"
                        as={Link}
                        to={{
                          pathname: "/edit",
                          state: {
                            id_mahasiswa: mahasiswa.id_mahasiswa,
                            nim: mahasiswa.nim,
                            nama: mahasiswa.nama,
                            jurusan: mahasiswa.jurusan,
                          },
                        }}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => this.hapusData(mahasiswa.id_mahasiswa)}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Mahasiswa;
