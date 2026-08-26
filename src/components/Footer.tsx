import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const quickLinks = [
  { href: "/floors", label: "Floors & Spaces" },
  { href: "/booking", label: "Book a Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const categories = [
  "Jewellery & Watches",
  "Garments & Fashion",
  "Electronics & Mobile",
  "Food Court & Restaurants",
  "Medical & Cosmetics",
  "Books & Stationery",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Teal accent bar */}
      <div className="h-1 bg-linear-to-r from-teal via-teal-light to-teal" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-11 w-9" color="white" />
              <div>
                <p className="text-sm font-bold tracking-wide font-heading">
                  Central Market
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Complex · Mangaluru
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Mangaluru&apos;s iconic marketplace, reimagined. 500+ shops, kiosks &
              stalls across multiple floors. Ready to occupy.
            </p>
            <p className="text-xs text-gray-500">
              Developed by <span className="text-teal-light">New Mangalore Developers Pvt. Ltd</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-teal-light mb-6 font-heading font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-teal-light mb-6 font-heading font-semibold">
              Shop Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-gray-400">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-teal-light mb-6 font-heading font-semibold">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  6th Floor, Essel Tower,
                  <br />
                  Bunts Hostel Circle,
                  <br />
                  Mangaluru - 575 003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+917022037291" className="block text-sm text-gray-400 hover:text-white transition-colors">
                    +91 70220 37291
                  </a>
                  <a href="tel:+919901699668" className="block text-sm text-gray-400 hover:text-white transition-colors">
                    +91 99016 99668
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal shrink-0" />
                <a
                  href="mailto:newmangalore.developerspvtltd@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors break-all"
                >
                  newmangalore.developerspvtltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Central Market Complex. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Promoter & Chairman: <span className="text-gray-400">B R Somayaji</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
