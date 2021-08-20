import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useEffect } from "react";
import "./css/header.css";
import { BsCloudUpload } from "react-icons/bs";

const Header = () => {
  let tempPath = window.location.pathname;

  useEffect(() => {
    tempPath = window.location.pathname;
  }, []);

  return (
    <>
      {tempPath === "/postlogin" ? (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">
                  <BsCloudUpload style={{ color: "white" }} /> Upload Image
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="Username" id="collasible-nav-dropdown" className="secoundnav">
                  <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/login">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default withRouter(Header);
