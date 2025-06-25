# Código del Proyecto

## src\App.css

```
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Fredoka", sans-serif !important;
  font-weight: 700 !important;
  overflow-x: hidden !important;
}

.App {
  min-height: 100vh;
  background: url("/public/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}
.App::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 10% 20%,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 50%
    );
  pointer-events: none;
}

@media (max-width: 768px) {
  .App {
    background: url("/public/background.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
}

```

## src\App.test.tsx

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

## src\App.tsx

```
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Catalog from "./components/Catalog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Catalog />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

```

## src\components\animations.css

```
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-logo {
  animation: fadeInScale 1.2s ease-out 0.6s;
  animation-fill-mode: both;
  opacity: 0;
}

.animate-title {
  animation: fadeInUp 1.2s ease-out 0.7s;
  animation-fill-mode: both;
  opacity: 0;
}

.animate-subtitle {
  animation: fadeInUp 1.2s ease-out 0.7s;
  animation-fill-mode: both;
  opacity: 0;
}

.animate-buttons {
  animation: fadeInScale 1.2s ease-out 0.8s;
  animation-fill-mode: both;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .animate-logo,
  .animate-title,
  .animate-subtitle,
  .animate-buttons {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

```

## src\components\Catalog.css

```
.catalog-section {
  min-height: 100vh;
  padding: 80px 0;
  background: linear-gradient(
    135deg,
    rgba(119, 187, 84, 0.1) 0%,
    rgba(76, 175, 80, 0.05) 100%
  );
  position: relative;
}

.catalog-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 15% 30%,
      rgba(119, 187, 84, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(119, 187, 84, 0.1) 2px,
      transparent 2px
    );
  background-size: 40px 40px;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.catalog-title {
  font-size: 3rem;
  font-weight: bold;
  color: #77bb54;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.catalog-subtitle {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.product-card-wrapper {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card-wrapper.animate-slide-in {
  opacity: 1;
  transform: translateX(0);
}

.product-card {
  border: none;
  border-radius: 20px;
  overflow: visible;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.product-image-container {
  position: relative;
  overflow: hidden;
  height: 250px;
  border-radius: 20px 20px 0 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .image-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.product-body {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  line-height: 1.3;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.product-description {
  color: #34495e;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);
  flex: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  position: relative;
}

.product-price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #333;
}

.modal-image-container {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  transition: opacity 0.3s ease;
  cursor: zoom-in;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: zoom-out;
  animation: fadeIn 0.3s ease;
}

.fullscreen-close {
  position: absolute;
  top: 20px;
  right: 30px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
}

.fullscreen-close:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.fullscreen-image {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 5;
}

.nav-arrow:hover:not(.disabled) {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.nav-arrow.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-arrow-left {
  left: 15px;
}

.nav-arrow-right {
  right: 15px;
}

.image-counter {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.image-thumbnails {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.thumbnail {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.6;
  position: relative;
}

.thumbnail:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

.thumbnail.active {
  opacity: 1;
  border: 2px solid #77bb54;
  transform: scale(1.1);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
}

.modal-description {
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.modal-details {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 600;
  color: #2c3e50;
}

.detail-value {
  color: #77bb54;
  text-align: right;
}

.detail-value.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #77bb54;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.contact-btn,
.quote-btn {
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-btn {
  background: linear-gradient(135deg, #77bb54 0%, #4caf50 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(119, 187, 84, 0.3);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(119, 187, 84, 0.4);
}

.quote-btn {
  background: rgba(255, 255, 255, 0.8);
  color: #2c3e50;
  border: 2px solid #77bb54;
}

.quote-btn:hover {
  background: #77bb54;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .catalog-title {
    font-size: 2.2rem;
  }

  .catalog-subtitle {
    font-size: 1.1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .product-card-wrapper {
    transform: translateX(-50px);
  }

  .product-image-container {
    height: 200px;
  }

  .product-body {
    padding: 1.2rem;
  }

  .product-title {
    font-size: 1.2rem;
  }

  .product-description {
    font-size: 0.9rem;
  }

  .product-price {
    font-size: 1.2rem;
  }

  .modal-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    max-height: 95vh;
  }

  .modal-image {
    height: 250px;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-description {
    font-size: 1rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .nav-arrow-left {
    left: 10px;
  }

  .nav-arrow-right {
    right: 10px;
  }

  .image-thumbnails {
    bottom: -50px;
    gap: 6px;
    padding: 8px;
  }

  .thumbnail {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .catalog-section {
    padding: 60px 0;
  }

  .catalog-title {
    font-size: 1.8rem;
  }

  .container {
    padding: 0 15px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .product-card-wrapper {
    transform: translateX(-30px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .product-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .modal-overlay {
    padding: 10px;
  }

  .modal-content {
    padding: 1rem;
    border-radius: 15px;
  }

  .modal-close {
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
  }

  .modal-image {
    height: 200px;
  }

  .modal-title {
    font-size: 1.3rem;
  }

  .modal-description {
    font-size: 0.95rem;
  }

  .modal-details {
    padding: 1rem;
  }

  .detail-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .detail-value {
    text-align: left;
  }

  .nav-arrow {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }

  .nav-arrow-left {
    left: 5px;
  }

  .nav-arrow-right {
    right: 5px;
  }

  .image-counter {
    bottom: 10px;
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .image-thumbnails {
    bottom: -45px;
    gap: 4px;
    padding: 6px;
  }

  .thumbnail {
    width: 30px;
    height: 30px;
  }
  .fullscreen-close {
    top: 15px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .fullscreen-image {
    max-width: 98vw;
    max-height: 98vh;
  }
}

@media (max-width: 350px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .contact-btn,
  .quote-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .nav-arrow {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }

  .image-thumbnails {
    flex-wrap: wrap;
    max-width: 90%;
  }

  .thumbnail {
    width: 25px;
    height: 25px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-card-wrapper {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .product-card {
    transition: none;
  }

  .product-image {
    transition: none;
  }

  .modal-overlay {
    animation: none;
  }

  .modal-content {
    animation: none;
  }

  .image-overlay {
    transition: none;
  }

  .nav-arrow {
    transition: none;
  }

  .thumbnail {
    transition: none;
  }

  .fullscreen-overlay {
    animation: none;
  }

  .fullscreen-image {
    animation: none;
  }
}

```

