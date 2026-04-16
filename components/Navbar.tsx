"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X, Hexagon } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/shop", label: "Shop", labelNp: "पसल" },
  { href: "/shop#varieties", label: "Varieties", labelNp: "किसिमहरू" },
  { href: "/our-story", label: "Our Story", labelNp: "हाम्रो कथा" },
  { href: "/shop#beekeeping", label: "Beekeeping", labelNp: "मौरीपालन" },
];

export default function Navbar() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-honey-200/50"
      style={{ background: "rgba(253,250,245,0.95)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <Hexagon className="w-9 h-9 text-honey-600 fill-honey-100 group-hover:fill-honey-200 transition-colors" strokeWidth={1.5} />
              <span className="absolute text-xs font-bold text-honey-700" style={{ fontFamily: "Playfair Display" }}>म</span>
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold text-honey-700 tracking-wide"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                सफल मौरी पालन
              </div>
              <div className="text-[10px] text-honey-500 tracking-widest uppercase">उद्योग</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-honey-700 transition-colors relative group"
                style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.03em" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-honey-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/cart" className="relative p-2 text-stone-600 hover:text-honey-700 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-honey-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
            <Link href="#" className="p-2 text-stone-600 hover:text-honey-700 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-honey-100 px-4 py-4 space-y-3"
          style={{ background: "#FAF3E8" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between py-2 text-stone-700 border-b border-honey-100"
              onClick={() => setMenuOpen(false)}
            >
              <span style={{ fontFamily: "'Lato', sans-serif" }}>{link.label}</span>
              <span className="text-xs text-honey-500" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                {link.labelNp}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
