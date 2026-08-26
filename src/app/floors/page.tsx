"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Building2,
  Car,
  Store,
  Utensils,
  ShoppingBag,
  Bike,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";

const floorsData = [
  {
    id: "lg",
    name: "Lower Ground Floor",
    icon: Store,
    color: "from-teal to-teal-dark",
    planImage: "/images/floor-plan-ground.png",
    levels: [
      { name: "Level 1 — Commercial Shops", shops: 18, kiosks: 5, area: "265–690 sft", details: "18 commercial shops (LG-01 to LG-18) plus 5 kiosks. Connected to Maya Bazaar and upper floors via escalators." },
      { name: "Level 2 — Maya Bazaar", shops: 86, kiosks: 9, area: "55–1330 sft", details: "86 shops spread across 11 zones (LG II-1 to LG II-11). Fully centralised AC. Connected to Super Bazaar at ground level." },
    ],
    keyFeatures: [
      "Connected to Super Bazaar at Ground Floor level",
      "2.0m–2.33m wide corridors for comfortable shopping",
      "Multiple entry/exit points with UP ramps",
      "Lifts (2.10x2.50 and 2.50x2.50) for accessibility",
      "Dedicated electrical panel room & store rooms",
    ],
  },
  {
    id: "gf",
    name: "Ground Floor",
    icon: Building2,
    color: "from-brown to-brown-dark",
    planImage: "/images/floor-plan-ground.png",
    levels: [
      { name: "Super Bazaar", shops: 88, kiosks: 0, area: "100–600 sft", details: "General stalls (GS-01 to GS-118) and shops. Includes daily vendors area with 30 veg vendor spots. Wide 3.05m corridors." },
      { name: "City Bazaar", shops: 29, kiosks: 2, area: "90–765 sft", details: "29 shops (GF-38 to GF-50) and 2 kiosks. Separate wing with electrical room and dedicated access." },
      { name: "Individual Commercial Shops", shops: 44, kiosks: 23, area: "120–2405 sft", details: "Large-format commercial shops (GF-01 to GF-37, GF-51 to GF-80). Includes massive anchor spaces like GF-20+21 (2405 sft), GF-27 (2025 sft), GF-22 (1885 sft). 4.0m–4.4m wide main corridors. Sliding glass entrances." },
    ],
    keyFeatures: [
      "Multiple main entries with sliding glass doors",
      "Entry to Super Bazaar with welcome/thank-you zones",
      "Raj Marg corridors (4.0m–4.4m wide)",
      "2/4 wheeler entry with cash counters",
      "Parking kiosk & security at entry",
      "Connected to Maya Bazaar (Lower Ground) and City Bazaar",
    ],
  },
  {
    id: "ugf",
    name: "Upper Ground Floor",
    icon: ShoppingBag,
    color: "from-teal-dark to-teal",
    planImage: "/images/floor-plan-upper-ground.png",
    levels: [
      { name: "Level 1 — Main Retail", shops: 86, kiosks: 20, area: "150–5420 sft", details: "86 shops (UG-01 to UG-78), 20 kiosks (UG-K1 to K20), 15 general stalls. Massive anchor spaces including UG-26+27+60+61+62+63+68+69+70+75+76 (5420 sft). 4.50m wide driveways." },
      { name: "Level 2 — Additional Retail", shops: 34, kiosks: 0, area: "Various", details: "34 additional shops (UGS series). Includes general stalls (UGS-139 to UGS-148). Connected via lift lobbies." },
    ],
    keyFeatures: [
      "4.50m wide driveways for vehicle access",
      "3.05m wide shopping corridors throughout",
      "Multiple lift lobbies with 16P and 20P lifts",
      "Janitor rooms and dedicated toilets on each wing",
      "Electrical rooms on multiple sections",
    ],
  },
  {
    id: "1f",
    name: "1st Floor",
    icon: Store,
    color: "from-brown-light to-brown",
    planImage: "/images/floor-plan-1st-2nd.png",
    levels: [
      { name: "Commercial Shops & Kiosks", shops: 100, kiosks: 20, area: "Various", details: "100 shops and 20 kiosks. One of the largest retail floors. Includes 32 car parking spaces integrated into the layout." },
    ],
    keyFeatures: [
      "100 retail shops — largest shop floor",
      "20 kiosks for smaller businesses",
      "Integrated 32 car parking spaces",
      "Wide corridors for comfortable shopping",
      "Multiple lift and escalator access points",
    ],
  },
  {
    id: "2f",
    name: "2nd Floor",
    icon: Store,
    color: "from-teal to-teal-light",
    planImage: "/images/floor-plan-1st-2nd.png",
    levels: [
      { name: "Commercial Shops", shops: 94, kiosks: 0, area: "Various", details: "94 shops with integrated parking. 45 car parking spaces on this level. Connected to 1st and 3rd floors via lifts and escalators." },
    ],
    keyFeatures: [
      "94 commercial retail shops",
      "45 integrated car parking spaces",
      "Connected to all other floors",
      "Centrally air-conditioned",
    ],
  },
  {
    id: "3f",
    name: "3rd Floor",
    icon: Utensils,
    color: "from-brown to-brown-light",
    planImage: "/images/floor-plan-3rd.png",
    levels: [
      { name: "Food & Retail", shops: 32, kiosks: 20, area: "Various", details: "32 shops (TF-01 to TF-32), 10 food stalls (FC-1 to FC-10), 20 kiosks. 4 full restaurants and 1 cafe with food court. 300 seating capacity in food court area. Car parking: Level 1 - 45, Level 2 - 21." },
    ],
    keyFeatures: [
      "4 full restaurants + 1 cafe",
      "Food court with 300 seating capacity",
      "10 dedicated food stalls (FC-1 to FC-10)",
      "Hot wash and dish wash areas",
      "Car parking on two levels (45 + 21 = 66 spaces)",
      "20 kiosks for grab-and-go businesses",
    ],
  },
  {
    id: "4f",
    name: "4th & Terrace Floor",
    icon: Car,
    color: "from-charcoal to-gray-600",
    planImage: "/images/floor-plan-parking.jpg",
    levels: [
      { name: "Two-Layer Mechanical Parking", shops: 0, kiosks: 0, area: "~2,10,000 sft", details: "Car Parking — 4th Floor: 463, Terrace Floor: 466 (Total: 929). Two-Wheeler — 4th Floor: 207, Terrace Floor: 157 (Total: 364). Mechanical parking system with driveways and covered terraces." },
    ],
    keyFeatures: [
      "929 car parking spaces total",
      "364 two-wheeler spaces total",
      "Mechanical parking system",
      "Multiple driveways for easy access",
      "Covered terrace sections",
      "Lift lobbies for direct floor access",
      "Services rooms and electrical infrastructure",
    ],
  },
];