## src\components\Catalog.tsx

```
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Catalog.css";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  colors: string[];
  price: string;
  details: {
    materials: string[];
    dimensions: string;
    printTime: string;
    difficulty: string;
  };
}

const Catalog = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Figura de Acción Personalizada",
      description:
        "Crea tu propia figura de acción con detalles únicos y acabados profesionales. Perfecta para coleccionistas y entusiastas del modelado 3D.",
      images: [
        "/tarjetero.jpg",
        "/api/placeholder/400/300",
        "/api/placeholder/400/280",
        "/api/placeholder/400/320",
      ],
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
      price: "$25.000",
      details: {
        materials: ["PLA", "PETG", "Resina"],
        dimensions: "15cm x 8cm x 5cm",
        printTime: "4-6 horas",
        difficulty: "Intermedio",
      },
    },
    {
      id: 2,
      name: "Miniatura Arquitectónica",
      description:
        "Modelos a escala de edificios y estructuras con precisión milimétrica. Ideal para arquitectos, diseñadores y maquetistas profesionales.",
      images: [
        "/api/placeholder/300/250",
        "/api/placeholder/400/290",
        "/api/placeholder/400/310",
      ],
      colors: ["#FECA57", "#FF9FF3", "#54A0FF", "#5F27CD"],
      price: "$35.000",
      details: {
        materials: ["PLA", "ABS"],
        dimensions: "20cm x 15cm x 12cm",
        printTime: "8-12 horas",
        difficulty: "Avanzado",
      },
    },
    {
      id: 3,
      name: "Prototipo Funcional",
      description:
        "Prototipos para pruebas de concepto y desarrollo de productos. Perfecto para ingenieros y desarrolladores que necesitan validar sus diseños.",
      images: [
        "/api/placeholder/300/250",
        "/api/placeholder/400/300",
        "/api/placeholder/400/280",
        "/api/placeholder/400/320",
        "/api/placeholder/400/290",
      ],
      colors: ["#00D2D3", "#FF9F43", "#EE5A24", "#0984E3"],
      price: "$45.000",
      details: {
        materials: ["PETG", "TPU", "Nylon"],
        dimensions: "Variable",
        printTime: "6-10 horas",
        difficulty: "Profesional",
      },
    },
  ];

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
                  <span className="detail-label">Tiempo de impresión:</span>
                  <span className="detail-value">
                    {selectedProduct.details.printTime}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Dificultad:</span>
                  <span className="detail-value">
                    {selectedProduct.details.difficulty}
                  </span>
                </div>
              </div>

              <div className="modal-actions">
                <button className="contact-btn">Ver colores disponibles</button>
                <button className="quote-btn">Solicitar Cotización</button>
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
};

export default Catalog;

```

