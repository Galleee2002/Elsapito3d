import React, { useState } from "react";
import { Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      let targetSection = "";

      if (searchLower.includes("inicio") || searchLower.includes("home")) {
        targetSection = "#inicio";
      } else if (
        searchLower.includes("catalogo") ||
        searchLower.includes("catálogo") ||
        searchLower.includes("productos")
      ) {
        targetSection = "#catalogo";
      } else if (
        searchLower.includes("contacto") ||
        searchLower.includes("contact")
      ) {
        targetSection = "#contacto";
      } else {
        targetSection = "#catalogo";
      }

      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <Navbar
        expand="lg"
        className="custom-navbar row px-3 px-md-4"
        variant="dark"
        fixed="top"
      >
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

              <div className="d-lg-none mt-3">
                <Form className="search-form-mobile">
                  <InputGroup>
                    <div className="input-group position-relative">
                      <i
                        className="bx bx-search search-icon"
                        onClick={handleSearch}
                        style={{
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#77bb54")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      ></i>
                      <Form.Control
                        type="search"
                        placeholder="Buscar secciones..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </InputGroup>
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>

          <Form className="search-form col-3 d-none d-lg-block">
            <InputGroup>
              <div className="input-group position-relative">
                <i
                  className="bx bx-search search-icon"
                  onClick={handleSearch}
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#77bb54")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                ></i>
                <Form.Control
                  type="search"
                  placeholder="Buscar secciones..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </InputGroup>
          </Form>
          <div className=" col-4 transparent-div"></div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
