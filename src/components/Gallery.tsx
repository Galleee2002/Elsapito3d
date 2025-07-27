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

  const galleryItems: GalleryItem[] = useMemo(
    () => [
      {
        id: 22,
        image: "/img/blanco.jpg",
        title: "Colores disponibles",
        description: "Blanco",
        color: "#ffff",
      },
      {
        id: 20,
        image: "/img/crema.jpg",
        title: "Colores disponibles",
        description: "Crema",
        color: "#FFFFD0",
      },
      {
        id: 12,
        image: "/img/amarillo.jpg",
        title: "Colores disponibles",
        description: "Amarillo",
        color: "#FFFF00",
      },
      {
        id: 8,
        image: "/img/oro.jpg",
        title: "Colores disponibles",
        description: "Oro",
        color: "#FFDF00",
      },
      {
        id: 19,
        image: "/img/dorado.jpg",
        title: "Colores disponibles",
        description: "Dorado",
        color: "#EFBF04",
      },
      {
        id: 2,
        image: "/img/rojoanaranjado.jpg",
        title: "Colores disponibles",
        description: "Naranja",
        color: "#C93C20",
      },
      {
        id: 3,
        image: "/img/rojo.jpg",
        title: "Colores disponibles",
        description: "Rojo",
        color: "#FF6B6B",
      },
      {
        id: 23,
        image: "/img/rosapastel.jpg",
        title: "Colores disponibles",
        description: "Rosa pastel",
        color: "#FFB6C1",
      },
      {
        id: 14,
        image: "/img/rosa.jpg",
        title: "Colores disponibles",
        description: "Rosa",
        color: "#FFC0CB",
      },
      {
        id: 15,
        image: "/img/rosagold.jpg",
        title: "Colores disponibles",
        description: "Rosa Oro",
        color: "#B76E79",
      },
      {
        id: 10,
        image: "/img/fucsia.jpg",
        title: "Colores disponibles",
        description: "Fucsia",
        color: "#FF00FF",
      },
      {
        id: 11,
        image: "/img/violeta.jpg",
        title: "Colores disponibles",
        description: "Violeta",
        color: "#8F00FF",
      },
      {
        id: 16,
        image: "/img/violetapastel.jpg",
        title: "Colores disponibles",
        description: "Violeta Pastel",
        color: "#C3B1E1",
      },
      {
        id: 6,
        image: "/img/azul.jpg",
        title: "Colores disponibles",
        description: "Azul",
        color: "#00446A",
      },
      {
        id: 24,
        image: "/img/celeste.jpg",
        title: "Colores disponibles",
        description: "Celeste",
        color: "#0077BE",
      },
      {
        id: 4,
        image: "/img/celestepastel.jpg",
        title: "Colores disponibles",
        description: "Azul pastel",
        color: "#45B7D1",
      },
      {
        id: 18,
        image: "/img/verdemanzana.jpg",
        title: "Colores disponibles",
        description: "Verde manzana",
        color: "#8db600",
      },
      {
        id: 1,
        image: "/img/verde.jpg",
        title: "Colores disponibles",
        description: "Verde",
        color: "#77bb54",
      },
      {
        id: 21,
        image: "/img/verdepastel.jpg",
        title: "Colores disponibles",
        description: "Verde pastel",
        color: "#80EF80",
      },
      {
        id: 13,
        image: "/img/marronclarito.jpg",
        title: "Colores disponibles",
        description: "Marron Claro",
        color: "#964B00",
      },
      {
        id: 7,
        image: "/img/marron.jpg",
        title: "Colores disponibles",
        description: "Marron Oscuro",
        color: "#895129",
      },
      {
        id: 17,
        image: "/img/grisplata.jpg",
        title: "Colores disponibles",
        description: "Gris",
        color: "#808080",
      },
      {
        id: 9,
        image: "/img/negro.jpg",
        title: "Colores disponibles",
        description: "Negro",
        color: "#000",
      },
      {
        id: 5,
        image: "/img/cristal.jpg",
        title: "Colores disponibles",
        description: "Cristal",
        color: "#a5e3e0",
      },
    ],
    []
  );

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

  const indicators = useMemo(
    () =>
      galleryItems.map((item, index) => (
        <button
          key={index}
          className={`indicator ${index === currentIndex ? "active" : ""}`}
          onClick={() => goToSlide(index)}
          style={{ backgroundColor: item.color }}
        />
      )),
    [galleryItems, currentIndex, goToSlide]
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

              <div className="gallery-content">
                <h3 className="gallery-title" style={{ color: "white" }}>
                  {currentItem.title}
                </h3>
                <p
                  className="gallery-description"
                  style={{ color: currentItem.color }}
                >
                  {currentItem.description}
                </p>
              </div>

              <div className="gallery-indicators">{indicators}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
