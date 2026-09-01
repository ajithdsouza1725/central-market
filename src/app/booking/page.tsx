"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Maximize2,
  Tag,
  ChevronDown,
  Send,
  Building2,
  CheckCircle2,
  X,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { allShops as shopData, floorOptions as floors, sectionOptions } from "@/data/shops";

const floorOptions = ["All Floors", ...floors.slice(1)];
const categoryOptions = ["All Categories", ...sectionOptions.slice(1)];
const statusOptions = ["All", "Available", "Booked"];

const ITEMS_PER_PAGE = 30;

export default function BookingPage() {
  const [search, setSearch] = useState("");
  const [floor, setFloor] = useState("All Floors");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedShop, setSelectedShop] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return shopData.filter((shop) => {
      if (search && !shop.id.toLowerCase().includes(search.toLowerCase())) return false;
      if (floor !== "All Floors" && shop.floor !== floor) return false;
      if (category !== "All Categories" && shop.section !== category) return false;
      if (status === "Available" && shop.status !== "available") return false;
      if (status === "Booked" && shop.status !== "booked") return false;
      return true;
    });
  }, [search, floor, category, status]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Reset page when filters change
  const updateFilter = (setter: (v: string) => void, value: string) => {
    setter(value);
    setPage(1);
  };

  return (
    <>
      <section className="pt-28 pb-8 bg-warm relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal/5 rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">
              Shop Booking
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal font-heading mb-4">
              Find Your <span className="text-gradient-teal">Perfect Space</span>
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Browse available retail spaces across all floors. Filter by size,
              category, or floor to find the ideal spot for your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by shop ID (e.g. GF-27)..."
                value={search}
                onChange={(e) => updateFilter(setSearch, e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10 transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select value={floor} onChange={(e) => updateFilter(setFloor, e.target.value)} className="appearance-none pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 cursor-pointer">
                {floorOptions.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select value={category} onChange={(e) => updateFilter(setCategory, e.target.value)} className="appearance-none pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 cursor-pointer">
                {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="flex gap-1 p-1 bg-gray-50 border border-gray-200 rounded-xl">
              {statusOptions.map((s) => (
                <button key={s} onClick={() => updateFilter(setStatus, s)} className={`px-4 py-2 text-sm rounded-lg transition-colors font-medium ${status === s ? "bg-teal text-white shadow-sm" : "text-gray-500 hover:text-charcoal"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 bg-gray-50 min-h-[60vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="text-charcoal font-semibold">{filtered.length}</span> spaces
            {totalPages > 1 && <span> · Page {page} of {totalPages}</span>}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {paginated.map((shop) => (
                <motion.div
                  key={shop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-lift rounded-2xl p-6 bg-white border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-charcoal font-heading">{shop.id}</h3>
                      <div className="flex items-center gap-1.5 mt-1 text-gray-400">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{shop.floor}</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${shop.status === "available" ? "bg-teal/10 text-teal" : "bg-red-50 text-red-500"}`}>
                      {shop.status === "available" ? "Available" : "Booked"}
                    </span>
                  </div>
                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400 flex items-center gap-1.5"><Tag className="h-3 w-3" /> Section</span>
                      <span className="text-sm font-medium text-charcoal">{shop.section}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400 flex items-center gap-1.5"><Maximize2 className="h-3 w-3" /> Size</span>
                      <span className="text-sm font-medium text-charcoal">{shop.size} sq ft</span>
                    </div>
                  </div>
                  {shop.status === "available" ? (
                    <button onClick={() => { setSelectedShop(shop.id); setShowForm(true); setSubmitted(false); }} className="w-full py-3 bg-teal/10 text-teal border border-teal/20 rounded-xl text-sm font-semibold hover:bg-teal hover:text-white transition-colors">
                      Enquire Now
                    </button>
                  ) : (
                    <button disabled className="w-full py-3 bg-gray-50 text-gray-400 border border-gray-200 rounded-xl text-sm cursor-not-allowed">
                      Not Available
                    </button>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-30 hover:border-teal/30 transition-colors">
                Previous
              </button>
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let p: number;
                if (totalPages <= 7) p = i + 1;
                else if (page <= 4) p = i + 1;
                else if (page >= totalPages - 3) p = totalPages - 6 + i;
                else p = page - 3 + i;
                return (
                  <button key={p} onClick={() => setPage(p)} className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${page === p ? "bg-teal text-white" : "border border-gray-200 hover:border-teal/30"}`}>
                    {p}
                  </button>
                );
              })}
              <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-30 hover:border-teal/30 transition-colors">
                Next
              </button>
            </div>
          )}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No shops match your filters.</p>
              <button onClick={() => { setSearch(""); setFloor("All Floors"); setCategory("All Categories"); setStatus("All"); setPage(1); }} className="mt-4 text-teal hover:text-teal-dark transition-colors text-sm font-medium">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" onClick={() => setShowForm(false)} />
            <motion.div className="relative w-full max-w-lg rounded-2xl bg-white border border-gray-200 p-8 shadow-2xl" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}>
              <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors">
                <X className="h-5 w-5" />
              </button>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-teal mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-charcoal font-heading mb-2">Enquiry Sent!</h3>
                  <p className="text-gray-500">Our team will contact you within 24 hours regarding shop <span className="text-teal font-semibold">{selectedShop}</span>.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-teal/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal font-heading">Enquire About Shop</h3>
                      <p className="text-sm text-gray-500">Shop ID: <span className="text-teal font-semibold">{selectedShop}</span></p>
                    </div>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-gray-500 block mb-1.5">Full Name *</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="Your name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-1.5">Phone *</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-1.5">Email *</label>
                        <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="you@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 block mb-1.5">Business Type</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="e.g. Jewellery, Garments, Restaurant" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 block mb-1.5">Message</label>
                      <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10 resize-none" placeholder="Any specific requirements..." />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-colors flex items-center justify-center gap-2 shadow-sm">
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
