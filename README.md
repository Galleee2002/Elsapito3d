# Código del Proyecto

## src\App.css

```
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Fredoka", sans-serif !important;
  font-weight: 700 !important;
  overflow-x: hidden !important;
}

.App {
  min-height: 100vh;
  background: url("/public/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}
.App::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 10% 20%,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 50%
    );
  pointer-events: none;
}

@media (max-width: 768px) {
  .App {
    background: url("/public/background.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
}

```

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

## src\components\animations.css

```
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-logo {
  animation: fadeInScale 1.2s ease-out 0.6s;
  animation-fill-mode: both;
  opacity: 0;
}

.animate-title {
  animation: fadeInUp 1.2s ease-out 0.7s;
  animation-fill-mode: both;
  opacity: 0;
}

.animate-subtitle {
  animation: fadeInUp 1.2s ease-out 0.7s;
  animation-fill-mode: both;
  opacity: 0;
}

.animate-buttons {
  animation: fadeInScale 1.2s ease-out 0.8s;
  animation-fill-mode: both;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .animate-logo,
  .animate-title,
  .animate-subtitle,
  .animate-buttons {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

```

## src\components\Header.css

```
/* Header.css */
.custom-navbar {
  background-color: #77bb54 !important;
  padding: 1rem 0;
  position: relative;
  min-height: 70px;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 80% 50%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    );
  background-size: 30px 30px;
  z-index: 1;
}

.nav-button {
  color: white !important;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  border-radius: 8px;
  border: 2px solid #f1f11e;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white !important;
  transform: translateY(-2px);
}

.search-form {
  max-width: 600px;
  width: 100%;
}

.search-input {
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 25px !important;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  border-color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
  color: white;
}

.input-group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  font-size: 1.1rem;
}

/* Navbar toggler personalizado */
.navbar-toggler {
  border: 2px solid #f1f11e;
  border-radius: 8px;
  padding: 0.4rem;
  background-color: transparent;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(241, 241, 30, 0.25);
}

.navbar-toggler:hover {
  background-color: rgba(241, 241, 30, 0.1);
}

/* Estilos para el menu colapsable */
.search-form-mobile {
  width: 100%;
}

@media (max-width: 991px) {
  .custom-navbar {
    padding: 0.5rem 0;
  }
  .transparent-div {
    display: none;
  }
  .nav-button {
    padding: 0.6rem 1rem !important;
    font-size: 0.95rem;
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .navbar-collapse {
    background-color: rgba(119, 187, 84, 0.95);
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(241, 241, 30, 0.3);
  }

  .search-form-mobile .search-input {
    width: 100%;
  }
}

```

## src\components\Header.tsx

```
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

```

## src\components\HeroSection.css

```
.hero-section {
  min-height: 80vh;
  background: transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    );
  background-size: 50px 50px;
  z-index: 1;
}

.min-vh-80 {
  min-height: 80vh;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0rem !important;
  margin-top: 4rem !important;
}

.logo-image {
  width: 280px;
  height: 280px;
  object-fit: contain;
}

.content-container {
  margin-top: 0.5rem !important;
}

.logo-text {
  text-align: center;
  color: white;
}

.logo-title {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: -5px;
}

.logo-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  opacity: 0.9;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem !important;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.hero-button {
  border: 2px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;
}

.hero-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  color: white;
  border-color: white;
}

.primary-button:hover {
  background-color: rgba(119, 187, 84, 0.8);
  border-color: #77bb54;
}

.secondary-button:hover {
  background-color: rgba(52, 152, 219, 0.8);
  border-color: #3498db;
}

.instagram-button:hover {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  border-color: #e1306c;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .logo-title {
    font-size: 2rem;
  }

  .logo-container {
    margin-top: 2rem !important;
    margin-bottom: 0rem !important;
  }

  .logo-circle {
    width: 200px;
    height: 200px;
  }

  .logo-image {
    width: 180px;
    height: 180px;
  }

  .content-container {
    margin-top: 0.3rem !important;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }

  .hero-button {
    width: 100%;
    max-width: 250px;
  }
}

```

## src\components\HeroSection.tsx

```
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import "./animations.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className="logo-container animate-logo">
              <div className="logo-circle">
                <img
                  src="/logo.png"
                  alt="El Sapito 3D Logo"
                  className="logo-image"
                />
              </div>
            </div>

            <div className="content-container">
              <h1 className="hero-title mb-3 animate-title">
                Servicio de impresiones 3D FDM
              </h1>

              <p className="hero-subtitle mb-4 animate-subtitle">
                Transformamos tus ideas en realidad con tecnología
                <br />
                de vanguardia y materiales de primera calidad
              </p>

              <div className="button-group animate-buttons">
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

## src\index.css

```
body {
  margin: 0;
  font-family: "Fredoka", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
}

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

