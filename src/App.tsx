import React, { useRef, useState, useCallback } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

interface CatalogRef {
  openProductModal: (productId: number) => void;
  filterProducts: (searchTerm: string) => void;
}

function App() {
  const catalogRef = useRef<CatalogRef>(null);
  const [searchFilter, setSearchFilter] = useState<string>("");

  const handleProductSelect = useCallback((productId: number) => {
    if (catalogRef.current) {
      catalogRef.current.openProductModal(productId);
    }
  }, []);

  const handleSearch = useCallback((searchTerm: string) => {
    setSearchFilter(searchTerm);
    if (catalogRef.current) {
      catalogRef.current.filterProducts(searchTerm);
    }
  }, []);

  return (
    <div className="App">
      <Header onProductSelect={handleProductSelect} onSearch={handleSearch} />
      <HeroSection />
      <Catalog ref={catalogRef} searchFilter={searchFilter} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
