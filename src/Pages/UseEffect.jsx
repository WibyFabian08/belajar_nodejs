import React, { useState, useEffect } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import axios from "axios";
import {useContext} from 'react';
import {CartContext} from '../Pages/CartContext';

const UseEffect = () => {


  const apiUrl = "http://localhost:3001";

  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    console.log("ok");
    axios.get(apiUrl + "/tampil").then((res) => {
      setMahasiswa(res.data.values);
    });
  }, []);

  return (
    <div>
      <div className="body mt-3">
        <h2>Daftar Mahasiswa</h2>
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
            {mahasiswa.map((mahasiswa, index) => (
              <tbody>
                <tr key={index}>
                  <td>{mahasiswa.id_mahasiswa}</td>
                  <td>{mahasiswa.nim}</td>
                  <td>{mahasiswa.nama}</td>
                  <td>{mahasiswa.jurusan}</td>
                  <td>
                    <Button variant="primary">Edit</Button>{" "}
                    <Button variant="danger">Hapus</Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
