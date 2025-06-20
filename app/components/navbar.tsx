"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  onSearch?: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearch?.(value);
    },
    [onSearch]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className="w-full border-b-2 sm:border-b-4 border-[rgb(77,127,102)] shadow-lg relative z-50"
      style={{ backgroundColor: "rgb(119,187,84)" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 sm:border-3 border-[rgb(251,239,0)] flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "rgb(170,232,57)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="ElSapito3D Logo"
                  width={48} //
                  height={48}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  priority
                />
              </div>
            </Link>
            <div className="ml-2 sm:ml-4">
              <h1
                className="text-lg sm:text-xl lg:text-2xl font-bold"
                style={{ color: "rgb(251,239,0)" }}
              >
                ElSapito3D
              </h1>
            </div>
          </div>

          <div className="hidden md:block flex-1 max-w-xs lg:max-w-lg mx-4 lg:mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar productos..."
                className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border-2 sm:border-3 border-[rgb(251,239,0)] rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(170,232,57)] transition-all duration-200"
                style={{
                  backgroundColor: "rgb(247,224,174)",
                  color: "rgb(77,127,102)",
                }}
              />
              <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: "rgb(77,127,102)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link
              href="/"
              className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 text-sm sm:text-base lg:text-lg rounded-full border-2 border-[rgb(251,239,0)] font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: "rgb(170,232,57)",
                color: "rgb(77,127,102)",
              }}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 text-sm sm:text-base lg:text-lg rounded-full border-2 border-[rgb(251,239,0)] font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: "rgb(170,232,57)",
                color: "rgb(77,127,102)",
              }}
            >
              Catálogo
            </Link>
            <Link
              href="/contacto"
              className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 text-sm sm:text-base lg:text-lg rounded-full border-2 border-[rgb(251,239,0)] font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: "rgb(170,232,57)",
                color: "rgb(77,127,102)",
              }}
            >
              Contacto
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-1.5 sm:p-2 rounded-full border-2 border-[rgb(251,239,0)] transition-all duration-200"
              style={{
                backgroundColor: "rgb(170,232,57)",
                color: "rgb(77,127,102)",
              }}
              aria-label="Abrir menú"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-3 sm:pb-4">
            <div className="mb-3 sm:mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar productos..."
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-2 sm:border-3 border-[rgb(251,239,0)] rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(170,232,57)]"
                style={{
                  backgroundColor: "rgb(247,224,174)",
                  color: "rgb(77,127,102)",
                }}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border-2 border-[rgb(251,239,0)] font-semibold text-center transition-all duration-200"
                style={{
                  backgroundColor: "rgb(170,232,57)",
                  color: "rgb(77,127,102)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/catalogo"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border-2 border-[rgb(251,239,0)] font-semibold text-center transition-all duration-200"
                style={{
                  backgroundColor: "rgb(170,232,57)",
                  color: "rgb(77,127,102)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link
                href="/contacto"
                className="px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border-2 border-[rgb(251,239,0)] font-semibold text-center transition-all duration-200"
                style={{
                  backgroundColor: "rgb(170,232,57)",
                  color: "rgb(77,127,102)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
