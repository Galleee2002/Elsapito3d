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
  background: url("/public/img/background.jpg") center/cover fixed no-repeat;
  position: relative;
  padding-top: 70px;
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
    background-attachment: scroll;
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

.animate-logo {
  animation: fadeInScale 1.2s ease-out 0.6s both;
}

.animate-title {
  animation: fadeInUp 1.2s ease-out 0.7s both;
}

.animate-subtitle {
  animation: fadeInUp 1.2s ease-out 0.7s both;
}

.animate-buttons {
  animation: fadeInScale 1.2s ease-out 0.8s both;
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
  padding: 120px 0 80px 0;
  background: transparent;
  position: relative;
  margin-top: 20px;
}

.catalog-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(119, 187, 84, 0.1) 0%,
    rgba(76, 175, 80, 0.05) 100%
  );
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
  border-radius: 50px 50px 0 0;
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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #77bb54;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.catalog-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #000000b3;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card-wrapper {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: translateX(-50px);
}

.product-card-wrapper.animate-slide-in {
  opacity: 1;
  transform: translateX(0);
}

.product-card {
  border: none;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: rgba(119, 187, 84, 0.4);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.6);
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
  background: rgba(119, 187, 84, 0.5);
  border-color: rgba(255, 255, 255, 0.3);
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
  inset: 0;
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
  background: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: clamp(1.3rem, 2.5vw, 1.3rem);
  font-weight: bold;
  color: #ffff;
  margin-bottom: 0.8rem;
  line-height: 1.3;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
}

.product-description {
  color: #ffff;
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  line-height: 1.5;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  flex: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.product-price {
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: bold;
  color: #000000b3;
}

.video-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  border-radius: 50%;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
  z-index: 3;
}

