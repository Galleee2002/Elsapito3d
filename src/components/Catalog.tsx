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
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await fetch('products.json');
      
      if (!response.ok) {
        throw new Error(`Error al cargar productos: ${response.status}`);
      }
      
      const data: Product[] = await response.json();
      setProducts(data)
    } catch (err) {
      console.error('Error loading products:', err);
    } finally {
    }
  }, []);

  useEffect(()=>{
    loadProducts()
  },[])

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
