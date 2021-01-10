import React, { useState } from "react";
import {
  NavDropdown,
  Navbar,
  Form,
  Button,
  FormControl,
  Nav,
} from "react-bootstrap";
import { FaReact } from "react-icons/fa";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><FaReact/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sukses">Sukses</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/mahasiswa">Mahasiswa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
