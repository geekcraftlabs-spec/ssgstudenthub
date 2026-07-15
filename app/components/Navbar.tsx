"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/student", label: "Student" },
    { href: "/parent", label: "Parent" },
    { href: "/teacher", label: "Teacher" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200/50 py-1" : "bg-white/80 backdrop-blur-sm border-b border-gray-200/30 py-1"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/mainlogo.png" 
                alt="Sandton School Group" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-serif text-lg md:text-2xl lg:text-3xl font-bold text-[#003057] tracking-tight truncate">Sandton School Group</span>
              <span className="text-[8px] md:text-[10px] text-gray-500 font-medium tracking-[0.15em] uppercase whitespace-nowrap">School Management Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-[#003057] border-b-2 border-[#C41230] pb-1"
                    : "text-gray-600 hover:text-[#003057] hover:border-b-2 hover:border-[#C41230] pb-1"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://sandtonschoolgroup.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C41230] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a00e27] transition whitespace-nowrap"
            >
              ← Return to Main
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer shrink-0 ml-2" aria-label="Toggle menu">
            <span className={`w-5 h-0.5 bg-[#1A2A3A] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#1A2A3A] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#1A2A3A] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-2 rounded-lg transition ${
                  pathname === link.href
                    ? "bg-[#003057] text-white"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
              <a
                href="https://sandtonschoolgroup.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-[#C41230] text-white text-center py-3 rounded-full font-semibold"
              >
                ← Return to Main
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}