"use client";

import { motion } from "framer-motion";

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-orange-bg border border-brand-orange/25 rounded-full px-3.5 py-1 mb-3.5 font-sans text-[12.5px] font-semibold text-brand-orange">
            ✨ The Smart Space Advantage
          </div>
          <h2 className="font-display text-[clamp(1.7rem,2.8vw,2.2rem)] font-extrabold text-gray-900 mb-2.5 tracking-tight">
            Why Pay for a <span className="text-brand-orange">Larger Product</span>?
          </h2>
          <p className="font-sans text-[14.5px] text-gray-500 max-w-[500px] mx-auto mb-11 leading-relaxed">
            Our patented L-shaped pillar design moves the columns outside, giving you more room to sit, dine, and live without stretching your budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[780px] mx-auto">
          {/* Standard Pergola */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="h-full"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative text-left h-full">
              <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-red-50 text-danger flex items-center justify-center text-[13px] font-extrabold">
                ✕
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-4">Standard Pergola</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/karsilastirma2.svg"
                alt="Standard Pergola - 85% usable area"
                className="w-full object-contain mb-4 transition-transform duration-300 hover:scale-105"
              />
              {["Pillars occupy interior corners", "Limited space in corners", "Need larger size for same comfort"].map((t) => (
                <div key={t} className="flex gap-2 mb-2 font-sans text-[13px] text-gray-500 leading-snug items-start">
                  <span className="text-danger text-[11px] mt-px shrink-0">✕</span>
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Smart Space Pergola */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-full"
          >
            <div className="bg-white border-2 border-success/40 rounded-2xl p-6 relative text-left shadow-[0_8px_28px_rgba(22,163,74,0.1)] h-full">
              <div className="absolute -top-3 right-4.5 bg-success text-white px-3 py-1 rounded-full font-sans text-[11px] font-bold">
                +15% Space
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-4">Smart Space Pergola</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/karsilastirma1.svg"
                alt="Smart Space Pergola - 100% usable area"
                className="w-full object-contain mb-4 transition-transform duration-300 hover:scale-105"
              />
              {["L-shaped pillars extend outside", "Full corner utilization", "15% more usable space"].map((t) => (
                <div key={t} className="flex gap-2 mb-2 font-sans text-[13px] text-gray-500 leading-snug items-start">
                  <span className="text-success text-sm shrink-0 leading-none">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="inline-flex flex-col items-center bg-linear-to-br from-brand-orange to-brand-orange-hover rounded-[20px] py-5.5 px-10 mt-11 shadow-[0_8px_28px_rgba(232,96,10,0.28)]">
            <div className="font-sans text-[11px] text-white/75 font-semibold uppercase tracking-[0.08em]">Get More Space With</div>
            <div className="font-display text-[44px] font-extrabold text-white leading-none my-1">+15%</div>
            <div className="font-sans text-[12px] font-bold text-white uppercase tracking-widest">MORE USABLE AREA</div>
            <div className="font-sans text-[11.5px] text-white/55 mt-1.5">Less budget, smarter design, better living.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
