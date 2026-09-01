"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Car,
  ShieldCheck,
  Wifi,
  Wind,
  MapPin,
  ChevronRight,
  ChevronDown,
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

/* ─── ANIMATED TEXT REVEAL ─── */
function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ─── FLOATING PARTICLE DOTS ─── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            background: i % 2 === 0
              ? "rgba(0,150,136,0.15)"
              : "rgba(197,165,90,0.12)",
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/building-wide.jpg"
          alt="Central Market Complex - Mangaluru panoramic view"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/20" />
        <div className="absolute inset-0 bg-linear-to-t from-white/90 via-transparent to-white/30" />
      </motion.div>

      <FloatingParticles />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal/8 border border-teal/15 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-ping opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal">
                Ready to Occupy
              </span>
            </motion.div>

            {/* Headline with staggered text reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight leading-[1.08] text-charcoal font-heading mb-6">
              <TextReveal delay={0.15}>The Next Big Move</TextReveal>
              <br />
              <span className="text-gradient-mixed">
                <TextReveal delay={0.3}>For Your Business</TextReveal>
              </span>
              <br />
              <TextReveal delay={0.45}>Starts Here</TextReveal>
            </h1>

            {/* Gold accent line */}
            <motion.div
              className="h-0.75 w-16 rounded-full mb-8"
              style={{ background: "linear-gradient(90deg, #009688, #c5a55a)" }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 64, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Mangaluru&apos;s most iconic marketplace, reimagined into a world-class
              commercial complex. 500+ shops, kiosks & stalls. 1200+ parking spaces.
              Fully air-conditioned.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-all shadow-[0_4px_24px_rgba(0,150,136,0.35)] hover:shadow-[0_8px_32px_rgba(0,150,136,0.5)] font-heading shine-hover"
              >
                Book Your Shop
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/floors"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-charcoal/15 text-charcoal font-semibold rounded-full hover:border-teal hover:text-teal hover:bg-teal/5 transition-all font-heading backdrop-blur-sm"
              >
                Explore Floors
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-gray-200/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {[
                { val: "500+", label: "Shops & Stalls" },
                { val: "1200+", label: "Parking Spaces" },
                { val: "100%", label: "Centralised AC" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <p className="text-2xl font-extrabold text-charcoal font-heading">{s.val}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Building image with floating badges */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full">
              {/* Decorative blobs behind image */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal/8 rounded-full blur-3xl animate-blob" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

              {/* Main building image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50 relative">
                <Image
                  src="/images/hero.jpg"
                  alt="Central Market Complex Mangaluru"
                  width={1920}
                  height={1380}
                  className="w-full h-auto"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Floating badge — Parking */}
              <motion.div
                className="absolute -top-4 -left-6 rounded-2xl bg-white/95 backdrop-blur-lg p-4 shadow-xl border border-white/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Car className="h-6 w-6 text-teal mb-1.5" />
                <p className="text-xl font-bold text-charcoal font-heading">1200+</p>
                <p className="text-[10px] text-gray-500">Parking Spaces</p>
              </motion.div>

              {/* Floating badge — AC */}
              <motion.div
                className="absolute top-10 -right-4 rounded-xl bg-white/95 backdrop-blur-lg px-4 py-3 shadow-lg border border-white/50 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <div className="h-9 w-9 rounded-lg bg-linear-to-br from-teal/20 to-teal/5 flex items-center justify-center">
                  <Wind className="h-4 w-4 text-teal" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">100% AC</p>
                  <p className="text-[10px] text-gray-500">Centralised</p>
                </div>
              </motion.div>

              {/* Floating badge — Ready */}
              <motion.div
                className="absolute -bottom-4 left-8 rounded-xl bg-linear-to-r from-gold-dark to-gold text-white px-5 py-3 shadow-lg flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <Zap className="h-4 w-4" />
                <p className="text-sm font-bold font-heading">Ready to Occupy</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <ChevronDown className="h-4 w-4 text-gray-400 scroll-indicator" />
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
    <section className="py-6 bg-white overflow-hidden border-y border-gray-100/80">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 mx-8 text-gray-400 hover:text-teal transition-colors duration-300 cursor-default group"
          >
            <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-gray-200 ml-6">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── STATS — with 3D tilt ─── */
const stats = [
  { value: 500, suffix: "+", label: "Shops, Kiosks & Stalls", icon: Building2, gradient: "from-teal to-teal-dark" },
  { value: 1200, suffix: "+", label: "Car Parking Spaces", icon: Car, gradient: "from-gold-dark to-gold" },
  { value: 500, suffix: "+", label: "Two-Wheeler Parking", icon: Bike, gradient: "from-teal-dark to-teal" },
  { value: 210000, suffix: "", label: "Sq Ft Parking Area", icon: MapPin, gradient: "from-gold to-gold-light" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <AnimatedSection delay={index * 0.12} direction="scale">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="rounded-2xl p-7 bg-white border border-gray-100 text-center group cursor-default shadow-sm hover:shadow-xl transition-shadow duration-500 relative overflow-hidden"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-teal/3 to-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className={`relative mx-auto mb-4 h-14 w-14 rounded-2xl bg-linear-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
          <stat.icon className="h-6 w-6 text-white" />
        </div>
        <p className="relative text-3xl sm:text-4xl font-extrabold text-charcoal font-heading">
          <Counter end={stat.value} suffix={stat.suffix} />
        </p>
        <p className="relative text-sm text-gray-500 mt-1.5">{stat.label}</p>
      </motion.div>
    </AnimatedSection>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT / USP ─── */
function AboutSection() {
  return (
    <section className="py-28 bg-warm relative overflow-hidden noise-bg">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold font-heading mb-4">
              About the Project
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-charcoal font-heading mb-4">
              A Legacy{" "}
              <span className="text-gradient-mixed">Reimagined</span>
            </h2>
            <motion.div
              className="h-0.75 w-16 rounded-full mb-8"
              style={{ background: "linear-gradient(90deg, #009688, #c5a55a)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
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
              ].map((feat, i) => (
                <motion.div
                  key={feat.label}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-gray-100 group cursor-default shadow-sm hover:shadow-md hover:border-teal/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <feat.icon className="h-4 w-4 text-teal shrink-0" />
                  <p className="text-xs font-semibold text-charcoal">{feat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/floors"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors group"
            >
              Explore all floors
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-teal/10 via-transparent to-gold/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
                <Image
                  src="/images/building-unveil.jpg"
                  alt="A Mangalore Classic is Back — Central Market Complex new avatar"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 via-black/20 to-transparent p-6">
                  <p className="text-white font-heading font-bold text-lg">A Mangalore Classic is Back</p>
                  <p className="text-white/80 text-sm">Bigger, Better & Brand New</p>
                </div>
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
    <section className="py-28 bg-white relative dot-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold font-heading mb-4">
              Shop Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading">
              Business Space —{" "}
              <span className="text-gradient-mixed">Big or Small</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Category icons grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-12">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.name} delay={i * 0.04} direction="scale">
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                className="card-lift group rounded-2xl p-5 bg-white border border-gray-100 text-center cursor-default hover:border-teal/30 shadow-sm hover:shadow-lg transition-all duration-300 shine-hover"
              >
                <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-linear-to-br from-teal/10 to-teal/5 flex items-center justify-center group-hover:from-teal group-hover:to-teal-dark transition-all duration-300">
                  <cat.icon className="h-5 w-5 text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-xs font-bold text-charcoal mb-0.5">{cat.name}</p>
                <p className="text-[10px] text-gray-400">{cat.floor}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Brochure shop categories image */}
        <AnimatedSection delay={0.2} direction="scale">
          <div className="rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl">
            <Image
              src="/images/shop-categories.jpg"
              alt="Shop categories available at Central Market Complex"
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
    planImage: "/images/floor-plan-ground.png",
  },
  {
    name: "Ground Floor",
    tag: "GF",
    sections: "Super Bazaar: 88 shops · City Bazaar: 29 shops · Commercial: 44 shops + stalls + kiosks",
    highlight: "Super Bazaar · City Bazaar · Individual Shops",
    color: "from-gold-dark to-gold",
    planImage: "/images/floor-plan-ground.png",
  },
  {
    name: "Upper Ground Floor",
    tag: "UGF",
    sections: "Level 1: 86 shops, 20 kiosks, 15 stalls · Level 2: 34 shops",
    highlight: "Retail & Branded Outlets",
    color: "from-teal-dark to-teal",
    planImage: "/images/floor-plan-upper-ground.png",
  },
  {
    name: "1st Floor",
    tag: "1F",
    sections: "3 Anchor Shops · 1 Mini Anchor · 32 retail shops · 2 kiosks · Parking",
    highlight: "Anchor Shops · Retail · Parking",
    color: "from-gold to-gold-light",
    planImage: "/images/floor-plan-1st-2nd.png",
  },
  {
    name: "2nd Floor",
    tag: "2F",
    sections: "3 Anchor Shops · 1 Mini Anchor · 27 retail shops · Parking",
    highlight: "Anchor Shops · Retail · Parking",
    color: "from-teal to-teal-light",
    planImage: "/images/floor-plan-1st-2nd.png",
  },
  {
    name: "3rd Floor",
    tag: "3F",
    sections: "Food Court · 8 food stalls · Fun Center · Home Furniture · 2 restaurants · Cafe · 18 shops",
    highlight: "Food Court · Fun Center · Restaurants",
    color: "from-gold-dark to-gold",
    planImage: "/images/floor-plan-3rd.png",
  },
  {
    name: "4th & Terrace Floor",
    tag: "P",
    sections: "Car: 463 + 466 · Two-Wheeler: 207 + 157 · ~2,10,000 sft",
    highlight: "Two-Layer Parking",
    color: "from-charcoal to-gray-600",
    planImage: "/images/floor-plan-parking.jpg",
  },
];

function FloorsSection() {
  return (
    <section className="py-28 bg-warm relative overflow-hidden noise-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold font-heading mb-4">
                Floor Directory
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading">
                Plans That&apos;ll Have You{" "}
                <span className="text-gradient-mixed">Floored</span>
              </h2>
            </div>
            <Link
              href="/floors"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors group shrink-0"
            >
              View all floors
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {floors.map((floor, i) => (
            <AnimatedSection key={floor.tag} delay={i * 0.07}>
              <Link
                href="/floors"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 rounded-2xl bg-white border border-gray-100/80 hover:border-teal/25 hover:shadow-xl transition-all duration-400 shine-hover"
              >
                <motion.div
                  className={`h-14 w-14 rounded-xl bg-linear-to-br ${floor.color} flex items-center justify-center shrink-0 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-sm font-heading">
                    {floor.tag}
                  </span>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-bold text-lg text-charcoal font-heading group-hover:text-teal transition-colors">{floor.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{floor.sections}</p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {floor.highlight.split(" · ").map((h) => (
                    <span key={h} className="px-3 py-1 rounded-full bg-teal/5 text-teal text-xs font-medium border border-teal/10">
                      {h}
                    </span>
                  ))}
                </div>
                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-teal group-hover:translate-x-1.5 transition-all shrink-0 hidden sm:block" />
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
    <section className="py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold font-heading mb-4">
              Parking Facilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading">
              The Only Complex with{" "}
              <span className="text-gradient-mixed">1200+ Parking</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Two-layer mechanical parking system across 4th & Terrace floors.
              ~2,10,000 sq ft dedicated parking area.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection direction="left">
            <div className="card-lift rounded-2xl p-8 bg-linear-to-br from-teal via-teal-dark to-teal text-white relative overflow-hidden shine-hover">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-sm" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              <Car className="h-8 w-8 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold font-heading mb-2">Car Parking</h3>
              <p className="text-white/70 mb-6 text-sm">Multi-level mechanical parking with 24/7 security</p>
              <div className="space-y-3">
                {[
                  { floor: "4th Floor", count: "463 spaces" },
                  { floor: "Terrace Floor", count: "466 spaces" },
                ].map((item) => (
                  <div key={item.floor} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-sm text-white/70">{item.floor}</span>
                    <span className="font-bold">{item.count}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm font-medium">Total</span>
                  <span className="text-2xl font-extrabold font-heading">929</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.12}>
            <div className="card-lift rounded-2xl p-8 bg-linear-to-br from-gold-dark via-gold to-gold-light text-white relative overflow-hidden shine-hover">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-sm" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
              <Bike className="h-8 w-8 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold font-heading mb-2">Two-Wheeler Parking</h3>
              <p className="text-white/70 mb-6 text-sm">Dedicated lanes with easy access ramps</p>
              <div className="space-y-3">
                {[
                  { floor: "4th Floor", count: "207 spaces" },
                  { floor: "Terrace Floor", count: "157 spaces" },
                ].map((item) => (
                  <div key={item.floor} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-sm text-white/70">{item.floor}</span>
                    <span className="font-bold">{item.count}</span>
                  </div>
                ))}
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

/* ─── WHY CHOOSE US ─── */
function WhyChooseSection() {
  const reasons = [
    { icon: MapPin, title: "Prime Location", desc: "Heart of Hampankatta — Mangaluru's busiest commercial hub. Near Car Street, Town Hall, Nehru Maidan." },
    { icon: Building2, title: "Modern Infrastructure", desc: "Brand new multi-storey complex with wide corridors (3m–4.5m), multiple lifts, escalators, and driveways." },
    { icon: Wind, title: "Fully Centralised AC", desc: "100% air-conditioned across all floors. Comfortable shopping experience year-round." },
    { icon: Car, title: "1200+ Parking", desc: "Two-layer mechanical parking. 929 cars + 364 two-wheelers. ~2,10,000 sft dedicated area." },
    { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock security with CCTV surveillance, fire safety systems, and dedicated security personnel." },
    { icon: Users, title: "High Footfall Area", desc: "Surrounded by temples, offices, schools, hospitals. Guaranteed daily footfall from Mangaluru's densest area." },
  ];

  return (
    <section className="py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold font-heading mb-4">
              Why Central Market
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading text-balance">
              The Smart Choice for{" "}
              <span className="text-gradient-mixed">Your Business</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08} direction="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className="gradient-border rounded-2xl p-7 bg-white h-full shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="h-13 w-13 rounded-xl bg-linear-to-br from-teal/15 to-teal/5 flex items-center justify-center mb-5 group-hover:from-teal group-hover:to-teal-dark transition-all duration-300">
                  <r.icon className="h-6 w-6 text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-charcoal font-heading mb-2 group-hover:text-teal transition-colors">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── LOCATION ─── */
function LocationSection() {
  return (
    <section className="py-28 bg-warm relative overflow-hidden noise-bg">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold font-heading mb-4">
              Prime Location
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-charcoal font-heading mb-4">
              At the Centre of{" "}
              <span className="text-gradient-mixed">Mangaluru</span>
            </h2>
            <motion.div
              className="h-0.75 w-16 rounded-full mb-8"
              style={{ background: "linear-gradient(90deg, #009688, #c5a55a)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
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
              ].map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="h-2 w-2 rounded-full bg-linear-to-r from-teal to-gold shrink-0" />
                  <span className="text-sm text-gray-600">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Central+Market+Mangaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors shadow-[0_4px_16px_rgba(0,150,136,0.3)] shine-hover"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href="tel:+917022037291"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-charcoal font-medium rounded-full hover:border-teal/30 hover:text-teal transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-teal/10 via-transparent to-gold/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl">
                <Image
                  src="/images/location-map.png"
                  alt="Central Market location map - at the centre of Mangaluru"
                  width={1920}
                  height={1380}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── DEVELOPER TRUST ─── */
function DeveloperSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="scale">
          <div className="rounded-2xl bg-linear-to-r from-warm to-warm-dark border border-gray-100 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="shrink-0">
              <div className="h-20 w-20 rounded-2xl bg-linear-to-br from-teal to-teal-dark flex items-center justify-center shadow-lg glow-teal">
                <Building2 className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-teal font-bold mb-2">Developed By</p>
              <h3 className="text-2xl font-bold text-charcoal font-heading mb-1">
                New Mangalore Developers Pvt. Ltd
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Promoter & Chairman: <span className="text-charcoal font-medium">B R Somayaji</span>
              </p>
              <p className="text-sm text-gray-500">
                6th Floor, Essel Tower, Bunts Hostel Circle, Mangaluru - 575 003
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="tel:+917022037291"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors text-sm shadow-[0_4px_16px_rgba(0,150,136,0.3)] shine-hover"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-28 bg-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="scale">
          <div className="rounded-3xl bg-linear-to-br from-charcoal via-charcoal to-teal-dark p-12 sm:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/8 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8 backdrop-blur-sm"
              >
                <Zap className="h-3.5 w-3.5 text-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">Limited Availability</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mb-6">
                Book Your <span className="text-gradient-gold">Prestigious</span> Shop
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Don&apos;t miss your chance to be part of Mangaluru&apos;s most iconic
                commercial destination. Premium spaces filling fast.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-linear-to-r from-gold-dark to-gold text-white font-bold rounded-full hover:from-gold hover:to-gold-light transition-all shadow-[0_4px_24px_rgba(197,165,90,0.4)] font-heading shine-hover"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
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
      <WhyChooseSection />
      <LocationSection />
      <DeveloperSection />
      <CTASection />
    </>
  );
}
