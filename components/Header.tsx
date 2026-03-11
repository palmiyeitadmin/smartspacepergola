"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Shop by Size", "Upgrades", "Our Story", "Support/FAQ"];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div>
          <Link href="/" className="flex flex-col">
            <span className="font-display text-xl font-extrabold text-gray-900 tracking-tight leading-none">
              Smart Space Pergola
            </span>
            <span className="font-sans text-[11px] text-gray-400 font-medium tracking-wide mt-1">
              Powered by Palmiye
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="font-sans text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3.5">
          <div className="hidden sm:flex items-center gap-3.5 text-gray-500">
            <button className="hover:text-gray-900 transition-colors">
              <ShoppingCart className="w-[18px] h-[18px]" />
            </button>
            <button className="hover:text-gray-900 transition-colors">
              <User className="w-[18px] h-[18px]" />
            </button>
          </div>
          <a href="#configurator">
            <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold shadow-[0_2px_8px_rgba(232,96,10,0.25)] transition-all px-5">
              Configure & Buy
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Menu className="w-5 h-5 text-gray-600" />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                  >
                    {link}
                  </Link>
                ))}
                <div className="h-px bg-gray-200 my-2" />
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
