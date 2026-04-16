import Link from "next/link";
import Image from "next/image";
import { Check, MapPin, Truck, Package, Leaf, Sprout } from "lucide-react";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Package,
    title: "The Selection",
    desc: "Our master beekeeper selects the best jars from the seasonal bloom to fulfill your order.",
  },
  {
    icon: Leaf,
    title: "Kind Harvesting",
    desc: "We ensure the hives are left with ample nectar for the winter before the final packaging begins.",
  },
  {
    icon: Sprout,
    title: "Sustainable Journey",
    desc: "Your jars are wrapped in 100% biodegradable seed-paper and shipped using carbon-neutral routes.",
  },
];

export default function OrderConfirmedPage() {
  const orderNumber = "MMP-" + Math.floor(8000 + Math.random() * 2000);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-forest-200">
              <Check className="w-4 h-4" />
              Order Confirmed
            </div>

            <h1 className="text-5xl font-bold text-stone-800 mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Harvest is
              <br />
              <span className="text-honey-600 italic">on its Way</span>
            </h1>

            <p className="text-stone-500 mb-8 leading-relaxed">
              Thank you for supporting artisanal beekeeping. Your order{" "}
              <span className="font-bold text-honey-700">#{orderNumber}</span> is being prepared
              with care in our solar-powered honey house.
            </p>

            <p className="text-sm text-stone-500 mb-2" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              माधव राज पौडेलको छत्ताबाट तपाईंको मह आउँदैछ।
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 border border-honey-100 shadow-sm">
                <Truck className="w-5 h-5 text-honey-500 mb-3" />
                <h3 className="font-semibold text-stone-700 text-sm mb-1">Estimated Delivery</h3>
                <p className="text-stone-600 text-sm font-medium">
                  {new Date(Date.now() + 3 * 86400000).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                  {" — "}
                  {new Date(Date.now() + 6 * 86400000).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
                <p className="text-[10px] text-stone-400 mt-2 uppercase tracking-wider">Tracking provided via email soon</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-honey-100 shadow-sm">
                <MapPin className="w-5 h-5 text-honey-500 mb-3" />
                <h3 className="font-semibold text-stone-700 text-sm mb-1">Shipping Address</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Thamel, Kathmandu
                  <br />
                  Bagmati Province, 44600
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <Link href="/shop"
                className="btn-honey px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg">
                Continue Shopping
              </Link>
              <Link href="#"
                className="border-2 border-honey-300 px-6 py-3 rounded-full text-honey-700 font-semibold text-sm hover:bg-honey-50 transition-colors">
                View Account
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Hero image */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
                alt="Honey jars"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-honey-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Fresh Harvest
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-honey-50 rounded-3xl p-6 border border-honey-100">
              <h2 className="font-bold text-stone-800 text-lg mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                What's Next?
              </h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-honey-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-700 text-sm">{step.title}</h3>
                      <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bee graphic */}
            <div className="bg-stone-900 rounded-3xl p-6 text-white flex items-center gap-4">
              <div className="w-16 h-16 hex-clip bg-honey-500 flex items-center justify-center text-3xl flex-shrink-0">
                🐝
              </div>
              <div>
                <h3 className="font-bold text-honey-300 text-sm mb-1">Follow the Journey</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Join our colony for weekly hive updates, blossom reports, and behind-the-scenes from the apiary.
                </p>
                <div className="flex gap-2 mt-3">
                  {["📸", "🎬", "🍀"].map((emoji, i) => (
                    <button key={i} className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-sm hover:bg-stone-700 transition-colors">
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Track Order */}
            <Link href="#"
              className="block text-center text-sm font-semibold text-honey-600 hover:text-honey-700 transition-colors py-2 border border-honey-200 rounded-full hover:bg-honey-50">
              Track Order Status
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
