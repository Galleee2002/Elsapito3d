import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  color: string;
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = useMemo(() => [
    {
      id: 1,
      image: "/tarjetero.jpg",
      title: "Colores disponibles",
      description: "Verde",
      color: "#77bb54",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Colores disponibles",
      description: "Azul",
      color: "#4ECDC4",
    },
    {
      id: 3,
      image: "/api/placeholder/400/280",
      title: "Colores disponibles",
      description: "Rojo",
      color: "#FF6B6B",
    },
    {
      id: 4,
      image: "/api/placeholder/400/320",
      title: "Colores disponibles",
      description: "Tiempos de producción optimizados sin comprometer la calidad",
      color: "#45B7D1",
    },
    {
      id: 5,
      image: "/api/placeholder/400/290",
      title: "Colores disponibles",
      description: "Tu conformidad es nuestra prioridad en cada proyecto realizado",
      color: "#96CEB4",
    },
  ], []);

  const currentItem = galleryItems[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  }, [galleryItems.length]);

  const indicators = useMemo(() => 
    galleryItems.map((item, index) => (
      <button
        key={index}
        className={`indicator ${index === currentIndex ? "active" : ""}`}
        onClick={() => goToSlide(index)}
        style={{ backgroundColor: item.color }}
      />
    )), [galleryItems, currentIndex, goToSlide]
  );

  return (
    <section className="gallery-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12}>
            <div className="gallery-container">
              <div className="gallery-image-wrapper">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="gallery-image"
                  key={currentItem.id}
                  loading="lazy"
                />
                <div className="gallery-overlay"></div>

                <button
                  className="gallery-arrow gallery-arrow-left"
                  onClick={prevSlide}
                >
                  ←
                </button>
                <button
                  className="gallery-arrow gallery-arrow-right"
                  onClick={nextSlide}
                >
                  →
                </button>
              </div>

              <div
                className="gallery-content"
                style={{ color: currentItem.color }}
              >
                <h3 className="gallery-title">{currentItem.title}</h3>
                <p className="gallery-description">{currentItem.description}</p>
              </div>

              <div className="gallery-indicators">
                {indicators}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;