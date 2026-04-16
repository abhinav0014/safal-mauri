import Link from "next/link";
import { Hexagon, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Hexagon className="w-10 h-10 text-honey-400 fill-honey-900/50" strokeWidth={1.5} />
                <span className="absolute text-sm font-bold text-honey-300">म</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-honey-300" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  सफल मौरी पालन उद्योग
                </div>
                <div className="text-[10px] text-stone-500 tracking-widest uppercase">Since 1994</div>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              Dedicated to preserving the pristine flavors of highland meadows, mountain flowers, and Himalayan herb gardens.
            </p>
            <p className="text-xs text-honey-400 italic" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              स्वामी: माधव राज पौडेल
            </p>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-honey-700 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Shop", "Our Story", "Sustainability", "Beekeeping", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-stone-400 hover:text-honey-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Our Honey</h4>
            <ul className="space-y-2">
              {["Raw Forest Honey", "Wildflower Blossom", "Ginger Infused", "Ceylon Cinnamon", "Bee Pollen", "Beeswax"].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-sm text-stone-400 hover:text-honey-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Newsletter</h4>
            <p className="text-sm text-stone-400 mb-4 leading-relaxed">
              Get seasonal harvest updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-honey-500"
              />
              <button className="btn-honey px-4 py-2 text-sm text-white rounded-lg font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © 2024 सफल मौरी पालन उद्योग. Madhav Raj Paudel. Harvested with Respect.
          </p>
          <div className="flex gap-6">
            {["Sustainability", "Shipping & Returns", "Privacy Policy", "Wholesale"].map((item) => (
              <Link key={item} href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
