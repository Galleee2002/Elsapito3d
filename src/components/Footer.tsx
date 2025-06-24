import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/elsapito.3d", "_blank");
  };

  return (
    <footer id="contacto" className="footer-section">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-map"></i>
                Nuestra Ubicación
              </h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6547!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjInNTcuOCJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación El Sapito 3D"
                ></iframe>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bxl-instagram"></i>
                Síguenos
              </h4>
              <p className="footer-text">
                Mantente al día con nuestros últimos trabajos y novedades
              </p>
              <Button
                className="instagram-footer-button"
                onClick={handleInstagramClick}
              >
                <i className="bx bxl-instagram"></i>
                Seguir en Instagram
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-info-circle"></i>
                Información de Compra
              </h4>
              <div className="info-section">
                <div className="info-item">
                  <h6>
                    <i className="bx bx-truck"></i> Envíos
                  </h6>
                  <p>
                    • Envíos a todo el país
                    <br />
                    • CABA y GBA: 24-48hs
                    <br />• Interior: 3-7 días hábiles
                  </p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-credit-card"></i> Formas de Pago
                  </h6>
                  <p>
                    • Transferencia bancaria
                    <br />
                    • MercadoPago
                    <br />• Efectivo (solo CABA)
                  </p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-time"></i> Proceso
                  </h6>
                  <p>
                    • Cotización gratuita
                    <br />
                    • Tiempo de producción: 2-5 días
                    <br />• Confirmación por WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            <div className="footer-bottom">
              <p className="copyright">
                © 2025 El Sapito 3D. Todos los derechos reservados.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
