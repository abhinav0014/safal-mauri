"use client";

import { useState } from "react";
import { Filter, Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

const categories = [
  { value: "all", label: "All Products", labelNp: "सबै" },
  { value: "honey", label: "Honey", labelNp: "मह" },
  { value: "hive-gifts", label: "Hive Gifts", labelNp: "छत्ताका उपहार" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.nameNp.includes(search);
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Header */}
      <div className="bg-stone-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-honey-900/60 to-stone-900/80" />
        <div className="relative z-10">
          <p className="section-label text-honey-400 mb-2">Pure & Artisanal</p>
          <h1 className="text-5xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Collection
          </h1>
          <p className="text-stone-300 text-sm" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            हाम्रो संग्रह — माधव राज पौडेलको छत्ताबाट
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-start sm:items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-honey-600 text-white shadow-md"
                    : "bg-white text-stone-600 border border-honey-200 hover:border-honey-400"
                }`}
              >
                {cat.label}
                <span className="ml-1.5 text-[10px] opacity-70" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  {cat.labelNp}
                </span>
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-full border border-honey-200 bg-white text-sm text-stone-700 focus:outline-none focus:border-honey-500 w-56"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} showQuickView />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
