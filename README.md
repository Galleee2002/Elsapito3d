# Código del Proyecto

## src\App.test.tsx

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

## src\App.tsx

```
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;

```

## src\components\Header.tsx

```
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

          <Form className="search-form col-3 d-none d-lg-block">
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
          <div className=" col-4 transparent-div"></div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;

```

## src\components\HeroSection.tsx

```
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className="logo-container">
              <div className="logo-circle">
                <img
                  src="/logo.png"
                  alt="El Sapito 3D Logo"
                  className="logo-image"
                />
              </div>
            </div>

            <div className="content-container">
              <h1 className="hero-title mb-3">
                Servicio de impresiones 3D FDM
              </h1>

              <p className="hero-subtitle mb-4">
                Transformamos tus ideas en realidad con tecnología
                <br />
                de vanguardia y materiales de primera calidad
              </p>

              <div className="button-group">
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button primary-button me-2 me-md-3 mb-2 mb-md-0"
                >
                  <i className="bx bx-grid-alt"></i>
                  Ver catálogo
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button secondary-button me-2 me-md-3 mb-2 mb-md-0"
                >
                  <i className="bx bx-package"></i>
                  Envíos
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button instagram-button"
                >
                  <i className="bx bxl-instagram"></i>
                  Instagram
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroSection;

```

## src\index.tsx

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

## src\react-app-env.d.ts

```
/// <reference types="react-scripts" />

```

## src\reportWebVitals.ts

```
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

## src\setupTests.ts

```
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

