import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`Error al cargar productos: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error loading products:', err);
      }
    };
    loadProducts();
  }, []);

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
  }, [products]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const nextImage = useCallback(() => {
    if (selectedProduct && currentImageIndex < selectedProduct.images.length - 1) {
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

  const openModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  }, []);

  const goToImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  const handleModalClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  const scrollToSection = useCallback((selector: string) => {
    closeModal();
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, [closeModal]);

  const scrollToGallery = useCallback(() => scrollToSection(".gallery-section"), [scrollToSection]);
  const scrollToFooter = useCallback(() => scrollToSection("#contacto"), [scrollToSection]);

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
  }, [isModalOpen, selectedProduct, currentImageIndex, isFullscreen, nextImage, prevImage, closeModal]);

  const modalContent = useMemo(() => {
    if (!isModalOpen || !selectedProduct) return null;

    return (
      <div className="modal-overlay" onClick={handleModalClick} tabIndex={-1}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>

          <div className="modal-image-container">
            <img
              src={selectedProduct.images[currentImageIndex]}
              alt={`${selectedProduct.name} - Imagen ${currentImageIndex + 1}`}
              className="modal-image"
              onClick={openFullscreen}
            />

            {selectedProduct.images.length > 1 && (
              <>
                <button
                  className={`nav-arrow nav-arrow-left ${currentImageIndex === 0 ? "disabled" : ""}`}
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                >
                  ←
                </button>

                <button
                  className={`nav-arrow nav-arrow-right ${
                    currentImageIndex === selectedProduct.images.length - 1 ? "disabled" : ""
                  }`}
                  onClick={nextImage}
                  disabled={currentImageIndex === selectedProduct.images.length - 1}
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
                      className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
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
                <span className="detail-value price">{selectedProduct.price}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Promo:</span>
                <span className="detail-value">{selectedProduct.details.promotion}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Materiales:</span>
                <span className="detail-value">{selectedProduct.details.materials.join(", ")}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Dimensiones:</span>
                <span className="detail-value">{selectedProduct.details.dimensions}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Demora:</span>
                <span className="detail-value">{selectedProduct.details.printTime}</span>
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
    );
  }, [isModalOpen, selectedProduct, currentImageIndex, handleModalClick, closeModal, openFullscreen, prevImage, nextImage, goToImage, scrollToGallery, scrollToFooter]);

  const fullscreenContent = useMemo(() => {
    if (!isFullscreen || !selectedProduct) return null;

    return (
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
    );
  }, [isFullscreen, selectedProduct, currentImageIndex, closeFullscreen]);

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
                    loading="lazy"
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

      {modalContent}
      {fullscreenContent}
    </section>
  );
});

export default Catalog;