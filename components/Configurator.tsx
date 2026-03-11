"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Configurator() {
  const [size, setSize] = useState("family");
  const [color, setColor] = useState("black");
  const [ctrl, setCtrl] = useState("manual");
  const [zip, setZip] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const colors = [
    { id: "black", label: "Black", hex: "#1a1a1a" },
    { id: "white", label: "White", hex: "#f5f5f5" },
    { id: "gray", label: "Gray", hex: "#8B8B8B" },
  ];
  const curColor = colors.find((c) => c.id === color) || colors[0];

  const sizes = [
    { id: "balcony", label: "Balcony Size (250×250 cm)", price: 2490 },
    { id: "dining", label: "Dining Size (250×300 cm)", price: 3290 },
    { id: "family", label: "Family Size (300×300 cm)", price: 3990 },
    { id: "lounge", label: "Lounge Size (300×400 cm)", price: 4990 },
  ];
  const cur = sizes.find((s) => s.id === size) || sizes[2];
  const motorCost = ctrl === "motorized" ? 650 : 0;
  const zipCost = zip ? 690 : 0;
  const subtotal = cur.price + motorCost + zipCost;

  return (
    <section className="py-16 md:py-20 px-6 bg-white" id="configurator">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-11"
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-orange-bg border border-brand-orange/20 rounded-full px-3.5 py-1 mb-3.5 font-sans text-[12.5px] font-semibold text-brand-orange">
            ⚙️ Product Configurator
          </div>
          <h2 className="font-display text-[clamp(1.7rem,2.8vw,2.2rem)] font-extrabold text-gray-900 mb-2.5 tracking-tight">
            Configure Your <span className="text-brand-orange">Perfect Pergola</span>
          </h2>
          <p className="font-sans text-[14px] text-gray-500 max-w-[420px] mx-auto leading-relaxed">
            Customize every detail and see your price update in real-time. Buy directly with confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
          >
            {/* Step 1 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[26px] h-[26px] rounded-full bg-brand-orange text-white flex items-center justify-center font-sans text-[13px] font-bold">1</div>
                <h3 className="font-display text-base font-bold text-gray-900 m-0">Choose Your Size</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {sizes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s.id)}
                    className={`relative rounded-xl p-3.5 text-left transition-all duration-200 border-2 ${size === s.id ? "bg-brand-orange/5 border-brand-orange" : "bg-white border-gray-200 hover:border-brand-orange/40"
                      }`}
                  >
                    {size === s.id && (
                      <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-brand-orange text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                    )}
                    <div className="font-sans text-xs font-semibold text-gray-700 mb-1">{s.label}</div>
                    <div className="font-display text-xl font-extrabold text-brand-orange">€{s.price.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 - Color */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[26px] h-[26px] rounded-full bg-brand-orange text-white flex items-center justify-center font-sans text-[13px] font-bold">2</div>
                <h3 className="font-display text-base font-bold text-gray-900 m-0">Choose Color</h3>
              </div>
              <div className="flex items-center gap-4">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${color === c.id
                        ? "border-brand-orange scale-110 shadow-[0_0_0_3px_rgba(232,96,10,0.2)]"
                        : "border-gray-300 hover:border-gray-400"
                        }`}
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className={`font-sans text-[11px] font-medium transition-colors ${color === c.id ? "text-brand-orange font-bold" : "text-gray-500"
                      }`}>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 - Control Type */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[26px] h-[26px] rounded-full bg-brand-orange text-white flex items-center justify-center font-sans text-[13px] font-bold">3</div>
                <h3 className="font-display text-base font-bold text-gray-900 m-0">Select Control Type</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { id: "manual", icon: "🔧", label: "Manual Control", desc: "Simple crank operation, reliable and budget-friendly", cost: "Included" },
                  { id: "motorized", icon: "⚡", label: "Motorized Control", desc: "One-touch operation with remote & smart home ready", cost: "+€650" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCtrl(c.id)}
                    className={`rounded-xl p-4 text-center transition-all duration-200 border-2 ${ctrl === c.id ? "bg-brand-orange/5 border-brand-orange" : "bg-white border-gray-200 hover:border-brand-orange/40"
                      }`}
                  >
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <div className="font-sans text-[13.5px] font-bold text-gray-900 mb-1">{c.label}</div>
                    <div className="font-sans text-[11.5px] text-gray-500 mb-2.5 leading-snug">{c.desc}</div>
                    <div className={`font-sans text-[13px] font-bold ${ctrl === c.id ? "text-brand-orange" : "text-success"}`}>
                      {c.cost}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4 - Upgrades */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[26px] h-[26px] rounded-full bg-brand-orange text-white flex items-center justify-center font-sans text-[13px] font-bold">4</div>
                <h3 className="font-display text-base font-bold text-gray-900 m-0">Add Optional Upgrades</h3>
              </div>
              <button
                onClick={() => setZip(!zip)}
                className={`w-full rounded-xl p-4 text-left flex items-start gap-3 transition-all duration-200 border-2 ${zip ? "bg-brand-orange/5 border-brand-orange" : "bg-white border-gray-200 hover:border-brand-orange/40"
                  }`}
              >
                <div className={`w-5 h-5 rounded-[5px] mt-0.5 shrink-0 flex items-center justify-center transition-colors border-2 ${zip ? "bg-brand-orange border-brand-orange text-white" : "bg-white border-gray-300"
                  }`}>
                  {zip && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                </div>
                <div className="flex-1">
                  <div className="font-sans text-sm font-bold text-gray-900 mb-0.5"> Manual Zip Screen (Side)</div>
                  <div className="font-sans text-xs text-gray-500 leading-snug">Add privacy and weather protection. Transform into a fully enclosed outdoor room.</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Weather Protection", "Privacy Control"].map((t) => (
                      <span key={t} className="bg-gray-50 border border-gray-200 rounded px-2 py-0.5 font-sans text-[10.5px] text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="font-display text-[15px] font-bold text-brand-orange shrink-0 mt-0.5">
                  +€690
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Panel Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="bg-surface-dark rounded-2xl p-6 text-white sticky top-[90px]"
          >
            <h3 className="font-display text-base font-bold mb-4.5">Your Configuration</h3>
            <div className="bg-white/5 rounded-lg border border-white/5 p-3 mb-3.5">
              <div className="flex justify-between font-sans text-[13px] mb-1">
                <span className="text-white/65">{cur.label}</span>
                <span className="font-semibold">€{cur.price.toLocaleString()}</span>
              </div>
              <div className="font-sans text-[11px] text-white/35">Base pergola · {curColor.label}</div>
            </div>
            {motorCost > 0 && (
              <div className="flex justify-between font-sans text-[13px] text-white/60 mb-1.5 px-1">
                <span>Motorized Control</span>
                <span>+€650</span>
              </div>
            )}
            {zipCost > 0 && (
              <div className="flex justify-between font-sans text-[13px] text-white/60 mb-1.5 px-1">
                <span>Zip Screen</span>
                <span>+€690</span>
              </div>
            )}
            <div className="border-t border-white/10 mt-3.5 pt-3.5">
              <div className="flex justify-between font-sans text-[13px] text-white/55 mb-1.5">
                <span>Subtotal</span>
                <span>€{subtotal.toLocaleString()}</span>
              </div>
              <div className="font-sans text-[12px] text-success font-semibold mb-2">
                ✓ 15% Launch discount applied
              </div>
              <div className="flex justify-between font-display text-[26px] font-extrabold items-end">
                <span>Total</span>
                <span className="text-brand-orange">€{subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Button
              onClick={() => {
                addItem({
                  id: "",
                  size: cur.label,
                  color: curColor.label,
                  control: ctrl === "motorized" ? "Motorized" : "Manual",
                  zipScreen: zip,
                  price: subtotal,
                });
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }}
              className="w-full h-auto py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg mt-5 font-sans text-[14.5px] font-bold shadow-[0_4px_14px_rgba(232,96,10,0.25)] transition-all"
            >
              {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
            </Button>

            <div className="mt-4.5 space-y-1.5">
              {["Free Shipping & Installation", "5-Year Structural Warranty", "Secure Checkout", "German Design Quality"].map((t) => (
                <div key={t} className="flex items-center gap-2 font-sans text-[12px] text-white/45">
                  <span className="text-success text-[11px]">✓</span>{t}
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4 justify-center">
              {["VISA", "MASTERCARD", "KLARNA"].map((b) => (
                <span key={b} className="bg-white/5 border border-white/10 rounded-md px-2.5 py-1 font-sans text-[9.5px] font-bold text-white/35 tracking-wider">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
