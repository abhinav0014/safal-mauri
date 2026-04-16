"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
}

export default function ProductCard({ product, showQuickView = false }: ProductCardProps) {
  const { addItem } = useCart();

  const badgeClass = product.badge
    ? `badge-${product.badge}`
    : "";

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-honey-100 group">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-cream-50 h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-stone-800 text-sm leading-snug hover:text-honey-700 transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {product.name}
              </h3>
              <p className="text-[11px] text-honey-500 mt-0.5"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                {product.nameNp}
              </p>
            </Link>
          </div>
        </div>

        <p className="text-xs text-stone-500 line-clamp-2 mt-1 mb-3 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-honey-500 fill-honey-500" : "text-stone-200 fill-stone-200"}`}
            />
          ))}
          <span className="text-[10px] text-stone-400 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-honey-700 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
            रू {product.price * 130}
            <span className="text-xs text-stone-400 font-normal ml-1">(${product.price})</span>
          </span>
          <button
            onClick={() => addItem(product)}
            className="btn-honey w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {showQuickView && (
          <Link
            href={`/product/${product.id}`}
            className="block mt-3 text-center text-xs font-medium text-honey-600 hover:text-honey-700 transition-colors tracking-wide uppercase"
          >
            Quick View
          </Link>
        )}
      </div>
    </div>
  );
}
