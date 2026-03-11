import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════════
   SMART SPACE PERGOLA — Figma-Exact Landing Page
   React + Inline Styles · Powered by Palmiye
   ═══════════════════════════════════════════════════════════════════════ */

const C = {
  orange: "#E8600A",
  orangeHover: "#D15500",
  orangeLight: "#FF8C38",
  orangeBg: "#FFF7F0",
  dark: "#1A1F2E",
  darkAlt: "#232A3C",
  navy: "#2D3448",
  white: "#FFFFFF",
  offWhite: "#F8F8FA",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray700: "#374151",
  gray900: "#111827",
  green: "#16A34A",
  greenLight: "#22C55E",
  greenBg: "#F0FDF4",
  greenBorder: "#BBF7D0",
  red: "#DC2626",
  redLight: "#EF4444",
  redBg: "#FEF2F2",
  redBorder: "#FECACA",
};

const font = "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif";
const fontDisplay = "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}

function Animate({ children, delay = 0, y = 24 }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : `translateY(${y}px)`,
      transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* ── 1. TOP BANNER ─────────────────────────────────────────────── */
function TopBanner() {
  return (
    <div style={{
      background: C.dark, padding: "10px 24px",
      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
      fontFamily: font, fontSize: 13, color: "#d1d5db",
    }}>
      <span style={{
        background: C.orange, color: C.white, padding: "3px 10px",
        borderRadius: 4, fontWeight: 700, fontSize: 11,
        textTransform: "uppercase", letterSpacing: "0.03em",
      }}>🎉 Launch Campaign</span>
      Get 15% More Space for Less Budget! Claim Your Discount Today
    </div>
  );
}

/* ── 2. HEADER ─────────────────────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.98)" : C.white,
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: `1px solid ${C.gray200}`,
      transition: "all 0.3s",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 800, color: C.gray900, letterSpacing: "-0.02em" }}>
            Smart Space Pergola
          </div>
          <div style={{ fontFamily: font, fontSize: 11, color: C.gray400, fontWeight: 500 }}>Powered by Palmiye</div>
        </div>
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Shop by Size", "Upgrades", "Our Story", "Support/FAQ"].map(l => (
            <a key={l} href="#" style={{
              fontFamily: font, fontSize: 14, fontWeight: 500, color: C.gray500,
              textDecoration: "none", transition: "color 0.2s",
            }} onMouseEnter={e => e.target.style.color = C.gray900}
               onMouseLeave={e => e.target.style.color = C.gray500}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ cursor: "pointer", fontSize: 18, color: C.gray500 }}>🛒</span>
          <span style={{ cursor: "pointer", fontSize: 18, color: C.gray500 }}>👤</span>
          <button style={{
            background: C.orange, color: C.white, border: "none",
            padding: "10px 20px", borderRadius: 8, fontFamily: font,
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 2px 8px ${C.orange}40`, transition: "all 0.2s",
          }} onMouseEnter={e => e.target.style.background = C.orangeHover}
             onMouseLeave={e => e.target.style.background = C.orange}>Configure & Buy</button>
        </div>
      </div>
    </header>
  );
}

/* ── 3. HERO ───────────────────────────────────────────────────── */
function Hero() {
  const [ref, v] = useInView();
  return (
    <section ref={ref} style={{
      position: "relative", overflow: "hidden",
      background: `linear-gradient(110deg, ${C.dark} 45%, ${C.darkAlt} 100%)`,
      minHeight: 520,
    }}>
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "58%",
        background: "linear-gradient(135deg, #3d4d5d 0%, #2a3a4a 100%)",
        clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15 }}>
          <svg width="350" height="240" viewBox="0 0 350 240" fill="none">
            <rect x="25" y="50" width="300" height="6" rx="3" fill="white"/>
            <rect x="35" y="56" width="6" height="150" rx="3" fill="white"/>
            <rect x="309" y="56" width="6" height="150" rx="3" fill="white"/>
            <rect x="25" y="30" width="300" height="6" rx="3" fill="white" opacity="0.6"/>
            {Array.from({length: 9}, (_, i) => (
              <rect key={i} x={45 + i * 32} y="30" width="4" height="20" rx="1.5" fill="white" opacity="0.4"/>
            ))}
            {Array.from({length: 10}, (_, i) => (
              <rect key={i} x="41" y={36 + i * 3} width="268" height="2" rx="1" fill="white" opacity="0.12"/>
            ))}
          </svg>
        </div>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(to top, rgba(34,70,40,0.2), transparent)",
        }}/>
      </div>

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "72px 32px 80px",
        position: "relative", zIndex: 2,
      }}>
        <div style={{
          maxWidth: 520,
          opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)",
          transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.3)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 22,
            fontFamily: font, fontSize: 12.5, fontWeight: 600, color: C.greenLight,
          }}>
            <span>⚡</span> Special Launch Offer
          </div>

          <h1 style={{
            fontFamily: fontDisplay, fontSize: "clamp(2.1rem, 4.2vw, 3rem)",
            fontWeight: 800, lineHeight: 1.13, color: C.white,
            letterSpacing: "-0.03em", margin: "0 0 18px 0",
          }}>
            Use your budget in a<br/>
            <span style={{ color: C.orange }}>perfect way</span>.<br/>
            Buy smaller, live larger.
          </h1>

          <p style={{
            fontFamily: font, fontSize: 15, lineHeight: 1.65,
            color: "rgba(255,255,255,0.6)", margin: "0 0 28px 0",
          }}>
            Smart Space Pergola gives you up to{" "}
            <span style={{ color: C.white, fontWeight: 600, textDecoration: "underline", textDecorationColor: C.orange, textUnderlineOffset: 3 }}>
              15% more usable
            </span>{" "}
            interior area with its patented corner design. The smart investment for your home.
          </p>

          <button style={{
            background: C.orange, color: C.white, border: "none",
            padding: "13px 28px", borderRadius: 8, fontFamily: font,
            fontSize: 14.5, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 4px 16px ${C.orange}45`, transition: "all 0.25s",
          }} onMouseEnter={e => { e.target.style.background = C.orangeHover; e.target.style.transform = "translateY(-1px)"; }}
             onMouseLeave={e => { e.target.style.background = C.orange; e.target.style.transform = "translateY(0)"; }}>
            Configure & Buy Now
          </button>

          <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
            {[
              { icon: "🇩🇪", t: "German Design" },
              { icon: "🏭", t: "Powered by Palmiye" },
              { icon: "⚡", t: "Quick Installation" },
            ].map(b => (
              <div key={b.t} style={{
                display: "flex", alignItems: "center", gap: 6,
                fontFamily: font, fontSize: 12.5, color: "rgba(255,255,255,0.5)", fontWeight: 500,
              }}>
                <span style={{ fontSize: 14 }}>{b.icon}</span>{b.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4. COMPARISON ─────────────────────────────────────────────── */
function Comparison() {
  return (
    <section style={{ padding: "80px 32px 48px", background: C.white }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Animate>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: C.orangeBg, border: `1px solid ${C.orange}25`,
            borderRadius: 100, padding: "5px 14px", marginBottom: 14,
            fontFamily: font, fontSize: 12.5, fontWeight: 600, color: C.orange,
          }}>✨ The Smart Space Advantage</div>
          <h2 style={{
            fontFamily: fontDisplay, fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
            fontWeight: 800, color: C.gray900, margin: "0 0 10px", letterSpacing: "-0.02em",
          }}>Why Pay for a <span style={{ color: C.orange }}>Larger Product</span>?</h2>
          <p style={{
            fontFamily: font, fontSize: 14.5, color: C.gray500,
            maxWidth: 500, margin: "0 auto 44px", lineHeight: 1.6,
          }}>
            Our patented L-shaped pillar design moves the columns outside, giving you more
            room to sit, dine, and live without stretching your budget.
          </p>
        </Animate>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 780, margin: "0 auto" }}>
          <Animate delay={0.1}>
            <div style={{
              background: C.gray50, border: `1px solid ${C.gray200}`,
              borderRadius: 16, padding: 24, position: "relative", textAlign: "left",
            }}>
              <div style={{
                position: "absolute", top: 14, right: 14,
                width: 26, height: 26, borderRadius: "50%",
                background: C.redBg, color: C.red, display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800,
              }}>✕</div>
              <h3 style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, color: C.gray900, margin: "0 0 18px" }}>Standard Pergola</h3>
              <div style={{
                background: `${C.red}06`, border: `2px dashed ${C.red}22`,
                borderRadius: 12, padding: "28px 20px", marginBottom: 18, position: "relative",
              }}>
                {[{t:8,l:8},{t:8,r:8},{b:8,l:8},{b:8,r:8}].map((p,i) => (
                  <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:2, background:`${C.red}35`, ...p }} />
                ))}
                <div style={{
                  width: "80%", margin: "0 auto", aspectRatio: "5/3",
                  background: `${C.red}10`, borderRadius: 8, border: `1.5px solid ${C.red}20`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ fontFamily: font, fontSize: 11, color: C.gray400, marginBottom: 3 }}>Usable Area</div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 32, fontWeight: 800, color: C.red }}>85%</div>
                </div>
              </div>
              {["Pillars occupy interior corners","Limited space in corners","Need larger size for same comfort"].map(t => (
                <div key={t} style={{ display:"flex", gap:7, marginBottom:7, fontFamily:font, fontSize:13, color:C.gray500, lineHeight:1.4, alignItems:"flex-start" }}>
                  <span style={{ color:C.red, fontSize:11, marginTop:2, flexShrink:0 }}>✕</span>{t}
                </div>
              ))}
            </div>
          </Animate>

          <Animate delay={0.2}>
            <div style={{
              background: C.white, border: `2px solid ${C.green}40`,
              borderRadius: 16, padding: 24, position: "relative", textAlign: "left",
              boxShadow: `0 8px 28px ${C.green}10`,
            }}>
              <div style={{
                position: "absolute", top: -11, right: 18,
                background: C.green, color: C.white, padding: "3px 12px",
                borderRadius: 100, fontFamily: font, fontSize: 11, fontWeight: 700,
              }}>+15% Space</div>
              <h3 style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, color: C.gray900, margin: "0 0 18px" }}>Smart Space Pergola</h3>
              <div style={{
                background: `${C.green}06`, border: `2px solid ${C.green}20`,
                borderRadius: 12, padding: "28px 20px", marginBottom: 18,
              }}>
                <div style={{
                  width: "100%", aspectRatio: "5/3",
                  background: `${C.green}10`, borderRadius: 8, border: `1.5px solid ${C.green}20`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ fontFamily: font, fontSize: 11, color: C.gray400, marginBottom: 3 }}>Usable Area</div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 32, fontWeight: 800, color: C.green }}>100%</div>
                </div>
              </div>
              {["L-shaped pillars extend outside","Full corner utilization","15% more usable space"].map(t => (
                <div key={t} style={{ display:"flex", gap:7, marginBottom:7, fontFamily:font, fontSize:13, color:C.gray500, lineHeight:1.4, alignItems:"flex-start" }}>
                  <span style={{ color:C.green, fontSize:14, flexShrink:0 }}>✓</span>{t}
                </div>
              ))}
            </div>
          </Animate>
        </div>

        <Animate delay={0.3}>
          <div style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center",
            background: `linear-gradient(135deg, ${C.orange}, ${C.orangeHover})`,
            borderRadius: 20, padding: "22px 40px", marginTop: 44,
            boxShadow: `0 8px 28px ${C.orange}28`,
          }}>
            <div style={{ fontFamily: font, fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Get More Space With</div>
            <div style={{ fontFamily: fontDisplay, fontSize: 44, fontWeight: 800, color: C.white, lineHeight: 1, margin: "4px 0 2px" }}>+15%</div>
            <div style={{ fontFamily: font, fontSize: 12, fontWeight: 700, color: C.white, textTransform: "uppercase", letterSpacing: "0.1em" }}>MORE USABLE AREA</div>
            <div style={{ fontFamily: font, fontSize: 11.5, color: "rgba(255,255,255,0.55)", marginTop: 6 }}>Less budget, smarter design, better living.</div>
          </div>
        </Animate>
      </div>
    </section>
  );
}

/* ── 5. SIZES ──────────────────────────────────────────────────── */
const products = [
  { name:"Balcony Size", price:2490, old:2929, save:439, dim:"200×200 cm", desc:"Perfect for small balconies and compact spaces", fits:["Lounge chair","Small coffee table","Side plants"], pct:"Save 15%" },
  { name:"Dining Size", price:3290, old:3870, save:580, dim:"250×300 cm", desc:"Fits a 4-6 person outdoor dining room for family meals", fits:["4-6 person dining table","A shelf","Side wall bench"], pct:"Save 15%" },
  { name:"Family Size", price:3990, old:4694, save:704, dim:"300×400 cm", desc:"The outdoor living room for the whole family", fits:["Corner L-shaped sofa","Coffee table","Bookcase / cabinet"], pct:"Save 15%" },
  { name:"Lounge Size", price:4990, old:5870, save:880, dim:"400×500 cm", desc:"Premium full-size relaxation and entertainment space", fits:["Lounge set","Sunbed(s)","Outdoor kitchen area"], pct:"Save 15%" },
];

function SizeCard({ p }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      background: C.white, borderRadius: 14, overflow: "hidden",
      border: `1px solid ${h ? C.orange+"35" : C.gray200}`,
      transition: "all 0.3s", transform: h ? "translateY(-4px)" : "translateY(0)",
      boxShadow: h ? "0 12px 32px rgba(0,0,0,0.07)" : "0 1px 4px rgba(0,0,0,0.03)",
    }}>
      <div style={{
        aspectRatio: "4/3", position: "relative",
        background: "linear-gradient(135deg, #e8e0d4, #d4c8b8)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="90" height="65" viewBox="0 0 90 65" fill="none" opacity="0.25">
          <rect x="5" y="12" width="80" height="4" rx="2" fill="#5a5040"/>
          <rect x="10" y="16" width="3" height="42" rx="1.5" fill="#5a5040"/>
          <rect x="77" y="16" width="3" height="42" rx="1.5" fill="#5a5040"/>
          <rect x="5" y="4" width="80" height="3" rx="1.5" fill="#5a5040" opacity="0.5"/>
        </svg>
        <div style={{
          position: "absolute", top: 8, right: 8, background: C.green, color: C.white,
          padding: "3px 9px", borderRadius: 6, fontFamily: font, fontSize: 10.5, fontWeight: 700,
        }}>{p.pct}</div>
      </div>
      <div style={{ padding: "16px 18px 18px" }}>
        <h3 style={{ fontFamily: fontDisplay, fontSize: 15.5, fontWeight: 700, color: C.gray900, margin: "0 0 6px" }}>{p.name}</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
          <span style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 800, color: C.orange }}>€{p.price.toLocaleString()}</span>
          <span style={{ fontFamily: font, fontSize: 12.5, color: C.gray400, textDecoration: "line-through" }}>€{p.old.toLocaleString()}</span>
        </div>
        <div style={{ fontFamily: font, fontSize: 11.5, color: C.green, fontWeight: 600, marginBottom: 10 }}>You save €{p.save}</div>
        <p style={{ fontFamily: font, fontSize: 12.5, color: C.gray500, margin: "0 0 12px", lineHeight: 1.5 }}>{p.dim} — {p.desc}</p>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: C.gray700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>What fits inside:</div>
          {p.fits.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: font, fontSize: 12.5, color: C.gray500, marginBottom: 3 }}>
              <span style={{ color: C.orange, fontSize: 7 }}>●</span>{f}
            </div>
          ))}
        </div>
        <button style={{
          width: "100%", padding: 8, background: "transparent",
          border: `1px solid ${C.gray200}`, borderRadius: 8,
          fontFamily: font, fontSize: 12.5, fontWeight: 600, color: C.gray500,
          cursor: "pointer", marginBottom: 8, transition: "all 0.2s",
        }} onMouseEnter={e => { e.target.style.borderColor = C.orange; e.target.style.color = C.orange; }}
           onMouseLeave={e => { e.target.style.borderColor = C.gray200; e.target.style.color = C.gray500; }}>
          📐 View Floor Plan
        </button>
        <button style={{
          width: "100%", padding: 10, background: C.orange, border: "none",
          borderRadius: 8, fontFamily: font, fontSize: 13, fontWeight: 700,
          color: C.white, cursor: "pointer", transition: "all 0.2s",
          boxShadow: `0 2px 8px ${C.orange}28`,
        }} onMouseEnter={e => e.target.style.background = C.orangeHover}
           onMouseLeave={e => e.target.style.background = C.orange}>Select Options</button>
      </div>
    </div>
  );
}

function SizeSection() {
  return (
    <section style={{ padding: "76px 32px", background: C.gray50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Animate>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: C.orangeBg, border: `1px solid ${C.orange}20`,
            borderRadius: 100, padding: "5px 14px", marginBottom: 14,
            fontFamily: font, fontSize: 12.5, fontWeight: 600, color: C.orange,
          }}>📐 4 Space Solutions</div>
          <h2 style={{
            fontFamily: fontDisplay, fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
            fontWeight: 800, color: C.gray900, margin: "0 0 10px", letterSpacing: "-0.02em",
          }}>Find Your <span style={{ color: C.orange }}>Perfect Size</span></h2>
          <p style={{
            fontFamily: font, fontSize: 14, color: C.gray500,
            maxWidth: 440, margin: "0 auto 44px", lineHeight: 1.6,
          }}>Choose the solution that fits your space and lifestyle. Every size includes the patented Smart Space advantage.</p>
        </Animate>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {products.map((p, i) => (
            <Animate key={p.name} delay={0.08 * i}><SizeCard p={p} /></Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. CONFIGURATOR ───────────────────────────────────────────── */
function Configurator() {
  const [size, setSize] = useState("family");
  const [ctrl, setCtrl] = useState("manual");
  const [zip, setZip] = useState(false);

  const sizes = [
    { id:"balcony", label:"Balcony Size (200×200 cm)", price:2490 },
    { id:"dining", label:"Dining Size (250×300 cm)", price:3290 },
    { id:"family", label:"Family Size (300×400 cm)", price:3990 },
    { id:"lounge", label:"Lounge Size (400×500 cm)", price:4990 },
  ];
  const cur = sizes.find(s => s.id === size);
  const motorCost = ctrl === "motorized" ? 650 : 0;
  const zipCost = zip ? 690 : 0;
  const subtotal = cur.price + motorCost + zipCost;

  return (
    <section style={{ padding: "76px 32px", background: C.white }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Animate>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: C.orangeBg, border: `1px solid ${C.orange}20`,
              borderRadius: 100, padding: "5px 14px", marginBottom: 14,
              fontFamily: font, fontSize: 12.5, fontWeight: 600, color: C.orange,
            }}>⚙️ Product Configurator</div>
            <h2 style={{
              fontFamily: fontDisplay, fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
              fontWeight: 800, color: C.gray900, margin: "0 0 10px", letterSpacing: "-0.02em",
            }}>Configure Your <span style={{ color: C.orange }}>Perfect Pergola</span></h2>
            <p style={{
              fontFamily: font, fontSize: 14, color: C.gray500,
              maxWidth: 420, margin: "0 auto", lineHeight: 1.6,
            }}>Customize every detail and see your price update in real-time. Buy directly with confidence.</p>
          </div>
        </Animate>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28, alignItems: "start" }}>
          <Animate delay={0.1}>
            <div style={{ background: C.gray50, borderRadius: 16, padding: 28, border: `1px solid ${C.gray200}` }}>
              {/* Step 1 */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width:26, height:26, borderRadius:"50%", background:C.orange, color:C.white, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:font, fontSize:13, fontWeight:700 }}>1</div>
                  <h3 style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, color: C.gray900, margin: 0 }}>Choose Your Size</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {sizes.map(s => (
                    <button key={s.id} onClick={() => setSize(s.id)} style={{
                      background: size === s.id ? `${C.orange}08` : C.white,
                      border: size === s.id ? `2px solid ${C.orange}` : `1px solid ${C.gray200}`,
                      borderRadius: 10, padding: "11px 14px", cursor: "pointer", textAlign: "left",
                      transition: "all 0.2s", position: "relative",
                    }}>
                      {size === s.id && <div style={{ position:"absolute", top:7, right:7, width:16, height:16, borderRadius:"50%", background:C.orange, color:C.white, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9 }}>✓</div>}
                      <div style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: C.gray700, marginBottom: 3 }}>{s.label}</div>
                      <div style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 800, color: C.orange }}>€{s.price.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width:26, height:26, borderRadius:"50%", background:C.orange, color:C.white, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:font, fontSize:13, fontWeight:700 }}>2</div>
                  <h3 style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, color: C.gray900, margin: 0 }}>Select Control Type</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { id:"manual", icon:"🔧", label:"Manual Control", desc:"Simple crank operation, reliable and budget-friendly", cost:"Included" },
                    { id:"motorized", icon:"⚡", label:"Motorized Control", desc:"One-touch operation with remote & smart home ready", cost:"+€650" },
                  ].map(c => (
                    <button key={c.id} onClick={() => setCtrl(c.id)} style={{
                      background: ctrl === c.id ? `${C.orange}08` : C.white,
                      border: ctrl === c.id ? `2px solid ${C.orange}` : `1px solid ${C.gray200}`,
                      borderRadius: 10, padding: 14, cursor: "pointer", textAlign: "center", transition: "all 0.2s",
                    }}>
                      <div style={{ fontSize: 24, marginBottom: 6 }}>{c.icon}</div>
                      <div style={{ fontFamily: font, fontSize: 13.5, fontWeight: 700, color: C.gray900, marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontFamily: font, fontSize: 11.5, color: C.gray500, marginBottom: 8, lineHeight: 1.4 }}>{c.desc}</div>
                      <div style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: ctrl === c.id ? C.orange : C.green }}>{c.cost}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width:26, height:26, borderRadius:"50%", background:C.orange, color:C.white, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:font, fontSize:13, fontWeight:700 }}>3</div>
                  <h3 style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, color: C.gray900, margin: 0 }}>Add Optional Upgrades</h3>
                </div>
                <button onClick={() => setZip(!zip)} style={{
                  width: "100%", background: zip ? `${C.orange}05` : C.white,
                  border: zip ? `2px solid ${C.orange}` : `1px solid ${C.gray200}`,
                  borderRadius: 10, padding: 14, cursor: "pointer", textAlign: "left",
                  display: "flex", alignItems: "flex-start", gap: 12, transition: "all 0.2s",
                }}>
                  <div style={{
                    width:20, height:20, borderRadius:5, marginTop:2,
                    border: zip ? `2px solid ${C.orange}` : `2px solid ${C.gray300}`,
                    background: zip ? C.orange : C.white, flexShrink:0,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:C.white, fontSize:11, fontWeight:700,
                  }}>{zip ? "✓" : ""}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: font, fontSize: 14, fontWeight: 700, color: C.gray900, marginBottom: 2 }}>🪟 Manual Zip Screen (Side)</div>
                    <div style={{ fontFamily: font, fontSize: 12, color: C.gray500, lineHeight: 1.4 }}>Add privacy and weather protection. Transform into a fully enclosed outdoor room.</div>
                    <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                      {["Weather Protection","Privacy Control"].map(t => (
                        <span key={t} style={{ background:C.gray50, border:`1px solid ${C.gray200}`, borderRadius:4, padding:"2px 7px", fontFamily:font, fontSize:10.5, color:C.gray400 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 15, fontWeight: 700, color: C.orange, flexShrink: 0, marginTop: 2 }}>+€690</div>
                </button>
              </div>
            </div>
          </Animate>

          {/* Summary */}
          <Animate delay={0.2}>
            <div style={{ background: C.dark, borderRadius: 16, padding: 24, color: C.white, position: "sticky", top: 90 }}>
              <h3 style={{ fontFamily: fontDisplay, fontSize: 16, fontWeight: 700, margin: "0 0 18px", color: C.white }}>Your Configuration</h3>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: 12, marginBottom: 14 }}>
                <div style={{ display:"flex", justifyContent:"space-between", fontFamily:font, fontSize:13, marginBottom:3 }}>
                  <span style={{ color:"rgba(255,255,255,0.65)" }}>{cur.label}</span>
                  <span style={{ fontWeight:600 }}>€{cur.price.toLocaleString()}</span>
                </div>
                <div style={{ fontFamily:font, fontSize:11, color:"rgba(255,255,255,0.35)" }}>Base pergola</div>
              </div>
              {motorCost > 0 && <div style={{ display:"flex", justifyContent:"space-between", fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.6)", marginBottom:6, padding:"0 4px" }}><span>Motorized Control</span><span>+€650</span></div>}
              {zipCost > 0 && <div style={{ display:"flex", justifyContent:"space-between", fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.6)", marginBottom:6, padding:"0 4px" }}><span>Zip Screen</span><span>+€690</span></div>}
              <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", marginTop:10, paddingTop:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.55)", marginBottom:6 }}><span>Subtotal</span><span>€{subtotal.toLocaleString()}</span></div>
                <div style={{ fontFamily:font, fontSize:12, color:C.green, fontWeight:600, marginBottom:8 }}>✓ 15% Launch discount applied</div>
                <div style={{ display:"flex", justifyContent:"space-between", fontFamily:fontDisplay, fontSize:26, fontWeight:800 }}><span>Total</span><span style={{ color:C.orange }}>€{subtotal.toLocaleString()}</span></div>
              </div>
              <button style={{
                width:"100%", padding:13, background:C.orange, border:"none",
                borderRadius:10, marginTop:18, fontFamily:font, fontSize:14.5,
                fontWeight:700, color:C.white, cursor:"pointer",
                boxShadow:`0 4px 14px ${C.orange}40`, transition:"all 0.2s",
              }} onMouseEnter={e => e.target.style.background = C.orangeHover}
                 onMouseLeave={e => e.target.style.background = C.orange}>🛒 Add to Cart</button>
              <div style={{ marginTop: 16 }}>
                {["Free Shipping & Installation","5-Year Structural Warranty","Secure Checkout","German Design Quality"].map(t => (
                  <div key={t} style={{ display:"flex", alignItems:"center", gap:7, fontFamily:font, fontSize:12, color:"rgba(255,255,255,0.45)", marginBottom:5 }}>
                    <span style={{ color:C.green, fontSize:11 }}>✓</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:8, marginTop:14, justifyContent:"center" }}>
                {["VISA","MASTERCARD","KLARNA"].map(b => (
                  <span key={b} style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, padding:"3px 9px", fontFamily:font, fontSize:9.5, fontWeight:700, color:"rgba(255,255,255,0.35)", letterSpacing:"0.04em" }}>{b}</span>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

/* ── 7. FOOTER ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: C.dark, padding: "56px 32px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 36, marginBottom: 36 }}>
          <div>
            <div style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 800, color: C.white, marginBottom: 3 }}>Smart Space Pergola</div>
            <div style={{ fontFamily: font, fontSize: 11, color: C.orange, fontWeight: 600, marginBottom: 10 }}>Powered by Palmiye</div>
            <p style={{ fontFamily: font, fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: 260, margin: "0 0 14px" }}>
              The intelligent outdoor solution with patented L-shaped pillar design. Get 15% more usable space.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
              {["f","in","📸"].map((s,i) => (
                <div key={i} style={{ width:30, height:30, borderRadius:7, background:"rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:font, fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.4)", cursor:"pointer" }}>{s}</div>
              ))}
            </div>
            <div style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: C.white, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Why Choose Us</div>
            {[
              { i:"🛡️", t:"5-Year Warranty", s:"Complete peace of mind" },
              { i:"⚡", t:"Quick Installation", s:"Within a few weeks" },
              { i:"🇩🇪", t:"German Design", s:"Precision engineering" },
            ].map(item => (
              <div key={item.t} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
                <div style={{ width:28, height:28, borderRadius:6, background:`${C.orange}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13 }}>{item.i}</div>
                <div>
                  <div style={{ fontFamily: font, fontSize: 12.5, fontWeight: 600, color: C.white }}>{item.t}</div>
                  <div style={{ fontFamily: font, fontSize: 10.5, color: "rgba(255,255,255,0.35)" }}>{item.s}</div>
                </div>
              </div>
            ))}
          </div>
          {[
            { t:"Quick Links", links:["About Us","Shop by Size","Product Configurator","Gallery","Contact"] },
            { t:"Customer Service", links:["Shipping & Delivery","Returns & Cancellations","Track My Order","Payment Methods","Help"] },
          ].map(col => (
            <div key={col.t}>
              <div style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: C.white, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 14 }}>{col.t}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display:"block", fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.4)", textDecoration:"none", marginBottom:9, transition:"color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = C.orange}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{l}</a>
              ))}
            </div>
          ))}
          <div>
            <div style={{ fontFamily: font, fontSize: 11, fontWeight: 700, color: C.white, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 14 }}>Contact Us</div>
            {[
              { i:"📞", t:"+1 (888) 123-4567" },
              { i:"✉️", t:"info@smartspacepergola.com" },
              { i:"📍", t:"123 Design Street, Innovation City, IC 12345" },
            ].map(c => (
              <div key={c.t} style={{ fontFamily:font, fontSize:13, color:"rgba(255,255,255,0.4)", marginBottom:9, display:"flex", alignItems:"flex-start", gap:6 }}>
                <span style={{ fontSize:13 }}>{c.i}</span>{c.t}
              </div>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16,
          display: "flex", justifyContent: "space-between", fontFamily: font, fontSize: 11.5, color: "rgba(255,255,255,0.25)",
        }}>
          <span>© 2026 Smart Space Pergola by Palmiye. All rights reserved.</span>
          <div style={{ display: "flex", gap: 18 }}>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ color:"rgba(255,255,255,0.25)", textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── MAIN ──────────────────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    const pre = document.createElement("link");
    pre.rel = "preconnect"; pre.href = "https://fonts.googleapis.com";
    document.head.appendChild(pre);
    const fl = document.createElement("link");
    fl.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    fl.rel = "stylesheet"; document.head.appendChild(fl);
    document.body.style.cssText = "margin:0;padding:0;overflow-x:hidden";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div style={{ minHeight: "100vh", fontFamily: font, background: C.white }}>
      <TopBanner />
      <Header />
      <Hero />
      <Comparison />
      <SizeSection />
      <Configurator />
      <Footer />
    </div>
  );
}