.modal-overlay {
  position: fixed;
  inset: 0;
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
  background: rgba(119, 187, 84, 0.6);
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
  color: #9b9a9a;
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

.modal-media {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 15px;
  transition: opacity 0.3s ease;
  cursor: zoom-in;
}

.modal-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fullscreen-overlay {
  position: fixed;
  inset: 0;
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

.fullscreen-media {
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

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.modal-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  color: #ffff;
  margin: 0;
}

.modal-description {
  color: #ffff;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  margin: 0;
}

.description-line {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.description-line:last-child {
  margin-bottom: 0;
}

.modal-details {
  background: rgba(119, 187, 84, 0.6);
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
  color: #ffff;
}

.detail-value {
  color: black;
  text-align: right;
}

.detail-value.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
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
  color: black;
  border: 2px solid #77bb54;
}

.quote-btn:hover {
  background: #77bb54;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .catalog-section {
    padding: 100px 0 60px 0;
    margin-top: 15px;
  }

  .products-grid {
    gap: 1.5rem;
  }

  .product-card-wrapper {
    transform: translateX(-30px);
  }

  .product-image-container {
    height: 200px;
  }

  .product-body {
    padding: 1.2rem;
  }

  .modal-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    max-height: 95vh;
  }

  .modal-media {
    height: 250px;
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

  .description-line {
    margin-bottom: 0.4rem;
    font-size: clamp(0.9rem, 2.2vw, 1rem);
  }

  .video-badge {
    top: 10px;
    right: 10px;
    padding: 6px;
    font-size: 1.2rem;
  }

  .play-icon {
    width: 18px;
    height: 18px;
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .catalog-section {
    padding: 80px 0 60px 0;
    margin-top: 10px;
  }

  .catalog-section::before {
    border-radius: 30px 30px 0 0;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
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

  .modal-media {
    height: 200px;
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

  .fullscreen-media {
    max-width: 98vw;
    max-height: 98vh;
  }

  .description-line {
    margin-bottom: 0.3rem;
    font-size: clamp(0.85rem, 2vw, 0.95rem);
  }

  .video-badge {
    top: 8px;
    right: 8px;
    padding: 5px;
    font-size: 1rem;
  }

  .play-icon {
    width: 16px;
    height: 16px;
    font-size: 0.6rem;
  }
}

@media (max-width: 350px) {
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

  .description-line {
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-card-wrapper,
  .product-card,
  .product-image,
  .image-overlay,
  .nav-arrow,
  .thumbnail {
    transition: none;
  }

  .modal-overlay,
  .modal-content,
  .fullscreen-overlay,
  .fullscreen-media {
    animation: none;
  }

  .product-card-wrapper {
    opacity: 1;
    transform: none;
  }
}

```

## src\components\Catalog.tsx

```
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

```

## src\components\Footer.css

```
.footer-section {
  background: linear-gradient(135deg, rgba(119, 187, 84, 0.9) 0%, rgba(76, 175, 80, 0.9) 100%);
  padding: 60px 0 20px;
  position: relative;
  overflow: hidden;
}

.footer-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 15% 30%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 85% 70%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
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
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
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

.text-showroom {
  text-align: center;
  color: white;
  padding-top: 20px;
}

.footer-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.5rem;
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
  background: linear-gradient(45deg, rgba(240, 148, 51, 0.8) 0%, rgba(230, 104, 60, 0.8) 25%, rgba(220, 39, 67, 0.8) 50%, rgba(204, 35, 102, 0.8) 75%, rgba(188, 24, 136, 0.8) 100%);
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
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
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
  font-size: clamp(0.95rem, 2vw, 1rem);
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
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
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
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
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
    margin-bottom: 1rem;
  }

  .footer-title i {
    font-size: 1.3rem;
  }

  .footer-text {
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
}

@media (max-width: 480px) {
  .footer-card {
    padding: 1rem;
  }

  .footer-title {
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
    flex-direction: column;
    gap: 0.3rem;
  }

  .info-item h6 {
    justify-content: center;
  }

  .info-item p {
    text-align: center;
  }
}
```

## src\components\Footer.tsx

```
import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/elsapito.3d", "_blank");
  }, []);

  return (
    <footer id="contacto" className="footer-section">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-map" />
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
                />
              </div>
              <div className="text-showroom">
                <p>
                  Retiro presencial en @BunnyClubShowroom Maipú 484 Galeria
                  Maipú Local 24- Horarios: Lunes a Viernes de 14hs a 19hs y
                  Sábados de 10hs a 13hs
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx  bx-cart"></i>
                Hace tu pedido
              </h4>
              <div className="footer-text">
                <p>¿Cómo comprar?</p>
                <ol className="footer-list">
                  <li> 1 - Elegí el producto que te guste del catálogo.</li>
                  <li>
                    2 - Tené en cuenta la cantidad que querés y el color
                    disponible.
                  </li>
                  <li>
                    3 - Una vez elegido, escribinos por mensaje privado en
                    Instagram para coordinar tu pedido.
                  </li>
                </ol>
              </div>
              <Button
                className="instagram-footer-button"
                onClick={handleInstagramClick}
              >
                <i className="bx bxl-instagram" />
                Solictar cotización
              </Button>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <div className="footer-card">
              <h4 className="footer-title">
                <i className="bx bx-info-circle" />
                Información de Compra
              </h4>
              <div className="info-section">
                <div className="info-item">
                  <h6>
                    <i className="bx bx-truck" /> Envíos
                  </h6>
                  <p>• Envíos a todo el país</p>
                  <p>• Por Correo Argentino a cargo del comprador</p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-credit-card" /> Formas de Pago
                  </h6>
                  <p>
                    • Transferencia bancaria
                    <br />
                    • MercadoPago
                    <br />• Efectivo (solo CABA - BunnyClubShowroom)
                  </p>
                </div>
                <div className="info-item">
                  <h6>
                    <i className="bx bx-time" /> Proceso
                  </h6>
                  <p>
                    • Cotización gratuita
                    <br />
                    • Tiempo de producción: 10-15 días
                    <br />• Atención posventa via Instagram
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
  inset: 0;
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
  background: rgba(119, 187, 84, 0.4);
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
  background: rgba(119, 187, 84, 0.5);
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
  object-position: center 65%;
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
  inset: 0;
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
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInUp 0.6s ease-out 0.2s both;
  transition: color 0.3s ease;
}

.gallery-description {
  font-size: clamp(1rem, 4vw, 2rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  animation: slideInUp 0.6s ease-out 0.4s both;
  transition: color 0.3s ease;
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
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 1.5rem;
  padding: 0 15px;
  max-width: 100%;
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
  flex-shrink: 0;
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

  .indicator {
    width: 20px;
    height: 20px;
  }

  .gallery-indicators {
    gap: 12px;
    margin-top: 1.5rem;
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

  .indicator {
    width: 18px;
    height: 18px;
  }

  .gallery-indicators {
    gap: 10px;
    margin-top: 1rem;
    padding: 0 10px;
  }
}

@media (max-width: 320px) {
  .gallery-indicators {
    gap: 8px;
    padding: 0 8px;
  }

  .indicator {
    width: 16px;
    height: 16px;
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

  .indicator,
  .gallery-container,
  .gallery-arrow {
    transition: none;
  }
}

```

## src\components\Gallery.tsx

```
import React, { useState, useCallback, useMemo } from "react";
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

  const galleryItems: GalleryItem[] = useMemo(
    () => [
      {
        id: 22,
        image: "blanco.jpg",
        title: "Colores disponibles",
        description: "Blanco",
        color: "#ffff",
      },
      {
        id: 20,
        image: "crema.jpg",
        title: "Colores disponibles",
        description: "Crema",
        color: "#FFFFD0",
      },
      {
        id: 12,
        image: "amarillo.jpg",
        title: "Colores disponibles",
        description: "Amarillo",
        color: "#FFFF00",
      },
      {
        id: 8,
        image: "oro.jpg",
        title: "Colores disponibles",
        description: "Oro",
        color: "#FFDF00",
      },
      {
        id: 19,
        image: "dorado.jpg",
        title: "Colores disponibles",
        description: "Dorado",
        color: "#EFBF04",
      },
      {
        id: 2,
        image: "rojoanaranjado.jpg",
        title: "Colores disponibles",
        description: "Naranja",
        color: "#C93C20",
      },
      {
        id: 3,
        image: "rojo.jpg",
        title: "Colores disponibles",
        description: "Rojo",
        color: "#FF6B6B",
      },
      {
        id: 14,
        image: "rosa.jpg",
        title: "Colores disponibles",
        description: "Rosa",
        color: "#FFC0CB",
      },
      {
        id: 15,
        image: "rosagold.jpg",
        title: "Colores disponibles",
        description: "Rosa Oro",
        color: "#B76E79",
      },
      {
        id: 10,
        image: "fucsia.jpg",
        title: "Colores disponibles",
        description: "Fucsia",
        color: "#FF00FF",
      },
      {
        id: 11,
        image: "violeta.jpg",
        title: "Colores disponibles",
        description: "Violeta",
        color: "#8F00FF",
      },
      {
        id: 16,
        image: "violetapastel.jpg",
        title: "Colores disponibles",
        description: "Violeta Pastel",
        color: "#C3B1E1",
      },
      {
        id: 6,
        image: "azul.jpg",
        title: "Colores disponibles",
        description: "Azul",
        color: "#00446A",
      },
      {
        id: 4,
        image: "celestepastel.jpg",
        title: "Colores disponibles",
        description: "Azul pastel",
        color: "#45B7D1",
      },
      {
        id: 18,
        image: "verdemanzana.jpg",
        title: "Colores disponibles",
        description: "Verde manzana",
        color: "#8db600",
      },
      {
        id: 1,
        image: "/verde.jpg",
        title: "Colores disponibles",
        description: "Verde",
        color: "#77bb54",
      },
      {
        id: 21,
        image: "verdepastel.jpg",
        title: "Colores disponibles",
        description: "Verde pastel",
        color: "#80EF80",
      },
      {
        id: 13,
        image: "marronclarito.jpg",
        title: "Colores disponibles",
        description: "Marron Claro",
        color: "#964B00",
      },
      {
        id: 7,
        image: "marron.jpg",
        title: "Colores disponibles",
        description: "Marron Oscuro",
        color: "#895129",
      },
      {
        id: 17,
        image: "grisplata.jpg",
        title: "Colores disponibles",
        description: "Gris",
        color: "#808080",
      },
      {
        id: 9,
        image: "negro.jpg",
        title: "Colores disponibles",
        description: "Negro",
        color: "#000",
      },
      {
        id: 5,
        image: "cristal.jpg",
        title: "Colores disponibles",
        description: "Cristal",
        color: "#a5e3e0",
      },
    ],
    []
  );

  const currentItem = galleryItems[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  }, [galleryItems.length]);

  const indicators = useMemo(
    () =>
      galleryItems.map((item, index) => (
        <button
          key={index}
          className={`indicator ${index === currentIndex ? "active" : ""}`}
          onClick={() => goToSlide(index)}
          style={{ backgroundColor: item.color }}
        />
      )),
    [galleryItems, currentIndex, goToSlide]
  );

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
                  loading="lazy"
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

              <div className="gallery-content">
                <h3 className="gallery-title" style={{ color: "white" }}>
                  {currentItem.title}
                </h3>
                <p
                  className="gallery-description"
                  style={{ color: currentItem.color }}
                >
                  {currentItem.description}
                </p>
              </div>

              <div className="gallery-indicators">{indicators}</div>
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
.custom-navbar {
  background-color: #77bb54 !important;
  padding: 1rem 0;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  min-height: 70px;
  z-index: 1050;
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

.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  margin-top: 5px;
  max-height: 200px;
  overflow-y: auto;
}

.search-dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: #2c3e50;
  font-weight: 600;
}

.search-dropdown-item:hover {
  background: rgba(119, 187, 84, 0.1);
  color: #77bb54;
}

.search-dropdown-item:last-child {
  border-bottom: none;
}

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
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
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
      if (matchedProduct.section === "catalogo" && onProductSelect) {
        onProductSelect(matchedProduct.id);
        setSearchTerm("");
        setShowDropdown(false);
        return;
      } else if (matchedProduct.section === "catalogo") {
        scrollToSection("#catalogo");
      } else if (matchedProduct.section === "gallery") {
        scrollToSection(".gallery-section");
      }
    } else {
      let targetSection = "#catalogo";
      
      if (searchLower.includes("inicio") || searchLower.includes("home")) {
        targetSection = "#inicio";
      } else if (searchLower.includes("contacto") || searchLower.includes("contact")) {
        targetSection = "#contacto";
      }
      
      scrollToSection(targetSection);
    }
    
    setSearchTerm("");
    setShowDropdown(false);
  }, [searchTerm, products, onProductSelect, scrollToSection]);

  const handleProductSelect = useCallback((product: Product) => {
    if (product.section === "catalogo" && onProductSelect) {
      onProductSelect(product.id);
    } else {
      const targetSection = product.section === "catalogo" ? "#catalogo" : ".gallery-section";
      scrollToSection(targetSection);
    }
    setSearchTerm("");
    setShowDropdown(false);
  }, [onProductSelect, scrollToSection]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setSearchTerm("");
    }
  }, [handleSearch]);

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
          </div>
        ))}
      </div>
    );
  }, [showDropdown, filteredProducts, handleProductSelect]);

  const searchForm = useMemo(() => (
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
  ), [searchTerm, handleKeyDown, handleSearch, searchDropdown]);

  const mobileSearchForm = useMemo(() => (
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
  ), [searchTerm, handleKeyDown, handleSearch, searchDropdown]);

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
  inset: 0;
  background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
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
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: -5px;
}

