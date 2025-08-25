// components/Navbar.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-green-600">
          Semanan Premiere
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-green-500 transition">
            Beranda
          </Link>
          <Link href="/about" className="hover:text-green-500 transition">
            Tentang Kami
          </Link>
          <Link href="/gallery" className="hover:text-green-500 transition">
            Galeri
          </Link>
          <Link href="/contact" className="hover:text-green-500 transition">
            Kontak
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white shadow-md"
        >
          <Link href="/" className="block px-4 py-2 hover:bg-green-100">
            Beranda
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-green-100">
            Tentang Kami
          </Link>
          <Link href="/gallery" className="block px-4 py-2 hover:bg-green-100">
            Galeri
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-green-100">
            Kontak
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
