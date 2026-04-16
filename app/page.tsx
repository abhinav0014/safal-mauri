import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Leaf, FlaskConical, Award, Star, ArrowRight, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { getHoneyProducts, getHiveGifts } from "@/lib/products";

const badges = [
  { icon: Leaf, label: "100% Organic" },
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: Award, label: "Premium Grade" },
];

const reviews = [
  {
    text: "The wildflower honey has completely transformed my morning roti. You can truly taste the variety of blooms in every spoonful.",
    author: "Sita Sharma",
    role: "Loyal Member",
    rating: 5,
  },
  {
    text: "Packaging is sustainable and the delivery was fast. The ginger honey is my go-to whenever I'm feeling under the weather.",
    author: "Ram Thapa",
    role: "Chef & Baker",
    rating: 5,
  },
  {
    text: "It's hard to find real artisanal honey that hasn't been over-processed. This sets the gold standard.",
    author: "Priya Koirala",
    role: "Health Advocate",
    rating: 5,
  },
];

export default function HomePage() {
  const honeyProducts = getHoneyProducts();
  const hiveGifts = getHiveGifts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1600&q=80"
            alt="Honey jar hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <p className="section-label text-honey-300 mb-4">माधव राज पौडेलको उद्योग</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            शुद्ध, प्राकृतिक
            <br />
            <span className="text-honey-400 italic">मह सीधा छत्ताबाट</span>
          </h1>
          <p className="text-lg text-stone-200 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover our organic sourcing and the artisanal touch in every jar.
            <span className="block text-sm text-honey-200 mt-1" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              हाम्रो जैविक स्रोत र प्रत्येक जारमा कारीगरी स्पर्श पत्ता लगाउनुहोस्।
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop"
              className="btn-honey px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 justify-center shadow-xl">
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </Link>
            <Link href="/shop#varieties"
              className="border-2 border-white/60 hover:border-honey-400 px-8 py-4 rounded-full text-white font-semibold transition-all hover:bg-white/10 flex items-center gap-2 justify-center">
              Explore Varieties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium">
              <Icon className="w-3.5 h-3.5 text-honey-300" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section id="varieties" className="py-20 bg-cream-50" style={{ background: "#FAF3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Collections</p>
            <h2 className="text-4xl font-bold text-stone-800"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Artisanal Varieties
            </h2>
            <p className="text-stone-500 mt-2 text-sm" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              कारीगरी किसिमहरू
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {honeyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop"
              className="inline-flex items-center gap-2 text-honey-700 font-semibold hover:gap-3 transition-all">
              View All Products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GIFTS FROM THE HIVE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-2">The Harvest Beyond Honey</p>
            <h2 className="text-4xl font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Gifts from the Hive
            </h2>
            <p className="text-stone-500 mt-2 text-sm max-w-lg">
              Every element of the apiary holds unique nutritional and medicinal properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiveGifts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickView />
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 bg-cream-50" style={{ background: "#FAF3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800"
                  alt="Beekeeper"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300"
                  alt="Honey close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Our Philosophy</p>
              <h2 className="text-4xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Wisdom of
                <br />
                <span className="text-honey-600 italic">the Hive</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Since 1994, Madhav Raj Paudel's family has partnered with the most diligent workers in nature.
                We believe in minimal intervention, allowing our bees to thrive in wild, pesticide-free sanctuaries.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed mb-8" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                सन् १९९४ देखि, हाम्रो परिवारले प्रकृतिका सबैभन्दा मेहनती कामदारहरूसँग साझेदारी गरेको छ।
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "12K+", label: "Active Hives" },
                  { value: "100%", label: "Traceable Origin" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-honey-50 rounded-2xl p-5 border border-honey-100">
                    <div className="text-3xl font-bold text-honey-700" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/our-story"
                className="btn-honey inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Customer Voices</p>
            <h2 className="text-4xl font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Voices from the Garden
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-cream-50 rounded-2xl p-6 border border-honey-100"
                style={{ background: "#FAF3E8" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-honey-500 fill-honey-500" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-honey-200 flex items-center justify-center text-honey-700 font-bold text-sm">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-700">{review.author}</div>
                    <div className="text-[11px] text-stone-400">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-4 sm:mx-8 lg:mx-16 mb-16 rounded-3xl overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #7D3F0E 0%, #C96B05 50%, #E8870A 100%)" }}>
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 gap-8">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Taste the purity of nature
            </h2>
            <p className="text-honey-100 mb-6 leading-relaxed">
              Join our Honey Club and receive monthly jars of limited-harvest varieties directly from our remote apiaries.
            </p>
            <Link href="/shop"
              className="inline-block bg-white text-honey-700 px-8 py-3 rounded-full font-semibold hover:bg-honey-50 transition-colors shadow-lg">
              Order Now
            </Link>
          </div>
          <div className="relative w-64 h-48 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"
              alt="Honey jars"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
