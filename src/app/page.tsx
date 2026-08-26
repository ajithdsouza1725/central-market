"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Building2,
  Car,
  ShieldCheck,
  Wifi,
  Wind,
  MapPin,
  ChevronRight,
  Phone,
  Bike,
  Smartphone,
  Stethoscope,
  Gem,
  Shirt,
  BookOpen,
  Watch,
  Cake,
  Cookie,
  IceCream,
  Glasses,
  Flower2,
  Sparkles,
  Scissors,
  ShoppingBag,
  Star,
  Users,
  Clock,
  Zap,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";

/* ─── HERO ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — wide panoramic building render */}
      <div className="absolute inset-0">
        <Image
          src="/images/building-wide.jpg"
          alt="Central Market Complex - Mangaluru panoramic view"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/30" />
        <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-white/20" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-ping opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                Ready to Occupy
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-charcoal font-heading mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The Next Big Move
              <br />
              <span className="text-gradient-teal">For Your Business</span>
              <br />
              Starts Here
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Mangaluru&apos;s most iconic marketplace, reimagined into a world-class
              commercial complex. 500+ shops, kiosks & stalls. 1200+ parking spaces.
              Fully air-conditioned.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-all shadow-[0_4px_20px_rgba(0,150,136,0.35)] hover:shadow-[0_8px_30px_rgba(0,150,136,0.45)] font-heading"
              >
                Book Your Shop
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/floors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brown/30 text-brown font-semibold rounded-full hover:border-brown hover:bg-white/80 transition-all font-heading backdrop-blur-sm"
              >
                Explore Floors
              </Link>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              className="flex gap-6 mt-10 pt-8 border-t border-gray-200/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { val: "500+", label: "Shops" },
                { val: "1200+", label: "Parking" },
                { val: "100%", label: "AC" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-charcoal font-heading">{s.val}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Building image with floating badges */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full">
              {/* Main building image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/hero.jpg"
                  alt="Central Market Complex Mangaluru"
                  width={1920}
                  height={1380}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-xl border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Car className="h-6 w-6 text-teal mb-1.5" />
                <p className="text-xl font-bold text-charcoal font-heading">1200+</p>
                <p className="text-[10px] text-gray-500">Parking Spaces</p>
              </motion.div>

              <motion.div
                className="absolute top-8 -right-4 rounded-xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="h-9 w-9 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Wind className="h-4 w-4 text-teal" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal">100% AC</p>
                  <p className="text-[10px] text-gray-500">Centralised</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-8 rounded-xl bg-brown text-white px-5 py-3 shadow-lg flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Zap className="h-4 w-4" />
                <p className="text-sm font-bold font-heading">Ready to Occupy</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 40C360 80 720 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ─── MARQUEE CATEGORIES ─── */
const marqueeItems = [
  { icon: Smartphone, name: "Mobile Shops" },
  { icon: Stethoscope, name: "Medical" },
  { icon: Gem, name: "Jewellery" },
  { icon: Shirt, name: "Garments" },
  { icon: Watch, name: "Watches" },
  { icon: BookOpen, name: "Books" },
  { icon: Cake, name: "Bakery & Sweets" },
  { icon: Cookie, name: "Cookies" },
  { icon: IceCream, name: "Ice Cream" },
  { icon: Glasses, name: "Spectacles" },
  { icon: Sparkles, name: "Cosmetics" },
  { icon: Flower2, name: "Fancy Shops" },
  { icon: Scissors, name: "Craft & Toys" },
  { icon: ShoppingBag, name: "Stationery" },
];

function MarqueeSection() {
  return (
    <section className="py-8 bg-white overflow-hidden border-y border-gray-100">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-gray-400 hover:text-teal transition-colors cursor-default"
          >
            <item.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-gray-300 ml-4">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── STATS ─── */
const stats = [
  { value: 500, suffix: "+", label: "Shops, Kiosks & Stalls", icon: Building2, color: "bg-teal" },
  { value: 1200, suffix: "+", label: "Car Parking Spaces", icon: Car, color: "bg-brown" },
  { value: 500, suffix: "+", label: "Two-Wheeler Parking", icon: Bike, color: "bg-teal-dark" },
  { value: 210000, suffix: "", label: "Sq Ft Parking Area", icon: MapPin, color: "bg-brown-light" },
];

function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="card-lift rounded-2xl p-6 bg-gray-50 border border-gray-100 text-center group cursor-default">
                <div className={`mx-auto mb-4 h-12 w-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-charcoal font-heading">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT / USP ─── */
function AboutSection() {
  return (
    <section className="py-24 bg-warm relative overflow-hidden wave-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
              About the Project
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-charcoal font-heading mb-6">
              A Legacy{" "}
              <span className="text-gradient-teal">Reimagined</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Built in 1960, the old Central Market has been the beating heart of
              Mangaluru&apos;s commerce for decades. Now, the Mangaluru City Corporation
              has transformed it into a state-of-the-art, fully centralised
              air-conditioned commercial complex.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With multiple floors housing shops, general stalls, kiosks, financial
              establishments, restaurants, and a food court — plus 1200+ car and 500+
              two-wheeler parking — this is where tradition meets tomorrow.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: Wind, label: "100% AC" },
                { icon: ShieldCheck, label: "24/7 Security" },
                { icon: Car, label: "1200+ Parking" },
                { icon: Wifi, label: "Lifts & Escalators" },
                { icon: Users, label: "Prime Location" },
                { icon: Clock, label: "Ready Now" },
              ].map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-100 group cursor-default"
                >
                  <feat.icon className="h-4 w-4 text-teal shrink-0" />
                  <p className="text-xs font-semibold text-charcoal">{feat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/floors"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors group"
            >
              Explore all floors
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/building-unveil.jpg"
                alt="A Mangalore Classic is Back — Central Market Complex new avatar"
                width={1200}
                height={750}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-heading font-bold text-lg">A Mangalore Classic is Back</p>
                <p className="text-white/80 text-sm">Bigger, Better & Brand New</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── CATEGORIES ─── */
const categories = [
  { icon: Smartphone, name: "Mobile Shops", floor: "Any floor" },
  { icon: Stethoscope, name: "Medical Shops", floor: "LG, G, UG" },
  { icon: Gem, name: "Jewellery", floor: "Any floor" },
  { icon: Shirt, name: "Garments", floor: "Any floor" },
  { icon: Watch, name: "Watch Shops", floor: "Any floor" },
  { icon: BookOpen, name: "Book Shops", floor: "Any floor" },
  { icon: Cake, name: "Sweet & Cake", floor: "LG, G, UG" },
  { icon: IceCream, name: "Ice Cream", floor: "Any floor" },
  { icon: Glasses, name: "Spectacles", floor: "Any floor" },
  { icon: Sparkles, name: "Cosmetics", floor: "Any floor" },
  { icon: Flower2, name: "Fancy Shops", floor: "Any floor" },
  { icon: Star, name: "Puja Items", floor: "Any floor" },
  { icon: Scissors, name: "Wooden Craft", floor: "Any floor" },
  { icon: ShoppingBag, name: "Stationery", floor: "Any floor" },
  { icon: Cookie, name: "Cookie & Chocolate", floor: "LG, G, UG" },
];

function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
              Shop Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading">
              Business Space —{" "}
              <span className="text-gradient-teal">Big or Small</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Category icons grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-12">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.name} delay={i * 0.03}>
              <div className="card-lift group rounded-2xl p-5 bg-gray-50 border border-gray-100 text-center cursor-default hover:border-teal/30">
                <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                  <cat.icon className="h-5 w-5 text-teal group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs font-semibold text-charcoal mb-0.5">{cat.name}</p>
                <p className="text-[10px] text-gray-400">{cat.floor}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Brochure shop categories image */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <Image
              src="/images/shop-categories.jpg"
              alt="Shop categories available at Central Market Complex - Mobile, Medical, Electronics, Jewellery, Garments, and more"
              width={1920}
              height={1380}
              className="w-full h-auto"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FLOORS PREVIEW ─── */
const floors = [
  {
    name: "Lower Ground Floor",
    tag: "LG",
    sections: "Level 1: 18 shops + kiosks · Level 2 (Maya Bazaar): 86 shops",
    highlight: "Maya Bazaar · Commercial Shops",
    color: "from-teal to-teal-dark",
  },
  {
    name: "Ground Floor",
    tag: "GF",
    sections: "Super Bazaar: 88 shops · City Bazaar: 29 shops · Commercial: 44 shops + stalls + kiosks",
    highlight: "Super Bazaar · City Bazaar · Individual Shops",
    color: "from-brown to-brown-dark",
  },
  {
    name: "Upper Ground Floor",
    tag: "UGF",
    sections: "Level 1: 86 shops, 20 kiosks, 15 stalls · Level 2: 34 shops",
    highlight: "Retail & Branded Outlets",
    color: "from-teal-dark to-teal",
  },
  {
    name: "1st Floor",
    tag: "1F",
    sections: "100 shops · 20 kiosks · 32 car parking",
    highlight: "Commercial Retail · Parking",
    color: "from-brown-light to-brown",
  },
  {
    name: "2nd Floor",
    tag: "2F",
    sections: "94 shops · 45 car parking",
    highlight: "Commercial Retail · Parking",
    color: "from-teal to-teal-light",
  },
  {
    name: "3rd Floor",
    tag: "3F",
    sections: "32 shops · 10 food stalls · 20 kiosks · 4 restaurants · 1 cafe · food court",
    highlight: "Food Court · Restaurants · Cafe",
    color: "from-brown to-brown-light",
  },
  {
    name: "4th & Terrace Floor",
    tag: "P",
    sections: "Car: 463 + 466 · Two-Wheeler: 207 + 157 · ~2,10,000 sft",
    highlight: "Two-Layer Parking",
    color: "from-charcoal to-gray-600",
  },
];

function FloorsSection() {
  return (
    <section className="py-24 bg-warm relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
                Floor Directory
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading">
                Plans That&apos;ll Have You{" "}
                <span className="text-gradient-teal">Floored</span>
              </h2>
            </div>
            <Link
              href="/floors"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors group shrink-0"
            >
              View all floors
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {floors.map((floor, i) => (
            <AnimatedSection key={floor.tag} delay={i * 0.06}>
              <Link
                href="/floors"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 rounded-2xl bg-white border border-gray-100 hover:border-teal/30 hover:shadow-lg transition-all"
              >
                <div className={`h-14 w-14 rounded-xl bg-linear-to-br ${floor.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold text-sm font-heading">
                    {floor.tag}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-bold text-lg text-charcoal font-heading">{floor.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{floor.sections}</p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {floor.highlight.split(" · ").map((h) => (
                    <span key={h} className="px-3 py-1 rounded-full bg-teal/5 text-teal text-xs font-medium">
                      {h}
                    </span>
                  ))}
                </div>
                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0 hidden sm:block" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PARKING ─── */
function ParkingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
              Parking Facilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading">
              The Only Complex with{" "}
              <span className="text-gradient-teal">1200+ Parking</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Two-layer mechanical parking system across 4th & Terrace floors.
              ~2,10,000 sq ft dedicated parking area.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection direction="left">
            <div className="card-lift rounded-2xl p-8 bg-linear-to-br from-teal to-teal-dark text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Car className="h-8 w-8 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold font-heading mb-2">Car Parking</h3>
              <p className="text-white/70 mb-6 text-sm">
                Multi-level mechanical parking with 24/7 security
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm text-white/70">4th Floor</span>
                  <span className="font-bold">463 spaces</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm text-white/70">Terrace Floor</span>
                  <span className="font-bold">466 spaces</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-medium">Total</span>
                  <span className="text-2xl font-extrabold font-heading">929</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="card-lift rounded-2xl p-8 bg-linear-to-br from-brown to-brown-dark text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Bike className="h-8 w-8 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold font-heading mb-2">Two-Wheeler Parking</h3>
              <p className="text-white/70 mb-6 text-sm">
                Dedicated lanes with easy access ramps
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm text-white/70">4th Floor</span>
                  <span className="font-bold">207 spaces</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-sm text-white/70">Terrace Floor</span>
                  <span className="font-bold">157 spaces</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-medium">Total</span>
                  <span className="text-2xl font-extrabold font-heading">364</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── LOCATION ─── */
function LocationSection() {
  return (
    <section className="py-24 bg-warm relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
              Prime Location
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-charcoal font-heading mb-6">
              At the Centre of{" "}
              <span className="text-gradient-teal">Mangaluru</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Located at the heart of Hampankatta — Mangaluru&apos;s busiest
              commercial hub. Surrounded by iconic landmarks, temples, and
              connected to all major roads and public transport.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Near Hampankatta Junction & Car Street",
                "Walking distance from Sharavu Temple & Town Hall",
                "Connected via KS Rao Road, Bunder Road, Falnir Road",
                "Close to Mangalore Central Railway Station",
                "Near Nehru Maidan, Clock Tower & DC Office",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-teal shrink-0" />
                  <span className="text-sm text-gray-600">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Central+Market+Mangaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors shadow-sm"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href="tel:+917022037291"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-charcoal font-medium rounded-full hover:border-teal/30 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/location-map.png"
                alt="Central Market location map - at the centre of Mangaluru, near Hampankatta"
                width={1920}
                height={1380}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl bg-linear-to-br from-teal to-teal-dark p-12 sm:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mb-6">
                Book Your Prestigious Shop
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Don&apos;t miss your chance to be part of Mangaluru&apos;s most iconic
                commercial destination. Premium spaces filling fast.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg font-heading"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <AboutSection />
      <CategoriesSection />
      <FloorsSection />
      <ParkingSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
