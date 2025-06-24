import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