## src\components\Footer.css

```
.footer-section {
  background: linear-gradient(
    135deg,
    rgba(119, 187, 84, 0.9) 0%,
    rgba(76, 175, 80, 0.9) 100%
  );
  padding: 60px 0 20px;
  position: relative;
  overflow: hidden;
}

.footer-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 15% 30%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    );
  background-size: 40px 40px;
  pointer-events: none;
}

.footer-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.footer-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.footer-title {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.footer-title i {
  font-size: 1.5rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.map-container {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.map-container:hover {
  transform: scale(1.02);
}

.instagram-footer-button {
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: linear-gradient(
    45deg,
    rgba(240, 148, 51, 0.8) 0%,
    rgba(230, 104, 60, 0.8) 25%,
    rgba(220, 39, 67, 0.8) 50%,
    rgba(204, 35, 102, 0.8) 75%,
    rgba(188, 24, 136, 0.8) 100%
  );
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  width: 100%;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.instagram-footer-button:hover {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  border-color: #e1306c;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  color: white;
}

.info-section {
  color: rgba(255, 255, 255, 0.9);
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item h6 {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.info-item h6 i {
  font-size: 1.1rem;
}

.info-item p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.copyright {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 992px) {
  .footer-section {
    padding: 40px 0 20px;
  }

  .footer-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .footer-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .map-container iframe {
    height: 200px;
  }

  .instagram-footer-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 30px 0 15px;
  }

  .footer-card {
    padding: 1.2rem;
  }

  .footer-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .footer-title i {
    font-size: 1.3rem;
  }

  .footer-text {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .map-container iframe {
    height: 180px;
  }

  .instagram-footer-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .info-item {
    margin-bottom: 1rem;
  }

  .info-item h6 {
    font-size: 0.95rem;
  }

  .info-item p {
    font-size: 0.85rem;
  }

  .copyright {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer-card {
    padding: 1rem;
  }

  .footer-title {
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 0.3rem;
  }

  .footer-title i {
    font-size: 1.5rem;
  }

  .map-container iframe {
    height: 150px;
  }

  .instagram-footer-button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    flex-direction: column;
    gap: 0.3rem;
  }

  .info-item h6 {
    font-size: 0.9rem;
    justify-content: center;
  }

  .info-item p {
    font-size: 0.8rem;
    text-align: center;
  }
}

```

## src\components\Footer.tsx

```
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/elsapito.3d", "_blank");
  };

  return (
    <footer id="contacto" className="footer-section">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-map"></i>
                Nuestra Ubicación
              </h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.063314268396!2d-58.37941742341764!3d-34.60256045743858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacc267f767d%3A0x4f13f152ba765ad!2sMaip%C3%BA%20484%2C%20C1007%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1750878858345!5m2!1ses!2sar"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación El Sapito 3D"
                ></iframe>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bxl-instagram"></i>
                Síguenos
              </h4>
              <p className="footer-text">
                Mantente al día con nuestros últimos trabajos y novedades
              </p>
              <Button
                className="instagram-footer-button"
                onClick={handleInstagramClick}
              >
                <i className="bx bxl-instagram"></i>
                Seguir en Instagram
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-info-circle"></i>
                Información de Compra
              </h4>
              <div className="info-section">
                <div className="info-item">
                  <h6>
                    <i className="bx bx-truck"></i> Envíos
                  </h6>
                  <p>
                    • Envíos a todo el país
                    <br />
                    • CABA y GBA: 24-48hs
                    <br />• Interior: 3-7 días hábiles
                  </p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-credit-card"></i> Formas de Pago
                  </h6>
                  <p>
                    • Transferencia bancaria
                    <br />
                    • MercadoPago
                    <br />• Efectivo (solo CABA)
                  </p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-time"></i> Proceso
                  </h6>
                  <p>
                    • Cotización gratuita
                    <br />
                    • Tiempo de producción: 2-5 días
                    <br />• Confirmación por WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            <div className="footer-bottom">
              <p className="copyright">
                © 2025 El Sapito 3D. Todos los derechos reservados.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

```

## src\components\Gallery.css

