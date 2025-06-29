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

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  media: MediaItem[];
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
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error(`Error al cargar productos: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
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

  const formatDescription = useCallback((description: string) => {
    const lines = description.split("\n").filter((line) => line.trim() !== "");
    return lines.map((line, index) => (
      <div key={index} className="description-line">
        {line.trim()}
      </div>
    ));
  }, []);

  const truncateDescription = useCallback(
    (description: string, maxLength: number = 80) => {
      const firstLine = description.split("\n")[0];
      if (firstLine.length <= maxLength) return firstLine;
      return firstLine.substring(0, maxLength) + "...";
    },
    []
  );

  const getFirstImage = useCallback((media: MediaItem[]) => {
    const firstImage = media.find((item) => item.type === "image");
    if (firstImage) return firstImage.src;

    const firstVideo = media.find((item) => item.type === "video");
    return firstVideo?.thumbnail || "";
  }, []);

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

  const nextMedia = useCallback(() => {
    if (
      selectedProduct &&
      currentMediaIndex < selectedProduct.media.length - 1
    ) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  }, [selectedProduct, currentMediaIndex]);

  const prevMedia = useCallback(() => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  }, [currentMediaIndex]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setCurrentMediaIndex(0);
    setIsFullscreen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const openModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setCurrentMediaIndex(0);
  }, []);

  const goToMedia = useCallback((index: number) => {
    setCurrentMediaIndex(index);
  }, []);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const handleModalClick = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  const scrollToSection = useCallback(
    (selector: string) => {
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
    },
    [closeModal]
  );

  const scrollToGallery = useCallback(
    () => scrollToSection(".gallery-section"),
    [scrollToSection]
  );
  const scrollToFooter = useCallback(
    () => scrollToSection("#contacto"),
    [scrollToSection]
  );

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
          nextMedia();
        } else if (event.key === "ArrowLeft") {
          prevMedia();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    isModalOpen,
    selectedProduct,
    currentMediaIndex,
    isFullscreen,
    nextMedia,
    prevMedia,
    closeModal,
  ]);

  const renderMedia = useCallback(
    (mediaItem: MediaItem, isModal: boolean = false) => {
      if (mediaItem.type === "video") {
        return (
          <video
            ref={isModal ? videoRef : undefined}
            className={isModal ? "modal-media" : "product-image"}
            controls
            muted
            onClick={isModal ? openFullscreen : undefined}
            style={{ cursor: isModal ? "zoom-in" : "default" }}
          >
            <source src={mediaItem.src} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        );
      } else {
        return (
          <img
            src={mediaItem.src}
            alt="Producto"
            className={isModal ? "modal-media" : "product-image"}
            onClick={isModal ? openFullscreen : undefined}
            style={{ cursor: isModal ? "zoom-in" : "default" }}
            loading="lazy"
          />
        );
      }
    },
    [openFullscreen]
  );

  const modalContent = useMemo(() => {
    if (!isModalOpen || !selectedProduct) return null;

    const currentMedia = selectedProduct.media[currentMediaIndex];

    return (
      <div className="modal-overlay" onClick={handleModalClick} tabIndex={-1}>
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>

          <div className="modal-image-container">
            {renderMedia(currentMedia, true)}

            {selectedProduct.media.length > 1 && (
              <>
                <button
                  className={`nav-arrow nav-arrow-left ${
                    currentMediaIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={prevMedia}
                  disabled={currentMediaIndex === 0}
                >
                  ←
                </button>

                <button
                  className={`nav-arrow nav-arrow-right ${
                    currentMediaIndex === selectedProduct.media.length - 1
                      ? "disabled"
                      : ""
                  }`}
                  onClick={nextMedia}
                  disabled={
                    currentMediaIndex === selectedProduct.media.length - 1
                  }
                >
                  →
                </button>

                <div className="image-counter">
                  {currentMediaIndex + 1} / {selectedProduct.media.length}
                </div>

                <div className="image-thumbnails">
                  {selectedProduct.media.map((mediaItem, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${
                        index === currentMediaIndex ? "active" : ""
                      }`}
                      onClick={() => goToMedia(index)}
                    >
                      {mediaItem.type === "video" ? (
                        <div className="video-thumbnail">
                          <img
                            src={mediaItem.thumbnail || mediaItem.src}
                            alt={`Miniatura video ${index + 1}`}
                          />
                          <div className="play-icon">
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={mediaItem.src}
                          alt={`Miniatura ${index + 1}`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="modal-info">
            <h3 className="modal-title">{selectedProduct.name}</h3>
            <div className="modal-description">
              {formatDescription(selectedProduct.description)}
            </div>

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
    );
  }, [
    isModalOpen,
    selectedProduct,
    currentMediaIndex,
    handleModalClick,
    closeModal,
    renderMedia,
    prevMedia,
    nextMedia,
    goToMedia,
    scrollToGallery,
    scrollToFooter,
    formatDescription,
  ]);

  const fullscreenContent = useMemo(() => {
    if (!isFullscreen || !selectedProduct) return null;

    const currentMedia = selectedProduct.media[currentMediaIndex];

    return (
      <div className="fullscreen-overlay" onClick={closeFullscreen}>
        <button className="fullscreen-close" onClick={closeFullscreen}>
          ×
        </button>
        {currentMedia.type === "video" ? (
          <video className="fullscreen-media" controls autoPlay muted>
            <source src={currentMedia.src} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        ) : (
          <img
            src={currentMedia.src}
            alt={`${selectedProduct.name} - Pantalla completa`}
            className="fullscreen-media"
          />
        )}
      </div>
    );
  }, [isFullscreen, selectedProduct, currentMediaIndex, closeFullscreen]);

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
                    src={getFirstImage(product.media)}
                    className="product-image"
                    alt={product.name}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <span className="view-details">Ver detalles</span>
                  </div>
                  {product.media.some((item) => item.type === "video") && (
                    <div className="video-badge">
                      <i className="bx bx-play-circle"></i>
                    </div>
                  )}
                </div>

                <div className="product-body">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">
                    {truncateDescription(product.description)}
                  </p>

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
