import React from "react";
import { Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* Box Icons CDN */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <Navbar
        expand="lg"
        className="custom-navbar row px-3 px-md-4"
        variant="dark"
      >
        <div className="pattern-overlay"></div>
        <div
          className="container-fluid position-relative"
          style={{ zIndex: 2 }}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler ms-auto"
          >
            <i
              className="bx bx-menu text-white"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column col-md-3 col-12 flex-lg-row">
              <Nav.Link
                href="#inicio"
                className="nav-button me-lg-3 mb-2 mb-lg-0"
              >
                <i className="bx bx-home-alt"></i>
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#catalogo"
                className="nav-button me-lg-3 mb-2 mb-lg-0"
              >
                <i className="bx bx-grid-alt"></i>
                Catálogo
              </Nav.Link>
              <Nav.Link href="#contacto" className="nav-button mb-2 mb-lg-0">
                <i className="bx bx-message-dots"></i>
                Contacto
              </Nav.Link>

              {/* Buscador para móvil */}
              <div className="d-lg-none mt-3">
                <Form className="search-form-mobile">
                  <InputGroup>
                    <div className="input-group position-relative">
                      <i className="bx bx-search search-icon"></i>
                      <Form.Control
                        type="search"
                        placeholder="Buscar productos..."
                        className="search-input"
                      />
                    </div>
                  </InputGroup>
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>

          <Form className="search-form col-4 d-none d-lg-block">
            <InputGroup>
              <div className="input-group position-relative">
                <i className="bx bx-search search-icon"></i>
                <Form.Control
                  type="search"
                  placeholder="Buscar productos..."
                  className="search-input"
                />
              </div>
            </InputGroup>
          </Form>
          <div className="col-4 transparent-div"></div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
