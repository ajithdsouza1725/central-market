"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/floors", label: "Floors & Spaces" },
  { href: "/booking", label: "Book a Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-white/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="h-11 w-9 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <p className="text-sm font-bold tracking-wide text-charcoal font-heading">
                Central Market
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Complex · Mangaluru
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    active ? "text-teal" : "text-gray-600 hover:text-teal"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.75 rounded-full"
                      style={{ background: "linear-gradient(90deg, #009688, #c5a55a)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal/50 rounded-full group-hover:w-4 transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+917022037291"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              +91 70220 37291
            </a>
            <Link
              href="/booking"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-linear-to-r from-teal to-teal-dark text-white rounded-full hover:from-teal-dark hover:to-teal transition-all duration-300 shadow-[0_4px_16px_rgba(0,150,136,0.3)] hover:shadow-[0_6px_24px_rgba(0,150,136,0.4)] shine-hover"
            >
              Book Now
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-teal transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <nav className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                        active
                          ? "text-teal bg-teal/5 border border-teal/10"
                          : "text-charcoal hover:text-teal hover:bg-teal/5"
                      }`}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                <a
                  href="tel:+917022037291"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium border-2 border-teal/20 text-teal rounded-full hover:bg-teal/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 70220 37291
                </a>
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3.5 text-sm font-semibold bg-linear-to-r from-teal to-teal-dark text-white rounded-full transition-all shadow-sm"
                >
                  Book Your Shop
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
