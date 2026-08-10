"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-midnight pt-32 pb-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="https://themeht.com/video/bizfic1-new.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-midnight/40 via-navy-midnight/28 to-navy-midnight/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-midnight/32 via-navy-midnight/18 to-navy-midnight/5" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          UK &middot; Europe &middot; Middle East
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-[36px] font-extrabold leading-[1.1] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-[68px]"
        >
          Architecting Financial Precision &amp; Strategic Tax Mastery for Ambitious
          Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] md:text-lg"
        >
          We serve growing businesses across the UK, Europe and the Middle East with
          chartered accounting, forensic tax recovery and board-level advisory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10"
        >
          <Button href="/contact" variant="primary">
            Contact Us Today
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-12 border-t border-white/10 pt-10"
        >
          <StatCounter target={2520} suffix="+" label="Tasks & Filings Completed" light />
          <StatCounter target={3600} suffix="+" label="Businesses Supported Worldwide" light />
        </motion.div>
      </div>
    </section>
  );
}
