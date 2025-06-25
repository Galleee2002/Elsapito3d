import React, { useState, useEffect, useRef, useMemo } from "react";
import { Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import "./Header.css";

interface Product {
  id: number;
  name: string;
  section: string;
}

interface HeaderProps {
  onProductSelect?: (productId: number) => void;
}

const Header: React.FC<HeaderProps> = ({ onProductSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const products: Product[] = useMemo(
    () => [
      { id: 1, name: "Tarjetero para reja", section: "catalogo" },
      { id: 2, name: "Expositor encastrable", section: "catalogo" },
      { id: 3, name: "Calesita giratoria expositora", section: "catalogo" },
      { id: 4, name: "Trabajos de Precisión", section: "gallery" },
      { id: 5, name: "Diseños Únicos", section: "gallery" },
      { id: 6, name: "Materiales Premium", section: "gallery" },
      { id: 7, name: "Entregas Rápidas", section: "gallery" },
      { id: 8, name: "Satisfacción Garantizada", section: "gallery" },
    ],
    []
  );

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  }, [searchTerm, products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      let targetSection = "";

      const matchedProduct = products.find((product) =>
        product.name.toLowerCase().includes(searchLower)
      );

      if (matchedProduct) {
        if (matchedProduct.section === "catalogo" && onProductSelect) {
          onProductSelect(matchedProduct.id);
          setSearchTerm("");
          setShowDropdown(false);
          return;
        } else if (matchedProduct.section === "catalogo") {
          targetSection = "#catalogo";
        } else if (matchedProduct.section === "gallery") {
          targetSection = ".gallery-section";
        }
      } else {
        if (searchLower.includes("inicio") || searchLower.includes("home")) {
          targetSection = "#inicio";
        } else if (
          searchLower.includes("catalogo") ||
          searchLower.includes("catálogo") ||
          searchLower.includes("productos")
        ) {
          targetSection = "#catalogo";
        } else if (
          searchLower.includes("contacto") ||
          searchLower.includes("contact")
        ) {
          targetSection = "#contacto";
        } else {
          targetSection = "#catalogo";
        }
      }

      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setSearchTerm("");
      setShowDropdown(false);
    }
  };

  const handleProductSelect = (product: Product) => {
    if (product.section === "catalogo" && onProductSelect) {
      onProductSelect(product.id);
    } else {
      let targetSection = "";

      if (product.section === "catalogo") {
        targetSection = "#catalogo";
      } else if (product.section === "gallery") {
        targetSection = ".gallery-section";
      }

      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSearchTerm("");
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setSearchTerm("");
    }
  };

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <Navbar
        expand="lg"
        className="custom-navbar row px-3 px-md-4"
        variant="dark"
        fixed="top"
      >
        <div
          className="container-fluid position-relative"
          style={{ zIndex: 2 }}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler ms-auto"
          >
            <i
              className="bx bx-menu text-white"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column col-md-3 col-12 flex-lg-row">
              <Nav.Link
                href="#inicio"
                className="nav-button me-lg-3 mb-2 mb-lg-0"
              >
                <i className="bx bx-home-alt"></i>
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#catalogo"
                className="nav-button me-lg-3 mb-2 mb-lg-0"
              >
                <i className="bx bx-grid-alt"></i>
                Catálogo
              </Nav.Link>
              <Nav.Link href="#contacto" className="nav-button mb-2 mb-lg-0">
                <i className="bx bx-message-dots"></i>
                Contacto
              </Nav.Link>

              <div className="d-lg-none mt-3">
                <Form className="search-form-mobile">
                  <InputGroup>
                    <div
                      className="input-group position-relative"
                      ref={dropdownRef}
                    >
                      <i
                        className="bx bx-search search-icon"
                        onClick={handleSearch}
                        style={{
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#77bb54")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      ></i>
                      <Form.Control
                        type="search"
                        placeholder="Buscar productos o secciones..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                      {showDropdown && (
                        <div className="search-dropdown">
                          {filteredProducts.map((product) => (
                            <div
                              key={product.id}
                              className="search-dropdown-item"
                              onClick={() => handleProductSelect(product)}
                            >
                              {product.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </InputGroup>
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>

          <Form className="search-form col-3 d-none d-lg-block">
            <InputGroup>
              <div className="input-group position-relative" ref={dropdownRef}>
                <i
                  className="bx bx-search search-icon"
                  onClick={handleSearch}
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#77bb54")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                ></i>
                <Form.Control
                  type="search"
                  placeholder="Buscar productos o secciones..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {showDropdown && (
                  <div className="search-dropdown">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="search-dropdown-item"
                        onClick={() => handleProductSelect(product)}
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </InputGroup>
          </Form>
          <div className=" col-4 transparent-div"></div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
