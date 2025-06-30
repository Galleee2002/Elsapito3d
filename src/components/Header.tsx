import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import "./Header.css";

interface Product {
  id: number;
  name: string;
  section: string;
}

interface HeaderProps {
  onProductSelect?: (productId: number) => void;
  onSearch?: (searchTerm: string) => void; // Nueva prop para manejar búsquedas
}

const Header: React.FC<HeaderProps> = ({ onProductSelect, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cargar productos desde el JSON
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error(`Error al cargar productos: ${response.status}`);
        }
        const data = await response.json();

        // Convertir los productos del JSON al formato esperado
        const formattedProducts = data.map((product: any) => ({
          id: product.id,
          name: product.name,
          section: "catalogo",
        }));

        setAllProducts(formattedProducts);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };
    loadProducts();
  }, []);

  const products: Product[] = useMemo(
    () => [
      ...allProducts, // Productos del JSON
      // Mantener las secciones existentes
      { id: 1001, name: "Trabajos de Precisión", section: "gallery" },
      { id: 1002, name: "Diseños Únicos", section: "gallery" },
      { id: 1003, name: "Materiales Premium", section: "gallery" },
      { id: 1004, name: "Entregas Rápidas", section: "gallery" },
      { id: 1005, name: "Satisfacción Garantizada", section: "gallery" },
    ],
    [allProducts]
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

  const scrollToSection = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSearch = useCallback(() => {
    if (!searchTerm.trim()) return;

    const searchLower = searchTerm.toLowerCase();
    const matchedProduct = products.find((product) =>
      product.name.toLowerCase().includes(searchLower)
    );

    if (matchedProduct) {
      if (matchedProduct.section === "catalogo") {
        // Si es un producto del catálogo, hacer scroll y filtrar
        scrollToSection("#catalogo");
        if (onSearch) {
          onSearch(searchTerm); // Enviar término de búsqueda al componente padre
        }
        if (onProductSelect) {
          onProductSelect(matchedProduct.id);
        }
      } else if (matchedProduct.section === "gallery") {
        scrollToSection(".gallery-section");
      }
    } else {
      // Si no encuentra un producto específico, buscar en el catálogo
      let targetSection = "#catalogo";

      if (searchLower.includes("inicio") || searchLower.includes("home")) {
        targetSection = "#inicio";
      } else if (
        searchLower.includes("contacto") ||
        searchLower.includes("contact")
      ) {
        targetSection = "#contacto";
      } else {
        // Por defecto, buscar en el catálogo
        if (onSearch) {
          onSearch(searchTerm);
        }
      }

      scrollToSection(targetSection);
    }

    setSearchTerm("");
    setShowDropdown(false);
  }, [searchTerm, products, onProductSelect, onSearch, scrollToSection]);

  const handleProductSelect = useCallback(
    (product: Product) => {
      if (product.section === "catalogo") {
        scrollToSection("#catalogo");
        if (onSearch) {
          onSearch(product.name); // Filtrar por el nombre del producto
        }
        if (onProductSelect) {
          onProductSelect(product.id);
        }
      } else {
        const targetSection =
          product.section === "catalogo" ? "#catalogo" : ".gallery-section";
        scrollToSection(targetSection);
      }
      setSearchTerm("");
      setShowDropdown(false);
    },
    [onProductSelect, onSearch, scrollToSection]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      } else if (e.key === "Escape") {
        setShowDropdown(false);
        setSearchTerm("");
      }
    },
    [handleSearch]
  );

  const searchDropdown = useMemo(() => {
    if (!showDropdown) return null;

    return (
      <div className="search-dropdown">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="search-dropdown-item"
            onClick={() => handleProductSelect(product)}
          >
            {product.name}
            <span className="product-section">
              {product.section === "catalogo" ? "Catálogo" : "Galería"}
            </span>
          </div>
        ))}
      </div>
    );
  }, [showDropdown, filteredProducts, handleProductSelect]);

  const searchForm = useMemo(
    () => (
      <Form className="search-form col-3 d-none d-lg-block">
        <InputGroup>
          <div className="input-group position-relative" ref={dropdownRef}>
            <i
              className="bx bx-search search-icon"
              onClick={handleSearch}
              style={{ cursor: "pointer", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#77bb54")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            />
            <Form.Control
              type="search"
              placeholder="Buscar productos o secciones..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {searchDropdown}
          </div>
        </InputGroup>
      </Form>
    ),
    [searchTerm, handleKeyDown, handleSearch, searchDropdown]
  );

  const mobileSearchForm = useMemo(
    () => (
      <div className="d-lg-none mt-3">
        <Form className="search-form-mobile">
          <InputGroup>
            <div className="input-group position-relative" ref={dropdownRef}>
              <i
                className="bx bx-search search-icon"
                onClick={handleSearch}
                style={{ cursor: "pointer", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#77bb54")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              />
              <Form.Control
                type="search"
                placeholder="Buscar productos o secciones..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {searchDropdown}
            </div>
          </InputGroup>
        </Form>
      </div>
    ),
    [searchTerm, handleKeyDown, handleSearch, searchDropdown]
  );

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
            />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column col-md-3 col-12 flex-lg-row">
              <Nav.Link
                href="#inicio"
                className="nav-button me-lg-3 mb-2 mb-lg-0"
              >
                <i className="bx bx-home-alt" />
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#catalogo"
                className="nav-button me-lg-3 mb-2 mb-lg-0"
              >
                <i className="bx bx-grid-alt" />
                Catálogo
              </Nav.Link>
              <Nav.Link href="#contacto" className="nav-button mb-2 mb-lg-0">
                <i className="bx bx-message-dots" />
                Contacto
              </Nav.Link>

              {mobileSearchForm}
            </Nav>
          </Navbar.Collapse>

          {searchForm}
          <div className="col-4 transparent-div" />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
