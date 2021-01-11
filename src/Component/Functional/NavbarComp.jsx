import React, { useState, useContext } from "react";
import {
  NavDropdown,
  Navbar,
  Badge,
  Button,
  FormControl,
  Nav,
} from "react-bootstrap";
import { FaReact, FaShoppingBag } from "react-icons/fa";
import { CartContext } from '../../Pages/CartContext';
import { Link } from "react-router-dom";

const NavbarComp = () => {

  const {value, setValue} = useContext(CartContext);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <FaReact />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sukses">Sukses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mahasiswa">Mahasiswa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/useeffect">Use Effect</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hooks">Hooks</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/produkcontext">Produk Context</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            <FaShoppingBag></FaShoppingBag>
            <Badge pill variant="danger">
              {value}
            </Badge>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
