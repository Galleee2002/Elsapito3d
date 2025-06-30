import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/elsapito.3d", "_blank");
  }, []);

  return (
    <footer id="contacto" className="footer-section">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-map" />
                Nuestra Ubicación
              </h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.063314268396!2d-58.37941742341764!3d-34.60256045743858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacc267f767d%3A0x4f13f152ba765ad!2sMaip%C3%BA%20484%2C%20C1007%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1750878858345!5m2!1ses!2sar"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación El Sapito 3D"
                />
              </div>
              <div className="text-showroom">
                <p>
                  Retiro presencial en @BunnyClubShowroom Maipú 484 Galeria
                  Maipú Local 24- Horarios: Martes a Viernes de 14hs a 19hs y
                  Sábados de 12hs a 16hs
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx  bx-cart"></i>
                Hace tu pedido
              </h4>
              <div className="footer-text">
                <p>¿Cómo comprar?</p>
                <ol className="footer-list">
                  <li> 1 - Elegí el producto que te guste del catálogo.</li>
                  <li>
                    2 - Tené en cuenta la cantidad que querés y el color
                    disponible.
                  </li>
                  <li>
                    3 - Una vez elegido, escribinos por mensaje privado en
                    Instagram para coordinar tu pedido.
                  </li>
                </ol>
              </div>
              <Button
                className="instagram-footer-button"
                onClick={handleInstagramClick}
              >
                <i className="bx bxl-instagram" />
                Solictar cotización
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-info-circle" />
                Información de Compra
              </h4>
              <div className="info-section">
                <div className="info-item">
                  <h6>
                    <i className="bx bx-truck" /> Envíos
                  </h6>
                  <p>• Envíos a todo el país</p>
                  <p>• Por Correo Argentino a cargo del comprador</p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-credit-card" /> Formas de Pago
                  </h6>
                  <p>
                    • Transferencia bancaria
                    <br />
                    • MercadoPago
                    <br />• Efectivo (solo CABA - BunnyClubShowroom)
                  </p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-time" /> Proceso
                  </h6>
                  <p>
                    • Cotización gratuita
                    <br />
                    • Tiempo de producción: 10-15 días
                    <br />• Atención posventa via Instagram
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
