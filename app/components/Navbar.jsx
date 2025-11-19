"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#f81a19] py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div
        className="
          relative
          max-w-[90vw] mx-auto px-8
          flex items-center justify-center
          text-white transition-all duration-500
        "
      >
        {/* BURGER (Mobile Only, Top-Left) */}
        {scrolled && (
          <button
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        )}

        {/* LOGO – Always Centered */}
        <Image
          src="/logo.png"
          alt="We Will Wok You"
          width={scrolled ? 75 : 240}
          height={scrolled ? 75 : 240}
          className={`
    transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${!scrolled ? "logo-mobile-small" : ""}
  `}
        />

        {/* DESKTOP LEFT LINKS */}
        <div
          className="hidden md:flex absolute left-0 gap-20 text-2xl tracking-wide pt-3"
          style={{ fontFamily: "var(--font-luckiest-guy)" }}
        >
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#menu" className="nav-link">What's Cooking</Link>
        </div>

        {/* DESKTOP RIGHT LINKS */}
        <div
          className="hidden md:flex absolute right-0 gap-20 text-2xl tracking-wide pt-3"
          style={{ fontFamily: "var(--font-luckiest-guy)" }}
        >
          <Link href="#find" className="nav-link">Find Us</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={`fixed inset-0 bg-[#f81a19] text-white flex flex-col items-center 
        justify-center gap-10 text-4xl h-screen
        transition-all duration-500 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
        style={{ fontFamily: "var(--font-luckiest-guy)" }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-8 text-5xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="#menu" onClick={() => setMenuOpen(false)}>What's Cooking</Link>
        <Link href="#find" onClick={() => setMenuOpen(false)}>Find Us</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

    </nav>
  );
}