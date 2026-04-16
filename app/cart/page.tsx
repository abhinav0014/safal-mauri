"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight, Star, Gift } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count } = useCart();

  if (items.length === 0) {
    return (
      <>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          <div className="w-24 h-24 rounded-full bg-honey-50 flex items-center justify-center mb-6 border-2 border-honey-200">
            <ShoppingBag className="w-10 h-10 text-honey-400" />
          </div>
          <h2 className="text-3xl font-bold text-stone-700 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Hive is Empty
          </h2>
          <p className="text-stone-400 mb-2">तपाईंको कार्ट खाली छ</p>
          <p className="text-stone-400 text-sm mb-8 max-w-xs">
            Discover our pure artisanal honey and hive products.
          </p>
          <Link href="/shop"
            className="btn-honey px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg">
            <ShoppingBag className="w-4 h-4" /> Start Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const shipping = total >= 50 ? 0 : 8;
  const grandTotal = total + shipping;

  return (
    <>
      {/* Header */}
      <div className="bg-cream-50 border-b border-honey-100 px-4 py-8" style={{ background: "#FAF3E8" }}>
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-1">Your Selection</p>
          <h1 className="text-4xl font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Review your Harvest
          </h1>
          <p className="text-stone-500 mt-1 text-sm">
            {count} {count === 1 ? "item" : "items"} curated for your home
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Items */}
        <div className="md:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-honey-100 flex gap-5 items-start group">
              <Link href={`/product/${product.id}`} className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-honey-50">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
                {quantity > 1 && (
                  <span className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-honey-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {quantity}x
                  </span>
                )}
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-stone-800 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-xs text-honey-500" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                      {product.nameNp}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-stone-300 hover:text-red-400 transition-colors ml-2 opacity-0 group-hover:opacity-100"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {product.weight && (
                  <p className="text-xs text-stone-400 mb-3">{product.weight}</p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 border border-honey-200 rounded-full px-3 py-1 bg-honey-50">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="text-stone-400 hover:text-honey-700 font-bold w-4 text-center leading-none"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold text-stone-700 w-5 text-center">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="text-stone-400 hover:text-honey-700 font-bold w-4 text-center leading-none"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-honey-700 text-sm">
                      रू {(product.price * quantity * 130).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-stone-400">
                      ${(product.price * quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Honey Club Upsell */}
          <div className="rounded-2xl p-6 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7D3F0E 0%, #C96B05 100%)" }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #FBC270 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div className="flex items-start gap-3 mb-3">
              <Star className="w-5 h-5 text-honey-300 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-honey-300 mb-1">Exclusive Offer</p>
                <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Join the Honey Club
                </h3>
              </div>
            </div>
            <p className="text-honey-100 text-sm mb-4 leading-relaxed">
              Save 15% on this order and get free seasonal nectar jars every month.
            </p>
            <button className="bg-white text-honey-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-honey-50 transition-colors">
              Add Membership
            </button>
          </div>

          {/* Gift note */}
          <div className="bg-white rounded-2xl p-5 border border-honey-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-stone-700 font-medium text-sm">
                <Gift className="w-4 h-4 text-honey-500" />
                Add a Gift Note
              </div>
              <button className="w-6 h-6 rounded-full border border-honey-300 flex items-center justify-center text-honey-500 text-lg leading-none hover:bg-honey-50">
                +
              </button>
            </div>
            <textarea
              rows={3}
              placeholder="Write your heartfelt message here..."
              className="w-full text-sm text-stone-600 placeholder-stone-300 bg-honey-50 rounded-xl p-3 border border-honey-100 focus:outline-none focus:border-honey-400 resize-none"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-honey-100 sticky top-24">
            <h2 className="font-bold text-stone-800 text-lg mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Order Summary
            </h2>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="font-medium">रू {(total * 130).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Shipping</span>
                <span className={`font-medium ${shipping === 0 ? "text-forest-600" : ""}`}>
                  {shipping === 0 ? "Free" : `रू ${shipping * 130}`}
                </span>
              </div>
              {total < 50 && (
                <p className="text-xs text-honey-600 bg-honey-50 rounded-lg px-3 py-2">
                  Add रू {((50 - total) * 130).toFixed(0)} more for free shipping!
                </p>
              )}
              <div className="border-t border-honey-100 pt-3 flex justify-between font-bold text-stone-800">
                <span>Total Amount</span>
                <div className="text-right">
                  <div>रू {(grandTotal * 130).toLocaleString()}</div>
                  <div className="text-xs text-stone-400 font-normal">${grandTotal.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-forest-600 mb-5">
              <span className="w-2 h-2 rounded-full bg-forest-500 inline-block" />
              Eco-friendly packaging
            </div>

            <Link href="/checkout"
              className="btn-honey w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg text-sm">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-[10px] text-stone-400 text-center mt-3 uppercase tracking-wider">
              Secure Checkout by HoneyPay
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
