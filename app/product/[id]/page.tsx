"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Star, ShoppingCart, Truck, Shield, ChevronLeft, Utensils, Coffee, Salad } from "lucide-react";
import { getProductById, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const pairingIcons: Record<string, React.ReactNode> = {
  "Soft Cheese": <Utensils className="w-5 h-5" />,
  "Herbal Tea": <Coffee className="w-5 h-5" />,
  Sourdough: <Salad className="w-5 h-5" />,
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-xs text-stone-400">
        <Link href="/shop" className="hover:text-honey-600 flex items-center gap-1">
          <ChevronLeft className="w-3 h-3" /> Shop
        </Link>
        <span>/</span>
        <span className="text-stone-500">{product.name}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-cream-100 shadow-xl"
              style={{ background: "#FAF3E8" }}>
              {product.badge && (
                <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider badge-${product.badge}`}>
                  {product.badge}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Thumbnail row */}
            <div className="flex gap-3 mt-4">
              {[product.image, ...products.slice(0, 3).map((p) => p.image)].slice(0, 4).map((img, i) => (
                <div key={i} className={`relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${i === 0 ? "border-honey-500" : "border-transparent hover:border-honey-300"}`}>
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-honey-500 fill-honey-500" : "text-stone-200 fill-stone-200"}`} />
                ))}
              </div>
              <span className="text-sm text-stone-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <h1 className="text-4xl font-bold text-stone-800 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              {product.name}
            </h1>
            <p className="text-lg text-honey-500 mb-2" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              {product.nameNp}
            </p>

            <div className="text-3xl font-bold text-honey-700 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              रू {product.price * 130}
              <span className="text-base text-stone-400 font-normal ml-2">(${product.price})</span>
            </div>

            <blockquote className="italic text-stone-600 bg-honey-50 border-l-4 border-honey-400 pl-4 py-3 rounded-r-xl mb-6 text-sm leading-relaxed">
              "{product.description}"
            </blockquote>

            {/* Qty + Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3 border border-honey-200 rounded-full px-4 py-2 bg-white">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-stone-500 hover:text-honey-700 font-bold text-lg w-5 text-center">−</button>
                <span className="font-semibold text-stone-700 w-6 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="text-stone-500 hover:text-honey-700 font-bold text-lg w-5 text-center">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-honey py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 shadow-lg transition-all ${added ? "bg-forest-600" : ""}`}
                style={added ? { background: "#456E33" } : {}}
              >
                <ShoppingCart className="w-4 h-4" />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-honey-500" />
                Free shipping over $50
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-honey-500" />
                30-day guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Harvest Story + Flavor */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-honey-100">
            <h2 className="text-2xl font-bold text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Harvest Story
            </h2>
            <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
              <Image
                src="https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=800"
                alt="Apiary"
                fill
                className="object-cover"
              />
            </div>
            <blockquote className="italic text-stone-600 text-sm leading-relaxed border-l-3 border-honey-300 pl-4 mb-4">
              "Our {product.name} is a seasonal masterpiece, reflecting the precise botanical diversity of the summer solstice in our high-altitude meadows. Each jar is a liquid map of our mountain preserve."
            </blockquote>
            <p className="text-stone-500 text-sm leading-relaxed">
              We practice "Kind Harvesting" — leaving enough honey for the hive to thrive throughout the winter. This 100% organic, raw, and unfiltered nectar is gravity-strained to preserve the natural enzymes, antioxidants, and trace pollens that provide its signature depth.
            </p>
          </div>

          <div className="bg-honey-50 rounded-3xl p-8 border border-honey-100">
            <h2 className="text-2xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Flavor Profile & Pairing
            </h2>
            <p className="section-label mb-2">Taste Notes</p>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              Vibrant floral sweetness followed by a complex, slightly herbal finish with a buttery mouthfeel.
            </p>

            {product.pairings && (
              <div className="flex gap-3 mb-6">
                {product.pairings.map((pair) => (
                  <div key={pair} className="flex flex-col items-center gap-1 bg-white rounded-xl px-4 py-3 shadow-sm">
                    {pairingIcons[pair] || <Utensils className="w-5 h-5 text-honey-600" />}
                    <span className="text-xs text-stone-500 font-medium text-center">{pair}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Nutritional */}
            {product.calories && (
              <div>
                <h3 className="font-semibold text-stone-700 mb-4">Nutritional Facts</h3>
                <p className="text-xs text-stone-400 mb-3">Serving size: 1 Tbsp (21g)</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { val: product.calories, unit: "cal", label: "Calories" },
                    { val: product.totalFat, unit: "", label: "Total Fat" },
                    { val: product.sugars, unit: "", label: "Sugars" },
                    { val: product.sodium, unit: "", label: "Sodium" },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center bg-white rounded-xl p-3 shadow-sm">
                      <div className="font-bold text-stone-800 text-sm">{val}</div>
                      <div className="text-[10px] text-stone-400 uppercase tracking-wide">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Complements the Hive
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickView />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