function FloorCard({
  floor,
  isOpen,
  onToggle,
}: {
  floor: (typeof floorsData)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = floor.icon;
  const totalShops = floor.levels.reduce((s, l) => s + l.shops, 0);
  const totalKiosks = floor.levels.reduce((s, l) => s + l.kiosks, 0);

  return (
    <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-teal/20 hover:shadow-md transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-6 sm:p-8 text-left cursor-pointer"
      >
        <div className={`h-14 w-14 rounded-xl bg-linear-to-br ${floor.color} flex items-center justify-center shrink-0`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-charcoal font-heading">{floor.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            {totalShops > 0 && `${totalShops} shops`}
            {totalKiosks > 0 && ` · ${totalKiosks} kiosks`}
            {floor.levels.length > 1 && ` · ${floor.levels.length} levels`}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          {totalShops > 0 && (
            <div className="text-center">
              <p className="text-2xl font-bold text-charcoal font-heading">{totalShops}</p>
              <p className="text-xs text-gray-400">Shops</p>
            </div>
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-8 border-t border-gray-100 pt-6">
              {/* Levels */}
              <div className="space-y-4 mb-8">
                {floor.levels.map((level) => (
                  <div key={level.name} className="rounded-xl p-5 bg-gray-50 border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-charcoal font-heading">{level.name}</h4>
                      <div className="flex gap-3 text-right">
                        {level.shops > 0 && (
                          <div>
                            <p className="text-lg font-bold text-teal">{level.shops}</p>
                            <p className="text-[10px] text-gray-400">Shops</p>
                          </div>
                        )}
                        {level.kiosks > 0 && (
                          <div>
                            <p className="text-lg font-bold text-brown">{level.kiosks}</p>
                            <p className="text-[10px] text-gray-400">Kiosks</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{level.details}</p>
                    {level.area !== "Various" && (
                      <p className="text-xs text-teal font-medium mt-2">Area: {level.area}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Floor Plan Image */}
              {floor.planImage && (
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
                    Floor Plan
                  </h4>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={floor.planImage}
                      alt={`${floor.name} floor plan`}
                      width={1920}
                      height={1380}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* Key Features */}
              <h4 className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {floor.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors shadow-sm"
              >
                View Available Shops
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FloorsPage() {
  const [openFloor, setOpenFloor] = useState<string | null>("gf");

  return (
    <>
      <section className="pt-28 pb-12 bg-warm relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal/5 rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
              Floor Directory
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal font-heading mb-4">
              Plans That&apos;ll Have You{" "}
              <span className="text-gradient-teal">Floored</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mb-10">
              Every floor is uniquely designed for a specific commercial experience.
              Click on any floor to explore its layout, shops, and available spaces.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="rounded-xl p-4 bg-white border border-gray-100 text-center shadow-sm">
                <p className="text-2xl font-bold text-teal font-heading">
                  <Counter end={500} suffix="+" />
                </p>
                <p className="text-xs text-gray-500 mt-1">Total Shops</p>
              </div>
              <div className="rounded-xl p-4 bg-white border border-gray-100 text-center shadow-sm">
                <p className="text-2xl font-bold text-brown font-heading">
                  <Counter end={7} />
                </p>
                <p className="text-xs text-gray-500 mt-1">Floor Levels</p>
              </div>
              <div className="rounded-xl p-4 bg-white border border-gray-100 text-center shadow-sm">
                <p className="text-2xl font-bold text-charcoal font-heading">
                  <Counter end={1293} />
                </p>
                <p className="text-xs text-gray-500 mt-1">Parking Spots</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {floorsData.map((floor, i) => (
              <AnimatedSection key={floor.id} delay={i * 0.05}>
                <FloorCard
                  floor={floor}
                  isOpen={openFloor === floor.id}
                  onToggle={() => setOpenFloor(openFloor === floor.id ? null : floor.id)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl bg-linear-to-br from-teal to-teal-dark p-12 text-center text-white">
              <Building2 className="h-10 w-10 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold font-heading mb-4">
                Ready to Book Your Space?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Contact our team for detailed floor plans, pricing, and site visits.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-bold rounded-full hover:bg-gray-100 transition-all font-heading"
              >
                Browse Available Shops
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
