import React, { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Catalog from "./components/Catalog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const catalogRef = useRef<any>(null);

  const handleProductSelect = (productId: number) => {
    if (catalogRef.current) {
      catalogRef.current.openProductModal(productId);
    }
  };

  return (
    <div className="App">
      <Header onProductSelect={handleProductSelect} />
      <HeroSection />
      <Catalog ref={catalogRef} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
