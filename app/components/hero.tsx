"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "rgb(77,127,102)" }}
    >
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 sm:border-4 border-[rgb(119,187,84)]"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border-2 sm:border-4 border-[rgb(170,232,57)]"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-10 h-10 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 sm:border-4 border-[rgb(251,239,0)]"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-14 h-14 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border-2 sm:border-4 border-[rgb(77,127,102)]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 leading-tight"
            style={{ color: "rgb(251,239,0)" }}
          >
            Impresiones 3D
            <span
              className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-1 sm:mt-2"
              style={{ color: "rgb(170,232,57)" }}
            >
              De Calidad Premium
            </span>
          </h1>
          <p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium max-w-xs sm:max-w-2xl mx-auto px-2 sm:px-0"
            style={{ color: "rgb(247,224,174)" }}
          >
            Transformamos tus ideas en realidad con tecnología de vanguardia y
            materiales de primera calidad
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-2 sm:px-0">
          <Link
            href="/catalogo"
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-lg lg:text-xl rounded-full border-3 sm:border-4 border-[rgb(251,239,0)] font-bold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            style={{
              backgroundColor: "rgb(119,187,84)",
              color: "rgb(251,239,0)",
            }}
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606L20.25 7H4.105l-.15-.75A.996.996 0 0 0 3 6H1V4h2z" />
              <circle cx="10.5" cy="19.5" r="1.5" />
              <circle cx="16.5" cy="19.5" r="1.5" />
            </svg>
            Ver Catálogo
          </Link>

          <Link
            href="/envios"
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-lg lg:text-xl rounded-full border-3 sm:border-4 border-[rgb(119,187,84)] font-bold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            style={{
              backgroundColor: "rgb(170,232,57)",
              color: "rgb(77,127,102)",
            }}
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M12 6v6h4l-4 4-4-4h4z" />
            </svg>
            Envíos
          </Link>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-lg lg:text-xl rounded-full border-3 sm:border-4 border-[rgb(186,39,47)] font-bold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            style={{
              backgroundColor: "rgb(232,94,122)",
              color: "rgb(251,246,184)",
            }}
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
              <circle cx="16.806" cy="7.207" r="1.078" />
              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
            </svg>
            Instagram
          </a>
        </div>
      </div>

      <div
        className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-3 sm:border-4 border-[rgb(251,239,0)] flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: "rgb(119,187,84)" }}
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            style={{ color: "rgb(251,239,0)" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L3 9v10h6v-6h6v6h6V9l-9-7z" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          style={{ color: "rgb(170,232,57)" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 14l-8-8h16z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
