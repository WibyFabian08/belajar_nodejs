import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:3001";
let no = 1;

class Mahasiswa extends React.Component {
  state = {
    mahasiswa: [],
  };

  componentDidMount() {
    axios.get(apiUrl + "/tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <NavbarComp></NavbarComp>
        </div>
        <div className="body mt-3">
          <h2>Daftar Mahasiswa</h2>
          <Button variant="success" as={Link} to="/tambah">
            Tambah Data
          </Button>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nim</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.mahasiswa.map((mahasiswa, index) => (
                <tr key={mahasiswa.id_mahasiswa}>
                  <td>{no++}</td>
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
                    <Button variant="danger">Hapus</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Mahasiswa;
