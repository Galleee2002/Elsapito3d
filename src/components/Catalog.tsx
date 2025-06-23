import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Catalog.css";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  colors: string[];
  price: string;
}

const Catalog = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Figura de Acción Personalizada",
      description:
        "Crea tu propia figura de acción con detalles únicos y acabados profesionales",
      image: "/api/placeholder/300/250",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
      price: "$25.000",
    },
    {
      id: 2,
      name: "Miniatura Arquitectónica",
      description:
        "Modelos a escala de edificios y estructuras con precisión milimétrica",
      image: "/api/placeholder/300/250",
      colors: ["#FECA57", "#FF9FF3", "#54A0FF", "#5F27CD"],
      price: "$35.000",
    },
    {
      id: 3,
      name: "Prototipo Funcional",
      description:
        "Prototipos para pruebas de concepto y desarrollo de productos",
      image: "/api/placeholder/300/250",
      colors: ["#00D2D3", "#FF9F43", "#EE5A24", "#0984E3"],
      price: "$45.000",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-slide-in");
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="catalogo" className="catalog-section">
      <Container>
        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <h2 className="catalog-title">Nuestro Catálogo</h2>
            <p className="catalog-subtitle">
              Descubre nuestros productos de impresión 3D de alta calidad
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {products.map((product, index) => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="product-card-wrapper"
              >
                <Card className="product-card h-100">
                  <div className="product-image-container">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="product-image"
                      alt={product.name}
                    />
                  </div>

                  <Card.Body className="product-body">
                    <Card.Title className="product-title">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>

                    <div className="color-palette mb-3">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="color-dot"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>

                    <div className="product-footer">
                      <span className="product-price">{product.price}</span>
                      <Button className="cta-button">
                        <i className="bx bx-cart-add"></i>
                        Solicitar
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Catalog;