```
.gallery-section {
  min-height: 80vh;
  padding: 80px 0;
  background: linear-gradient(
    135deg,
    rgba(119, 187, 84, 0.05) 0%,
    rgba(76, 175, 80, 0.02) 100%
  );
  position: relative;
  display: flex;
  align-items: center;
}

.gallery-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 30% 40%,
      rgba(119, 187, 84, 0.08) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 70% 60%,
      rgba(119, 187, 84, 0.08) 2px,
      transparent 2px
    );
  background-size: 60px 60px;
  pointer-events: none;
}

.gallery-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  text-align: center;
}

.gallery-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

.gallery-image-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 5;
}

.gallery-arrow:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.gallery-arrow-left {
  left: 20px;
}

.gallery-arrow-right {
  right: 20px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: fadeInScale 0.8s ease-out;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  pointer-events: none;
}

.gallery-content {
  padding: 1rem 0;
  transition: all 0.6s ease;
}

.gallery-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideInUp 0.6s ease-out 0.2s both;
  color: white;
}

.gallery-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  animation: slideInUp 0.6s ease-out 0.4s both;
  color: white;
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery-indicators {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
}

.indicator {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.indicator:hover {
  opacity: 1;
  transform: scale(1.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.indicator.active {
  opacity: 1;
  transform: scale(1.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 60px 0;
    min-height: 70vh;
  }

  .gallery-container {
    padding: 2rem;
    border-radius: 20px;
  }

  .gallery-image-wrapper {
    height: 300px;
    margin-bottom: 1.5rem;
  }

  .gallery-arrow {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }

  .gallery-arrow-left {
    left: 15px;
  }

  .gallery-arrow-right {
    right: 15px;
  }

  .gallery-title {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  .gallery-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .indicator {
    width: 20px;
    height: 20px;
  }

  .gallery-indicators {
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .gallery-section {
    padding: 40px 0;
  }

  .gallery-container {
    padding: 1.5rem;
    border-radius: 15px;
  }

  .gallery-image-wrapper {
    height: 250px;
    margin-bottom: 1rem;
    border-radius: 15px;
  }

  .gallery-arrow {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }

  .gallery-arrow-left {
    left: 10px;
  }

  .gallery-arrow-right {
    right: 10px;
  }

  .gallery-title {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }

  .gallery-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .indicator {
    width: 18px;
    height: 18px;
  }

  .gallery-indicators {
    gap: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-image {
    animation: none;
    transition: none;
  }

  .gallery-title,
  .gallery-description {
    animation: none;
  }

  .indicator {
    transition: none;
  }

  .gallery-container {
    transition: none;
  }

  .gallery-arrow {
    transition: none;
  }
}

```

## src\components\Gallery.tsx

```
import React, { useState } from "react";
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

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/tarjetero.jpg",
      title: "Trabajos de Precisión",
      description:
        "Cada pieza impresa con la máxima calidad y atención al detalle",
      color: "#77bb54",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Diseños Únicos",
      description:
        "Creaciones personalizadas adaptadas a tus necesidades específicas",
      color: "#4ECDC4",
    },
    {
      id: 3,
      image: "/api/placeholder/400/280",
      title: "Materiales Premium",
      description:
        "Utilizamos solo los mejores filamentos para garantizar durabilidad",
      color: "#FF6B6B",
    },
    {
      id: 4,
      image: "/api/placeholder/400/320",
      title: "Entregas Rápidas",
      description:
        "Tiempos de producción optimizados sin comprometer la calidad",
      color: "#45B7D1",
    },
    {
      id: 5,
      image: "/api/placeholder/400/290",
      title: "Satisfacción Garantizada",
      description:
        "Tu conformidad es nuestra prioridad en cada proyecto realizado",
      color: "#96CEB4",
    },
  ];

  const currentItem = galleryItems[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

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

              <div
                className="gallery-content"
                style={{ color: currentItem.color }}
              >
                <h3 className="gallery-title">{currentItem.title}</h3>
                <p className="gallery-description">{currentItem.description}</p>
              </div>

              <div className="gallery-indicators">
                {galleryItems.map((item, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

```

## src\components\Header.css

