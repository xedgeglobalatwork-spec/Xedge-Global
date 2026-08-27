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
            className="fixed top-0 right-0 bottom-0 z-[90] flex w-[90%] max-w-md flex-col overflow-y-auto bg-white p-8 text-slate-dark shadow-2xl md:p-10"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close panel"
              className="mb-10 flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full bg-bg-soft text-slate-dark transition-colors hover:bg-border-light"
            >
              <X size={20} />
            </button>

            <Image
              src="/headerLogo.png"
              alt="Xedge Global"
              width={160}
              height={50}
              className="mb-6 h-16 w-auto object-contain"
            />

            <p className="mb-10 text-sm leading-relaxed text-slate-body">
              Architecting financial precision and strategic tax mastery for ambitious
              enterprises across the UK, Europe and the Middle East.
            </p>

            <div className="mb-10 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-slate-light">Our Office</div>
                  <div className="text-sm font-semibold text-slate-dark">{company.address}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-slate-light">Email Us</div>
                  <a
                    href={company.emailHref}
                    className="text-sm font-semibold text-slate-dark hover:text-purple"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-slate-light">Call Us</div>
                  <a
                    href={company.phoneHref}
                    className="text-sm font-semibold text-slate-dark hover:text-purple"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple/10 text-purple">
                  <Clock size={18} />
                </span>
                <div>
                  <div className="mb-1 text-xs text-slate-light">Office Hours</div>
                  <div className="text-sm font-semibold text-slate-dark">{company.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-auto flex gap-3 border-t border-border-light pt-6">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-slate-dark transition-colors hover:border-purple hover:bg-purple hover:text-white"
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
