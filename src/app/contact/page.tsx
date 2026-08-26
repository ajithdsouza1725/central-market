"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  User,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "6th Floor, Essel Tower", sub: "Bunts Hostel Circle, Mangaluru - 575 003" },
  { icon: Phone, label: "Call Us", value: "+91 70220 37291", sub: "+91 99016 99668", href: "tel:+917022037291" },
  { icon: Mail, label: "Email Us", value: "newmangalore.developerspvtltd@gmail.com", href: "mailto:newmangalore.developerspvtltd@gmail.com" },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat: 10 AM – 6 PM", sub: "Sunday: By Appointment" },
];

const inquiryTypes = ["Shop Booking", "Pricing Enquiry", "Floor Plan Request", "Site Visit", "Partnership", "General Enquiry"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  return (
    <>
      <section className="pt-28 pb-12 bg-warm relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal/5 rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold font-heading mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal font-heading mb-4">
              Let&apos;s Start a{" "}
              <span className="text-gradient-teal">Conversation</span>
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Questions about available spaces, pricing, or want to schedule a
              site visit? Our team is ready to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-12 bg-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.label} delay={i * 0.06}>
                <div className="card-lift rounded-2xl p-6 bg-white border border-gray-100 h-full">
                  <div className="h-10 w-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                    <info.icon className="h-5 w-5 text-teal" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium text-charcoal hover:text-teal transition-colors break-all">{info.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-charcoal">{info.value}</p>
                  )}
                  {info.sub && <p className="text-xs text-gray-400 mt-1">{info.sub}</p>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <AnimatedSection className="lg:col-span-3">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 sm:p-10">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                    <CheckCircle2 className="h-20 w-20 text-teal mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-charcoal font-heading mb-3">Message Sent!</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-8">Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="px-6 py-3 border-2 border-gray-200 rounded-full text-sm font-medium hover:border-teal/30 transition-colors">Send Another Message</button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-10 w-10 rounded-xl bg-teal/10 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-teal" />
                      </div>
                      <h2 className="text-xl font-bold text-charcoal font-heading">Send Us a Message</h2>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">Full Name *</label>
                          <input required type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">Phone *</label>
                          <input required type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-1.5">Email *</label>
                        <input required type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10" placeholder="you@email.com" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-3">Inquiry Type *</label>
                        <div className="flex flex-wrap gap-2">
                          {inquiryTypes.map((type) => (
                            <button key={type} type="button" onClick={() => setSelectedType(type)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedType === type ? "bg-teal text-white shadow-sm" : "bg-white border border-gray-200 text-gray-500 hover:border-teal/30"}`}>
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">Preferred Floor</label>
                          <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-500 focus:outline-none focus:border-teal/50 appearance-none cursor-pointer">
                            <option>Any floor</option>
                            <option>Lower Ground</option>
                            <option>Ground Floor</option>
                            <option>Upper Ground</option>
                            <option>1st Floor</option>
                            <option>2nd Floor</option>
                            <option>3rd Floor</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500 block mb-1.5">Shop Size</label>
                          <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-500 focus:outline-none focus:border-teal/50 appearance-none cursor-pointer">
                            <option>Any size</option>
                            <option>Under 200 sq ft</option>
                            <option>200 - 500 sq ft</option>
                            <option>500 - 1000 sq ft</option>
                            <option>1000+ sq ft</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-500 block mb-1.5">Message *</label>
                        <textarea required rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10 resize-none" placeholder="Tell us about your requirements..." />
                      </div>
                      <button type="submit" className="w-full py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,150,136,0.3)]">
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-2 space-y-6">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-72 bg-gray-100 shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d74.843!3d12.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCentral+Market+Mangaluru!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Central Market Location" />
              </div>

              {/* Site Visit CTA */}
              <div className="rounded-2xl p-6 bg-linear-to-br from-teal to-teal-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <Building2 className="h-8 w-8 mb-4 opacity-80" />
                <h3 className="font-bold text-lg font-heading mb-2">Schedule a Site Visit</h3>
                <p className="text-sm text-white/80 mb-4">See the spaces in person. Guided tours available.</p>
                <a href="tel:+917022037291" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-teal font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  Call to Schedule
                </a>
              </div>

              {/* Developer info */}
              <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brown/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-brown" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">B R Somayaji</p>
                    <p className="text-xs text-gray-400">Promoter & Chairman</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium">New Mangalore Developers Pvt. Ltd</p>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/917022037291?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20shop%20at%20Central%20Market%20Complex." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl p-6 bg-white border border-gray-100 hover:border-emerald-300 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Chat on WhatsApp</p>
                  <p className="text-xs text-gray-400">Quick replies during business hours</p>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
