"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Grip } from "lucide-react";
import { company, mainNav } from "@/data/company";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-white/85 backdrop-blur-xl ${
          scrolled ? "shadow-[0_4px_24px_rgba(15,43,92,0.1)]" : ""
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Xedge Global"
                width={160}
                height={50}
                className="h-9 md:h-11 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {mainNav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative py-2 text-sm font-semibold tracking-wide transition-colors ${
                      active ? "text-purple" : "text-slate-dark hover:text-purple"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-purple"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href={company.phoneHref} className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald/15">
                  <span className="absolute inset-0 rounded-full animate-radar" />
                  <Phone size={16} className="relative z-10 text-emerald" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] text-slate-light">Have a Question?</span>
                  <span className="text-sm font-bold text-slate-dark">{company.phone}</span>
                </span>
              </a>
              <button
                onClick={() => window.dispatchEvent(new Event("toggle-info-drawer"))}
                aria-label="More information"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-slate-dark transition-colors hover:border-purple hover:text-purple"
              >
                <Grip size={18} />
              </button>
              <Button href="/contact" variant="primary" className="!px-6 !py-3.5 text-sm">
                Let&apos;s Discuss
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-soft text-slate-dark lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not a descendant: `header` has
        backdrop-blur (backdrop-filter), which per the CSS spec creates a new
        containing block for `position: fixed` descendants. Nesting this
        drawer inside header would trap it inside header's own box instead of
        covering the viewport.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-navy-midnight/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] flex w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border-light p-6">
                <Image
                  src="/logo.png"
                  alt="Xedge Global"
                  width={130}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-soft"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-6 overflow-y-auto">
                {mainNav.map((item) => {
                  const active =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`border-b border-border-light py-3.5 text-base font-semibold ${
                        active ? "text-purple" : "text-slate-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto space-y-4 border-t border-border-light p-6">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-dark"
                >
                  <Phone size={18} className="text-emerald" /> {company.phone}
                </a>
                <Button href="/contact" variant="primary" className="w-full justify-center">
                  Let&apos;s Discuss
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
