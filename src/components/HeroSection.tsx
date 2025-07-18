import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import "./animations.css";

const HeroSection = () => {
  const scrollToSection = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleCatalogClick = useCallback(
    () => scrollToSection("#catalogo"),
    [scrollToSection]
  );
  const handleShippingClick = useCallback(
    () => scrollToSection("#contacto"),
    [scrollToSection]
  );

  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/elsapito.3d", "_blank");
  }, []);

  return (
    <Container fluid className="hero-section" id="inicio">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className="logo-container animate-logo">
              <div className="logo-circle">
                <img
                  src="/img/logo.png"
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
                  onClick={handleCatalogClick}
                >
                  <i className="bx bx-grid-alt" />
                  Ver catálogo
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button secondary-button me-2 me-md-3 mb-2 mb-md-0"
                  onClick={handleShippingClick}
                >
                  <i className="bx bx-package" />
                  Envíos
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button instagram-button"
                  onClick={handleInstagramClick}
                >
                  <i className="bx bxl-instagram" />
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
