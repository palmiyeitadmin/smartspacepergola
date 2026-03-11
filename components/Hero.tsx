"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-100px)]">
      {/* Full-width background product image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pergola.png"
          alt="Smart Space Pergola"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay - stronger on left for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-surface-dark/90 via-surface-dark/60 to-surface-dark/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-28 relative z-10 w-full flex items-center min-h-[calc(100vh-100px)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[520px]"
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-orange rounded-full px-3.5 py-1.5 mb-5 font-sans text-[12.5px] font-semibold text-white">
            <span>⚡</span> Special Launch Offer
          </div>

          <h1 className="font-display text-[clamp(2.4rem,4.8vw,3.5rem)] font-extrabold leading-[1.1] text-white tracking-tight mb-5">
            Use your budget in a<br />
            <span className="text-brand-orange">perfect way</span>.<br />

          </h1>

          <p className="font-sans text-[16.5px] leading-relaxed text-white/70 mb-8 max-w-[480px]">
            Smart Space Pergola gives you up to{" "}
            <span className="text-white font-semibold underline decoration-brand-orange underline-offset-4">
              15% more usable interior area
            </span>{" "}
            with its patented corner design. The smart investment for your home.
          </p>

          <a href="#configurator">
            <Button className="bg-brand-orange hover:bg-brand-orange-hover hover:-translate-y-px text-white px-7 py-6 rounded-lg font-sans text-[14.5px] font-bold shadow-[0_4px_16px_rgba(232,96,10,0.27)] transition-all group">
              Configure & Buy Now
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>

          <div className="flex flex-wrap gap-5 mt-8">
            {[
              { icon: "🇩🇪", t: "German Design" },
              { icon: "🏭", t: "Powered by Palmiye" },
              { icon: "⚡", t: "Quick Installation" },
            ].map((b) => (
              <div
                key={b.t}
                className="flex items-center gap-1.5 font-sans text-[12.5px] text-white/60 font-medium"
              >
                <span className="text-sm">{b.icon}</span>
                {b.t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
