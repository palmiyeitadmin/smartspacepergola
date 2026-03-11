export default function Footer() {
  return (
    <footer className="bg-surface-dark pt-14 px-6 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="font-display text-lg font-extrabold text-white mb-1">Smart Space Pergola</div>
            <div className="font-sans text-[11px] text-brand-orange font-semibold mb-3">Powered by Palmiye</div>
            <p className="font-sans text-[13px] text-white/40 leading-relaxed max-w-[260px] mb-4">
              The intelligent outdoor solution with patented L-shaped pillar design. Get 15% more usable space.
            </p>
            <div className="flex gap-2.5 mb-6">
              {["f", "in", "📸"].map((s, i) => (
                <div key={i} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-sans text-[11px] font-bold text-white/40 cursor-pointer hover:bg-white/10 hover:text-white transition-colors">
                  {s}
                </div>
              ))}
            </div>
            <div className="font-sans text-[11px] font-bold text-white uppercase tracking-widest mb-3">Why Choose Us</div>
            {[
              { i:"🛡️", t:"5-Year Warranty", s:"Complete peace of mind" },
              { i:"⚡", t:"Quick Installation", s:"Within a few weeks" },
              { i:"🇩🇪", t:"German Design", s:"Precision engineering" },
            ].map(item => (
              <div key={item.t} className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-md bg-brand-orange/15 flex items-center justify-center text-[13px]">{item.i}</div>
                <div>
                  <div className="font-sans text-[12.5px] font-semibold text-white">{item.t}</div>
                  <div className="font-sans text-[10.5px] text-white/35">{item.s}</div>
                </div>
              </div>
            ))}
          </div>
          
          {[
            { t:"Quick Links", links:["About Us","Shop by Size","Product Configurator","Gallery","Contact"] },
            { t:"Customer Service", links:["Shipping & Delivery","Returns & Cancellations","Track My Order","Payment Methods","Help"] },
          ].map(col => (
            <div key={col.t}>
              <div className="font-sans text-[11px] font-bold text-white uppercase tracking-widest mb-4">{col.t}</div>
              <div className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <a key={l} href="#" className="font-sans text-[13px] text-white/40 hover:text-brand-orange transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
          <div>
            <div className="font-sans text-[11px] font-bold text-white uppercase tracking-widest mb-4">Contact Us</div>
            <div className="flex flex-col gap-2.5">
              {[
                { i:"📞", t:"+1 (888) 123-4567" },
                { i:"✉️", t:"info@smartspacepergola.com" },
                { i:"📍", t:"123 Design Street, Innovation City, IC 12345" },
              ].map(c => (
                <div key={c.t} className="font-sans text-[13px] text-white/40 flex items-start gap-2">
                  <span className="text-[14px] leading-none">{c.i}</span>
                  <span className="leading-snug">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[11.5px] text-white/25">
          <span>© 2026 Smart Space Pergola by Palmiye. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
              <a key={l} href="#" className="hover:text-white/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
