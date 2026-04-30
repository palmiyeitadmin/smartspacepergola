"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Dining Size", price: 1490, old: 2290, save: 800, dim: "250×250 / 250×300 cm", desc: "Perfect for intimate dining spaces and balconies", fits: ["2-4 person dining table", "Side furniture", "Plant shelves"], pct: "Save 30%", image: "/images/dining_1.jpg", bestSale: false },
  { name: "Family Size", price: 2149, old: 3300, save: 1151, dim: "300×300 / 300×400 cm", desc: "The outdoor living room for the whole family", fits: ["Corner L-shaped sofa", "Coffee table", "Bookcase / cabinet"], pct: "Save 30%", image: "/images/family_1.jpeg", bestSale: true },
  { name: "Lounge Size", price: 2890, old: 4450, save: 1560, dim: "300×500 / 400×500 / 400×600 cm", desc: "Premium full-size relaxation and entertainment space", fits: ["Lounge set", "Sunbed(s)", "Outdoor kitchen area"], pct: "Save 30%", image: "/images/lounge_2.png", bestSale: false },
];

type Product = {
  name: string;
  price: number;
  old: number;
  save: number;
  dim: string;
  desc: string;
  fits: string[];
  pct: string;
  image: string;
  bestSale: boolean;
};

function SizeCard({ p }: { p: Product }) {
  return (
    <div className={`group bg-white rounded-[14px] overflow-hidden border transition-all duration-300 hover:-translate-y-1 flex flex-col h-full text-left ${p.bestSale
      ? "border-brand-orange/40 shadow-[0_4px_20px_rgba(232,96,10,0.13)] hover:shadow-[0_12px_36px_rgba(232,96,10,0.18)] ring-1 ring-brand-orange/10"
      : "border-gray-200 hover:border-brand-orange/35 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
      }`}>
      <div className="aspect-4/3 relative overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient overlay for depth */}
        {p.bestSale && (
          <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent z-1" />
        )}
        {/* Badge container */}
        <div className="absolute top-2 left-2 right-2 flex items-start justify-between z-10">
          {/* Best Sale badge - left side */}
          {p.bestSale ? (
            <div className="animate-pulse-subtle bg-linear-to-r from-brand-orange to-brand-orange-light text-white px-2.5 py-1 rounded-md font-sans text-[10.5px] font-bold shadow-[0_2px_8px_rgba(232,96,10,0.35)] flex items-center gap-1">
              🔥 Best Sale
            </div>
          ) : (
            <div />
          )}
          {/* Save % badge - right side */}
          <div className="bg-success text-white px-2.5 py-1 rounded-md font-sans text-[10.5px] font-bold">
            {p.pct}
          </div>
        </div>
      </div>
      <div className="p-4 pt-4 flex-1 flex flex-col">
        <h3 className="font-display text-[15.5px] font-bold text-gray-900 mb-1.5">{p.name}</h3>
        <div className="flex items-baseline gap-2 mb-0.5">
          <span className="font-display text-2xl font-extrabold text-brand-orange">€{p.price.toLocaleString()}</span>
          <span className="font-sans text-[12.5px] text-gray-400 line-through">€{p.old.toLocaleString()}</span>
        </div>
        <div className="font-sans text-[11.5px] text-success font-semibold mb-2.5">You save €{p.save}</div>
        <p className="font-sans text-[12.5px] text-gray-500 mb-3 leading-relaxed flex-1">{p.dim} — {p.desc}</p>

        <div className="mb-3.5">
          <div className="font-sans text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">What fits inside:</div>
          {p.fits.map((f: string) => (
            <div key={f} className="flex items-center gap-1.5 font-sans text-[12.5px] text-gray-500 mb-1">
              <span className="text-brand-orange text-[7px]">●</span>
              {f}
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          <Button variant="outline" className="w-full h-auto py-2 border-gray-200 text-gray-500 hover:text-brand-orange hover:border-brand-orange text-[12.5px] font-semibold transition-colors">
            📐 View Floor Plan
          </Button>
          <Button className="w-full h-auto py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg text-sm font-bold shadow-[0_2px_8px_rgba(232,96,10,0.15)] transition-colors">
            Select Options
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function SizeSection() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gray-50" id="sizes">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-orange-bg border border-brand-orange/20 rounded-full px-3.5 py-1 mb-3.5 font-sans text-[12.5px] font-semibold text-brand-orange">
            📐 3 Space Solutions
          </div>
          <h2 className="font-display text-[clamp(1.7rem,2.8vw,2.2rem)] font-extrabold text-gray-900 mb-2.5 tracking-tight">
            Find Your <span className="text-brand-orange">Perfect Size</span>
          </h2>
          <p className="font-sans text-sm text-gray-500 max-w-[440px] mx-auto mb-11 leading-relaxed">
            Choose the solution that fits your space and lifestyle. Every size includes the patented Smart Space advantage.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4.5 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
              className="h-full"
            >
              <SizeCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
