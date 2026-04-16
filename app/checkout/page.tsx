"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, CreditCard, Wallet, Smartphone, Shield, Leaf, Truck } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Footer from "@/components/Footer";

type PaymentMethod = "card" | "paypal" | "esewa";

const trustBadges = [
  { icon: Shield, label: "Secure Checkout" },
  { icon: Leaf, label: "Eco-Friendly Packaging" },
  { icon: Truck, label: "Carbon Neutral Shipping" },
];

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    province: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const shippingCost = shippingMethod === "standard" ? 8 : 18.5;
  const tax = total * 0.08;
  const grandTotal = total + shippingCost + tax;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    clearCart();
    router.push("/order-confirmed");
  };

  const stepDone = (s: number) => step > s;

  return (
    <>
      {/* Header */}
      <div className="border-b border-honey-100 px-4 py-5 bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-honey-700 font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            सफल मौरी पालन उद्योग
          </Link>
          <div className="flex gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="hidden sm:flex items-center gap-1.5 text-xs text-stone-500">
                <Icon className="w-3.5 h-3.5 text-honey-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-5 gap-10">
        {/* LEFT — Form */}
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-3xl font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Final Details
          </h1>
          <p className="text-xs text-stone-400 uppercase tracking-widest">
            Secure Checkout · Handcrafted Selection
          </p>

          {/* Step 1: Shipping Address */}
          <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${step === 1 ? "border-honey-300" : "border-honey-100"}`}>
            <div className="flex items-center gap-3 px-6 py-4 border-b border-honey-100">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${stepDone(1) ? "bg-forest-500 text-white" : step === 1 ? "bg-honey-600 text-white" : "bg-honey-100 text-honey-500"}`}>
                {stepDone(1) ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <h2 className="font-semibold text-stone-700">Shipping Address</h2>
              {stepDone(1) && (
                <button onClick={() => setStep(1)} className="ml-auto text-xs text-honey-600 hover:underline">Edit</button>
              )}
            </div>

            {step === 1 && (
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "firstName", label: "First Name", placeholder: "Madhav" },
                    { name: "lastName", label: "Last Name", placeholder: "Paudel" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">{f.label}</label>
                      <input
                        name={f.name}
                        value={(form as any)[f.name]}
                        onChange={handleInput}
                        placeholder={f.placeholder}
                        className="w-full border border-honey-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-honey-500 bg-honey-50/30"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Street Address</label>
                  <input
                    name="street"
                    value={form.street}
                    onChange={handleInput}
                    placeholder="Thamel, Kathmandu"
                    className="w-full border border-honey-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-honey-500 bg-honey-50/30"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "city", label: "City", placeholder: "Kathmandu" },
                    { name: "province", label: "Province", placeholder: "Bagmati" },
                    { name: "zip", label: "ZIP Code", placeholder: "44600" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">{f.label}</label>
                      <input
                        name={f.name}
                        value={(form as any)[f.name]}
                        onChange={handleInput}
                        placeholder={f.placeholder}
                        className="w-full border border-honey-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-honey-500 bg-honey-50/30"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn-honey w-full py-3 rounded-xl text-white font-semibold mt-2"
                >
                  Continue to Shipping
                </button>
              </div>
            )}

            {stepDone(1) && (
              <div className="px-6 py-3 text-sm text-stone-600">
                {form.firstName} {form.lastName} · {form.street}, {form.city}, {form.province} {form.zip}
              </div>
            )}
          </div>

          {/* Step 2: Shipping Method */}
          <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${step === 2 ? "border-honey-300" : "border-honey-100"}`}>
            <div className="flex items-center gap-3 px-6 py-4 border-b border-honey-100">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${stepDone(2) ? "bg-forest-500 text-white" : step === 2 ? "bg-honey-600 text-white" : "bg-honey-100 text-honey-500"}`}>
                {stepDone(2) ? <Check className="w-4 h-4" /> : "2"}
              </div>
              <h2 className="font-semibold text-stone-700">Shipping Method</h2>
              {stepDone(2) && (
                <button onClick={() => setStep(2)} className="ml-auto text-xs text-honey-600 hover:underline">Edit</button>
              )}
            </div>

            {step === 2 && (
              <div className="p-6 space-y-3">
                {[
                  { id: "standard", label: "Standard Harvest Delivery", sub: "3–5 business days", price: 8 },
                  { id: "express", label: "Express Hive Express", sub: "1–2 business days", price: 18.5 },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${shippingMethod === opt.id ? "border-honey-500 bg-honey-50" : "border-honey-100 hover:border-honey-300"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${shippingMethod === opt.id ? "border-honey-600" : "border-stone-300"}`}>
                        {shippingMethod === opt.id && <div className="w-2 h-2 rounded-full bg-honey-600" />}
                      </div>
                      <div>
                        <input type="radio" className="hidden" checked={shippingMethod === opt.id} onChange={() => setShippingMethod(opt.id as any)} />
                        <div className="text-sm font-semibold text-stone-700">{opt.label}</div>
                        <div className="text-xs text-stone-400">{opt.sub}</div>
                      </div>
                    </div>
                    <span className="font-bold text-honey-700">${opt.price.toFixed(2)}</span>
                  </label>
                ))}

                <button onClick={() => setStep(3)} className="btn-honey w-full py-3 rounded-xl text-white font-semibold mt-2">
                  Continue to Payment
                </button>
              </div>
            )}
          </div>

          {/* Step 3: Payment */}
          <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${step === 3 ? "border-honey-300" : "border-honey-100"}`}>
            <div className="flex items-center gap-3 px-6 py-4 border-b border-honey-100">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${step === 3 ? "bg-honey-600 text-white" : "bg-honey-100 text-honey-500"}`}>
                3
              </div>
              <h2 className="font-semibold text-stone-700">Payment Information</h2>
            </div>

            {step === 3 && (
              <div className="p-6">
                {/* Payment tabs */}
                <div className="flex gap-3 mb-6">
                  {[
                    { id: "card", icon: CreditCard, label: "Card" },
                    { id: "paypal", icon: Wallet, label: "PayPal" },
                    { id: "esewa", icon: Smartphone, label: "eSewa" },
                  ].map(({ id, icon: Icon, label }) => (
                    <button
                      key={id}
                      onClick={() => setPaymentMethod(id as PaymentMethod)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${paymentMethod === id ? "border-honey-500 bg-honey-50 text-honey-700" : "border-honey-200 text-stone-500 hover:border-honey-300"}`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Card Number</label>
                      <div className="relative">
                        <input
                          name="cardNumber"
                          value={form.cardNumber}
                          onChange={handleInput}
                          placeholder="0000 0000 0000 0000"
                          className="w-full border border-honey-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-honey-500 bg-honey-50/30 pr-10"
                        />
                        <Shield className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Expiration (MM/YY)</label>
                        <input
                          name="expiry"
                          value={form.expiry}
                          onChange={handleInput}
                          placeholder="12/26"
                          className="w-full border border-honey-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-honey-500 bg-honey-50/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">CVV</label>
                        <input
                          name="cvv"
                          value={form.cvv}
                          onChange={handleInput}
                          placeholder="123"
                          className="w-full border border-honey-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-honey-500 bg-honey-50/30"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "esewa" && (
                  <div className="text-center py-8 text-stone-500 bg-green-50 rounded-xl border border-green-100">
                    <Smartphone className="w-10 h-10 mx-auto mb-3 text-green-500" />
                    <p className="font-medium text-green-700">eSewa Payment</p>
                    <p className="text-sm text-green-500 mt-1">You'll be redirected to eSewa to complete payment</p>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center py-8 text-stone-500 bg-blue-50 rounded-xl border border-blue-100">
                    <Wallet className="w-10 h-10 mx-auto mb-3 text-blue-500" />
                    <p className="font-medium text-blue-700">PayPal</p>
                    <p className="text-sm text-blue-400 mt-1">You'll be redirected to PayPal</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-honey w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-xl mt-6 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" />
                      Complete Purchase — रू {(grandTotal * 130).toLocaleString()}
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-stone-400 mt-3">Your harvest will be prepared with care</p>
              </div>
            )}
          </div>

          {/* Trust row */}
          <div className="flex gap-6 justify-center">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-stone-400">
                <Icon className="w-3.5 h-3.5 text-honey-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-honey-100 sticky top-24">
            <h2 className="font-bold text-stone-800 text-lg mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Order Summary
            </h2>

            <div className="space-y-4 mb-5">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 items-center">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-honey-50">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-700 truncate">{product.name}</p>
                    <p className="text-xs text-stone-400">{product.weight} · Qty {quantity}</p>
                  </div>
                  <div className="text-sm font-bold text-honey-700 flex-shrink-0">
                    ${(product.price * quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-honey-100 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Estimated Taxes</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-stone-800 pt-2 border-t border-honey-100 text-base">
                <span>Total</span>
                <span className="text-honey-700">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo */}
            <div className="mt-4 pt-4 border-t border-honey-100">
              <button className="flex items-center justify-between w-full text-sm text-stone-500 hover:text-honey-600 transition-colors">
                <span>Add Promo Code or Gift Card</span>
                <span className="text-xl font-light">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
