import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section">
      <div className="pattern-overlay"></div>
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className="logo-container mb-4">
              <div className="logo-circle">
                <img
                  src="/logo.png"
                  alt="El Sapito 3D Logo"
                  className="logo-image"
                />
              </div>
              <div className="logo-text">
                <div className="logo-title">EL SAPITO</div>
                <div className="logo-subtitle">3D</div>
              </div>
            </div>

            <h1 className="hero-title mb-3">Servicio de impresiones 3D FDM</h1>

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
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroSection;
