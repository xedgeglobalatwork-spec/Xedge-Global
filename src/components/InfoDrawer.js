"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Mail, Phone, Clock } from "lucide-react";
import { company } from "@/data/company";
import SocialIcon from "./SocialIcon";

export default function InfoDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const toggle = () => setOpen((v) => !v);
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("toggle-info-drawer", toggle);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("toggle-info-drawer", toggle);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[80] bg-navy-midnight/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[90] flex w-[90%] max-w-md flex-col overflow-y-auto bg-navy-midnight p-8 text-white md:p-10"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close panel"
              className="mb-10 flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <Image
              src="/logo.png"
              alt="Xedge Global"
              width={160}
              height={50}
              className="mb-6 h-11 w-auto object-contain brightness-0 invert"
            />

            <p className="mb-10 text-sm leading-relaxed text-white/60">
              Architecting financial precision and strategic tax mastery for ambitious
              enterprises across the UK, Europe and the Middle East.
            </p>

            <div className="mb-10 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/20 text-purple-bright">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-white/40">Our Office</div>
                  <div className="text-sm">{company.address}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/20 text-purple-bright">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-white/40">Email Us</div>
                  <a href={company.emailHref} className="text-sm hover:text-purple-bright">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/20 text-purple-bright">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-white/40">Call Us</div>
                  <a href={company.phoneHref} className="text-sm hover:text-purple-bright">
                    {company.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/20 text-purple-bright">
                  <Clock size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-white/40">Office Hours</div>
                  <div className="text-sm">{company.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-auto flex gap-3 border-t border-white/10 pt-6">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-purple"
                >
                  <SocialIcon name={s.label} size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
