import Image from "next/image";
import Link from "next/link";
import { Sprout, Scale, Users, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Sprout,
    title: "Biodiversity",
    titleNp: "जैविक विविधता",
    desc: "We manage over 500 acres of wildflower corridors, ensuring our pollinators have a diverse diet throughout the seasons while restoring local ecosystems.",
  },
  {
    icon: Scale,
    title: "Ethical Harvesting",
    titleNp: "नैतिक संकलन",
    desc: "Our 'Bee-first' protocol means we only take the surplus. The health and winter stores of our colonies always come first.",
  },
  {
    icon: Users,
    title: "Community Support",
    titleNp: "सामुदायिक सहयोग",
    desc: "We invest 10% of our profits into urban apiary programs and pollinator education in local schools, fostering the next generation of keepers.",
  },
];

const keepers = [
  {
    name: "Madhav Raj Paudel",
    nameNp: "माधव राज पौडेल",
    role: "Master Apiarist & Owner",
    roleNp: "स्वामी तथा प्रमुख मौरी पालक",
    years: "30+ years",
    quote: "I don't keep bees; the bees keep me. They've taught me more about community, resilience, and the beauty of small things than any book ever could.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
  },
  {
    name: "Elena Voss",
    nameNp: "एलेना भस",
    role: "Head of Sustainability",
    roleNp: "दिगोपन प्रमुख",
    years: "12 years",
    quote: "Timing is everything. We wait for that precise moment when the nectar is fully cured by the bees' own wings — that's how you get the floral notes that sing.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  },
];

const promises = [
  { label: "100% Raw", icon: "🍯" },
  { label: "Single Estate", icon: "🌿" },
  { label: "Plastic-Free", icon: "♻️" },
  { label: "Fair Trade", icon: "🤝" },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Apiary field"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 text-white">
          <p className="section-label text-honey-300 mb-4">Established 1994</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Crafting a Legacy
            <br />
            <span className="text-honey-400 italic">of Golden Nectar</span>
          </h1>
          <p className="text-stone-300 max-w-xl leading-relaxed mb-8">
            From the pursuit of purity to the rhythm of the hive, our story is written in every golden jar.
          </p>
          <Link href="/shop"
            className="btn-honey inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold shadow-xl">
            Explore the Harvest <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Our Roots */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800"
                  alt="Honey pouring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 -right-6 bg-honey-50 border border-honey-200 rounded-2xl px-5 py-4 shadow-xl max-w-[180px]">
                <p className="text-xs italic text-stone-600 leading-relaxed">
                  "Respecting the hive is respecting life itself."
                </p>
                <p className="text-[10px] text-honey-600 font-semibold mt-1">— Madhav Raj Paudel</p>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Our Roots</p>
              <h2 className="text-4xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Three Decades of
                <br />
                <span className="text-honey-600">Pure Devotion</span>
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
                <p>
                  The journey of सफल मौरी पालन उद्योग began with Madhav Raj Paudel, a third-generation apiarist
                  whose fascination with the social intelligence of bees became a lifelong devotion. He didn't just
                  see honey as a product; he saw it as the liquid essence of a landscape.
                </p>
                <p>
                  In 1994, in the rolling hills of the Himalayan foothills, Madhav established our first sanctuary.
                  He vowed to never use synthetic treatments or over-harvest, ensuring that the bees always had
                  their winter stores first. This philosophy — patience over profit — remains our guiding light today.
                </p>
                <p>
                  We continue to use traditional methods of cold-extraction and minimal filtration, preserving the
                  delicate pollen and enzymes that give our nectar its therapeutic soul and complex terroir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spirit of the Hive */}
      <section className="py-20 bg-cream-50" style={{ background: "#FAF3E8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Our Core Philosophy</p>
          <h2 className="text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Spirit of the Hive
          </h2>
          <div className="w-16 h-0.5 bg-honey-400 mx-auto mb-14" />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, titleNp, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-8 shadow-sm border border-honey-100 text-left group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-honey-100 flex items-center justify-center mb-5 group-hover:bg-honey-200 transition-colors">
                  <Icon className="w-5 h-5 text-honey-700" />
                </div>
                <h3 className="font-bold text-stone-800 text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {title}
                </h3>
                <p className="text-xs text-honey-500 mb-3" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  {titleNp}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Keepers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-2">The Hands That Tend the Hives</p>
            <h2 className="text-4xl font-bold text-stone-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet the Keepers
            </h2>
            <p className="text-stone-500 text-sm max-w-lg">
              Our honey is brought to life by a dedicated team of master apiarists who read the wind, the rain, and the humming of the hive like an ancient language.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keepers.map((keeper) => (
              <div key={keeper.name} className="bg-honey-50 rounded-3xl p-6 border border-honey-100 flex gap-6 items-start">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <Image src={keeper.image} alt={keeper.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-stone-800 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {keeper.name}
                  </h3>
                  <p className="text-xs text-honey-500 mb-0.5" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                    {keeper.nameNp}
                  </p>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-3">
                    {keeper.role} · {keeper.years}
                  </p>
                  <blockquote className="text-stone-600 text-sm italic leading-relaxed border-l-2 border-honey-300 pl-3">
                    "{keeper.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-4 gap-4 mt-10">
            {[
              "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
              "https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=400",
              "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400",
              "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
            ].map((src, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden shadow-md ${i % 2 === 0 ? "h-52" : "h-44 mt-8"}`}>
                <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at center, #E8870A 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="w-16 h-16 hex-clip bg-honey-600 flex items-center justify-center text-2xl mx-auto mb-6">
            🍯
          </div>
          <p className="section-label text-honey-400 mb-4">Our Promise</p>
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Pledge to Purity
          </h2>
          <blockquote className="text-honey-100 text-lg italic leading-relaxed mb-10 max-w-2xl mx-auto">
            "We pledge to provide only the purest expression of the land — honey that is never heated, never blended
            with industrial sugars, and always harvested with a heart for the future of our planet."
          </blockquote>
          <div className="grid grid-cols-4 gap-4 mb-10">
            {promises.map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{icon}</span>
                <span className="text-xs text-stone-400 uppercase tracking-widest font-semibold">{label}</span>
              </div>
            ))}
          </div>
          <Link href="/shop"
            className="btn-honey inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold shadow-xl text-sm">
            Support Our Hives <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
