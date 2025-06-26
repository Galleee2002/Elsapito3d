import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./Catalog.css";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: string;
  details: {
    materials: string[];
    dimensions: string;
    printTime: string;
    promotion: string;
  };
}

interface CatalogRef {
  openProductModal: (productId: number) => void;
}

const Catalog = forwardRef<CatalogRef>((props, ref) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Tarjetero para reja",
      description:
        "Compacto y fácil de transportar, este tarjetero es ideal para tarjetas de presentación, planchas de stickers, etc.",
      images: [
        "/tarjetero.jpg",
        "/tarjetero1.jpg",
        "/tarjetero3.jpg",
        "/tarjetero2.jpg",
      ],
      price: "$4000 ",
      details: {
        materials: ["PLA+"],
        dimensions: "8cm x 5cm x 5cm",
        printTime: "10 - 15 días",
        promotion: "A partir de tres unidades $3000 c/u",
      },
    },
    {
      id: 2,
      name: "Expositor encastrable",
      description:
        "Organizá y destacá tus piezas con este práctico estante escalonado, ideal para mostrar figuras, anillos o productos pequeños.",
      images: [
        "/estante1.jpg",
        "/estante2.jpg",
        "/estante3.jpg",
        "/estante4.jpg",
      ],
      price: "$10.000",
      details: {
        materials: ["PLA", "ABS"],
        dimensions: "20cm x 15cm x 12cm",
        printTime: "10-15 días",
        promotion: "A partir de tres unidades $8500 c/u",
      },
    },
    {
      id: 3,
      name: "Calesita giratoria expositora",
      description:
        "Mostrá tus productos de forma ordenada y vistosa con este exhibidor giratorio impreso en 3D. Cuenta con dos niveles con ganchos para colgar accesorios, bijouterie, llaveros o miniaturas.",
      images: ["/calesita1.jpg", "/calesita2.jpg"],
      price: " $13.000 ",
      details: {
        materials: ["PLA+"],
        dimensions: "Variable",
        printTime: "10-15 días",
        promotion: "Calesita tres niveles $15.000",
      },
    },
    {
      id: 4,
      name: "Lapicero expositor",
      description:
        "Soporte organizador semicircular para elementos de escritorio o modelado. Con 21 orificios distribuidos en tres niveles, ideal para guardar lápices, pinceles, herramientas de modelado o repujado. Diseño compacto, fabricado en material resistente y fácil de limpiar.",
      images: ["/lapicero.jpg", "/lapicero1.jpg"],
      price: "$6.500",
      details: {
        materials: ["PLA+"],
        dimensions: "12cm x 8cm x 15cm",
        printTime: "10-15 días",
        promotion: "A partir de tres unidades $5000 c/u",
      },
    },
    {
      id: 5,
      name: "Expositor encastrable para cuadernos / libros",
      description:
        "Expositor organizador modular.Su diseño con ranuras paralelas permite mantener las piezas ordenadas y visibles, facilitando su exhibición o uso diario.",
      images: [
        "/expositor.jpg",
        "/expositor1.jpg",
        "/expositor2.jpg",
        "/expositor3.jpg",
        "/expositor4.jpg",
      ],
      price: "$7.500",
      details: {
        materials: ["PLA+"],
        dimensions: "25cm x 15cm x 8cm",
        printTime: "10-15 días",
        promotion: "A partir de tres unidades $6000 c/u",
      },
    },
    {
      id: 6,
      name: "Maceta autorregante hexagonal",
      description:
        "Diseño geométrico moderno con sistema de auto-riego integrado, perfecta para plantas suculentas y hierbas aromáticas.",
      images: ["/maceta1.jpg", "/maceta2.jpg"],
      price: "$7.200",
      details: {
        materials: ["PLA+"],
        dimensions: "14cm x 14cm x 16cm",
        printTime: "10-15 días",
        promotion: "Set de tres macetas $18.000",
      },
    },
    {
      id: 7,
      name: "Lámpara de mesa LED personalizable",
      description:
        "Iluminación LED con base impresa en 3D y pantalla intercambiable. Incluye regulador de intensidad y puerto USB.",
      images: ["/lampara1.jpg", "/lampara2.jpg", "/lampara3.jpg"],
      price: "$15.500",
      details: {
        materials: ["PLA+", "PETG"],
        dimensions: "20cm x 20cm x 35cm",
        printTime: "15-20 días",
        promotion: "Con pantalla extra $18.000",
      },
    },
    {
      id: 8,
      name: "Dispensador de bolsas para mascotas",
      description:
        "Práctico dispensador que se engancha a la correa, mantiene las bolsas secas y siempre a mano durante los paseos.",
      images: ["/dispensador1.jpg", "/dispensador2.jpg"],
      price: "$3.800",
      details: {
        materials: ["ABS", "PETG"],
        dimensions: "8cm x 6cm x 4cm",
        printTime: "5-10 días",
        promotion: "Pack de dos colores $6.500",
      },
    },
  ];

  useImperativeHandle(ref, () => ({
    openProductModal: (productId: number) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        openModal(product);
      }
    },
  }));

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

    const currentCards = cardRefs.current;
    currentCards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const dropdownElement = document.querySelector(
          `[data-dropdown="${activeDropdown}"]`
        );
        const buttonElement = document.querySelector(
          `[data-button="${activeDropdown}"]`
        );

        if (dropdownElement && buttonElement) {
          if (
            !dropdownElement.contains(event.target as Node) &&
            !buttonElement.contains(event.target as Node)
          ) {
            setActiveDropdown(null);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const nextImage = useCallback(() => {
    if (
      selectedProduct &&
      currentImageIndex < selectedProduct.images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }, [selectedProduct, currentImageIndex]);

  const prevImage = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }, [currentImageIndex]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (isModalOpen) {
          closeModal();
        }
      } else if (isModalOpen && !isFullscreen && selectedProduct) {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    isModalOpen,
    selectedProduct,
    currentImageIndex,
    isFullscreen,
    nextImage,
    prevImage,
    closeModal,
  ]);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setActiveDropdown(null);
    setCurrentImageIndex(0);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleModalClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const scrollToGallery = () => {
    closeModal();
    setTimeout(() => {
      const gallerySection = document.querySelector(".gallery-section");
      if (gallerySection) {
        gallerySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const scrollToFooter = () => {
    closeModal();
    setTimeout(() => {
      const footerSection = document.querySelector("#contacto");
      if (footerSection) {
        footerSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        <div className="header-section">
          <h2 className="catalog-title">Nuestro Catálogo</h2>
          <p className="catalog-subtitle">
            Descubre nuestros productos de impresión 3D de alta calidad
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="product-card-wrapper"
            >
              <div className="product-card" onClick={() => openModal(product)}>
                <div className="product-image-container">
                  <img
                    src={product.images[0]}
                    className="product-image"
                    alt={product.name}
                  />
                  <div className="image-overlay">
                    <span className="view-details">Ver detalles</span>
                  </div>
                </div>

                <div className="product-body">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>

                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={handleModalClick} tabIndex={-1}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="modal-image-container">
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={`${selectedProduct.name} - Imagen ${
                  currentImageIndex + 1
                }`}
                className="modal-image"
                onClick={openFullscreen}
              />

              {selectedProduct.images.length > 1 && (
                <>
                  <button
                    className={`nav-arrow nav-arrow-left ${
                      currentImageIndex === 0 ? "disabled" : ""
                    }`}
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                  >
                    ←
                  </button>

                  <button
                    className={`nav-arrow nav-arrow-right ${
                      currentImageIndex === selectedProduct.images.length - 1
                        ? "disabled"
                        : ""
                    }`}
                    onClick={nextImage}
                    disabled={
                      currentImageIndex === selectedProduct.images.length - 1
                    }
                  >
                    →
                  </button>

                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedProduct.images.length}
                  </div>

                  <div className="image-thumbnails">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={index}
                        className={`thumbnail ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                        onClick={() => goToImage(index)}
                      >
                        <img src={image} alt={`Miniatura ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="modal-info">
              <h3 className="modal-title">{selectedProduct.name}</h3>
              <p className="modal-description">{selectedProduct.description}</p>

              <div className="modal-details">
                <div className="detail-row">
                  <span className="detail-label">Precio:</span>
                  <span className="detail-value price">
                    {selectedProduct.price}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Promo:</span>
                  <span className="detail-value">
                    {selectedProduct.details.promotion}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Materiales:</span>
                  <span className="detail-value">
                    {selectedProduct.details.materials.join(", ")}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Dimensiones:</span>
                  <span className="detail-value">
                    {selectedProduct.details.dimensions}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Demora:</span>
                  <span className="detail-value">
                    {selectedProduct.details.printTime}
                  </span>
                </div>
              </div>

              <div className="modal-actions">
                <button className="contact-btn" onClick={scrollToGallery}>
                  Ver colores disponibles
                </button>
                <button className="quote-btn" onClick={scrollToFooter}>
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFullscreen && selectedProduct && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="fullscreen-close" onClick={closeFullscreen}>
            ×
          </button>
          <img
            src={selectedProduct.images[currentImageIndex]}
            alt={`${selectedProduct.name} - Pantalla completa`}
            className="fullscreen-image"
          />
        </div>
      )}
    </section>
  );
});

export default Catalog;