```
/* Header.css */
.custom-navbar {
  background-color: #77bb54 !important;
  padding: 1rem 0;
  position: relative;
  min-height: 70px;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 80% 50%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    );
  background-size: 30px 30px;
  z-index: 1;
}

.nav-button {
  color: white !important;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  border-radius: 8px;
  border: 2px solid #f1f11e;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white !important;
  transform: translateY(-2px);
}

.search-form {
  max-width: 600px;
  width: 100%;
}

.search-input {
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 25px !important;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  border-color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
  color: white;
}

.input-group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  font-size: 1.1rem;
}

/* Navbar toggler personalizado */
.navbar-toggler {
  border: 2px solid #f1f11e;
  border-radius: 8px;
  padding: 0.4rem;
  background-color: transparent;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(241, 241, 30, 0.25);
}

.navbar-toggler:hover {
  background-color: rgba(241, 241, 30, 0.1);
}

/* Estilos para el menu colapsable */
.search-form-mobile {
  width: 100%;
}

@media (max-width: 991px) {
  .custom-navbar {
    padding: 0.5rem 0;
  }
  .transparent-div {
    display: none;
  }
  .nav-button {
    padding: 0.6rem 1rem !important;
    font-size: 0.95rem;
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .navbar-collapse {
    background-color: rgba(119, 187, 84, 0.95);
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(241, 241, 30, 0.3);
  }

  .search-form-mobile .search-input {
    width: 100%;
  }
}

```

## src\components\Header.tsx

```
import React, { useState } from "react";
import { Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      let targetSection = "";

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

      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
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
                    <div className="input-group position-relative">
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
                        placeholder="Buscar secciones..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </InputGroup>
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>

          <Form className="search-form col-3 d-none d-lg-block">
            <InputGroup>
              <div className="input-group position-relative">
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
                  placeholder="Buscar secciones..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
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

```

## src\components\HeroSection.css

```
.hero-section {
  min-height: 80vh;
  background: transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    );
  background-size: 50px 50px;
  z-index: 1;
}

.min-vh-80 {
  min-height: 80vh;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0rem !important;
  margin-top: 4rem !important;
}

.logo-image {
  width: 280px;
  height: 280px;
  object-fit: contain;
}

.content-container {
  margin-top: 0.5rem !important;
}

.logo-text {
  text-align: center;
  color: white;
}

.logo-title {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: -5px;
}

.logo-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  opacity: 0.9;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem !important;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.hero-button {
  border: 2px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;
}

.hero-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  color: white;
  border-color: white;
}

.primary-button:hover {
  background-color: rgba(119, 187, 84, 0.8);
  border-color: #77bb54;
}

.secondary-button:hover {
  background-color: rgba(52, 152, 219, 0.8);
  border-color: #3498db;
}

.instagram-button:hover {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  border-color: #e1306c;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .logo-title {
    font-size: 2rem;
  }

  .logo-container {
    margin-top: 2rem !important;
    margin-bottom: 0rem !important;
  }

  .logo-circle {
    width: 200px;
    height: 200px;
  }

  .logo-image {
    width: 180px;
    height: 180px;
  }

  .content-container {
    margin-top: 0.3rem !important;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }

  .hero-button {
    width: 100%;
    max-width: 250px;
  }
}

```

## src\components\HeroSection.tsx

```
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import "./animations.css";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className="logo-container animate-logo">
              <div className="logo-circle">
                <img
                  src="/logo.png"
                  alt="El Sapito 3D Logo"
                  className="logo-image"
                />
              </div>
            </div>

            <div className="content-container">
              <h1 className="hero-title mb-3 animate-title">
                Servicio de impresiones 3D FDM
              </h1>

              <p className="hero-subtitle mb-4 animate-subtitle">
                Transformamos tus ideas en realidad con tecnología
                <br />
                de vanguardia y materiales de primera calidad
              </p>

              <div className="button-group animate-buttons">
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button primary-button me-2 me-md-3 mb-2 mb-md-0"
                >
                  <i className="bx bx-grid-alt"></i>
                  Ver catálogo
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button secondary-button me-2 me-md-3 mb-2 mb-md-0"
                >
                  <i className="bx bx-package"></i>
                  Envíos
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button instagram-button"
                >
                  <i className="bx bxl-instagram"></i>
                  Instagram
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroSection;

```

## src\index.css

```
body {
  margin: 0;
  font-family: "Fredoka", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
}

```

## src\index.tsx

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

## src\react-app-env.d.ts

```
/// <reference types="react-scripts" />

```

## src\reportWebVitals.ts

```
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

## src\setupTests.ts

```
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

