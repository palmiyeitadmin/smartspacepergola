"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Menu, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const { items, itemCount, total, removeItem } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Shop by Size", href: "#sizes" },
    { label: "Upgrades", href: "#configurator" },
    { label: "Our Story", href: "#" },
    { label: "Support/FAQ", href: "#" },
  ];

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
          <Link href="/">
            <Image
              src="/images/Artboard 2 copy.png"
              alt="Smart Space Pergola"
              width={180}
              height={50}
              className="h-[42px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3.5">
          <div className="hidden sm:flex items-center gap-3.5 text-gray-500">
            {/* Cart Icon with badge */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className={`relative hover:text-gray-900 transition-colors ${itemCount > 0 ? "text-brand-orange" : ""}`}
              >
                <ShoppingCart className="w-[18px] h-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-orange text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Cart Popover */}
              {cartOpen && (
                <div className="absolute right-0 top-10 w-[340px] bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.15)] border border-gray-200 z-60 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <span className="font-display text-sm font-bold text-gray-900">Your Cart ({itemCount})</span>
                    <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {items.length === 0 ? (
                    <div className="px-4 py-8 text-center">
                      <ShoppingCart className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="font-sans text-sm text-gray-400">Your cart is empty</p>
                      <p className="font-sans text-xs text-gray-300 mt-1">Configure your pergola and add it here</p>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-[280px] overflow-y-auto">
                        {items.map((item) => (
                          <div key={item.id} className="px-4 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="font-sans text-[13px] font-semibold text-gray-900">{item.size}</div>
                                <div className="font-sans text-[11px] text-gray-400 mt-0.5">
                                  {item.color} · {item.control}{item.zipScreen ? " · Zip Screen" : ""}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-display text-sm font-bold text-brand-orange">€{item.price.toLocaleString()}</span>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-gray-300 hover:text-red-500 transition-colors p-0.5"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-sans text-xs text-gray-500">Total</span>
                          <span className="font-display text-lg font-extrabold text-gray-900">€{total.toLocaleString()}</span>
                        </div>
                        <Button className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-[0_2px_8px_rgba(232,96,10,0.2)]">
                          Checkout
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

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
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-gray-200 my-2" />
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart ({itemCount})</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
