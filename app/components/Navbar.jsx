"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${scrolled
      ? "h-36 bg-[#f81a19]/90 backdrop-blur-md shadow-sm"
      : "h-62 bg-transparent"}
  `}
>
      <div
  className="
    relative h-full
    max-w-[90vw] mx-auto px-8
    flex items-center justify-center
    text-white
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

  <div
  className={`
    transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]

    ${
      scrolled
        ? "scale-[0.45] -translate-y-1 md:scale-50 md:-translate-y-1"
        : "scale-[0.9] md:scale-100"
    }
  `}
>

    <Image
      src="/logo.png"
      alt="We Will Wok You"
      width={240}
      height={240}
      priority
    />
  </div>
</div>


        {/* DESKTOP LEFT LINKS */}
        <div
          className={`
  hidden md:flex absolute left-0 gap-20 pt-3
  transition-all duration-300
  ${scrolled ? "text-2xl" : "text-3xl"}
`}
          style={{ fontFamily: "var(--font-luckiest-guy)" }}
        >
          <button onClick={() => scrollTo("about")} className="nav-link cursor-pointer">
  About
</button>

<button onClick={() => scrollTo("menu")} className="nav-link cursor-pointer">
  What's Cooking
</button>
        </div>

        {/* DESKTOP RIGHT LINKS */}
        <div
          className={`hidden md:flex absolute right-0 gap-20 pt-3
  transition-all duration-300
  ${scrolled ? "text-2xl" : "text-3xl"}
`}
          style={{ fontFamily: "var(--font-luckiest-guy)" }}
        >
          <button onClick={() => scrollTo("find")} className="nav-link cursor-pointer">
  Find Us
</button>

<button onClick={() => scrollTo("contact")} className="nav-link cursor-pointer">
  Get in Touch
</button>
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

        <button
          onClick={() => {
            scrollTo("about");
            setMenuOpen(false);
          }}
        >
          About
        </button>
        
        <button
          onClick={() => {
            scrollTo("menu");
            setMenuOpen(false);
          }}
        >
          What's Cooking
        </button>
        <button
          onClick={() => {
            scrollTo("find");
            setMenuOpen(false);
          }}
        >
          Find Us
        </button>
        <button
          onClick={() => {
            scrollTo("Contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </button>
      </div>

    </nav>
  );
}