.logo-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 300;
  letter-spacing: 4px;
  opacity: 0.9;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  margin-bottom: 1rem !important;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.3rem);
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
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  border-color: #e1306c;
}

@media (max-width: 768px) {
  .logo-container {
    margin-top: 2rem !important;
    margin-bottom: 0rem !important;
  }

  .logo-image {
    width: 200px;
    height: 200px;
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
import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import "./animations.css";

const HeroSection = () => {
  const scrollToSection = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleCatalogClick = useCallback(
    () => scrollToSection("#catalogo"),
    [scrollToSection]
  );
  const handleShippingClick = useCallback(
    () => scrollToSection("#contacto"),
    [scrollToSection]
  );

  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/elsapito.3d", "_blank");
  }, []);

  return (
    <Container fluid className="hero-section" id="inicio">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col lg={8} md={10} xs={12} className="text-center">
            <div className="logo-container animate-logo">
              <div className="logo-circle">
                <img
                  src="/img/logo.png"
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
                  onClick={handleCatalogClick}
                >
                  <i className="bx bx-grid-alt" />
                  Ver catálogo
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button secondary-button me-2 me-md-3 mb-2 mb-md-0"
                  onClick={handleShippingClick}
                >
                  <i className="bx bx-package" />
                  Envíos
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="hero-button instagram-button"
                  onClick={handleInstagramClick}
                >
                  <i className="bx bxl-instagram" />
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

