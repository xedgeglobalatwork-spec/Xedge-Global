"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHero({ title, breadcrumb, image = "/images/page-hero.jpg" }) {
  return (
    <section className="relative overflow-hidden bg-navy-midnight pt-40 pb-24 md:pt-48 md:pb-28">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={image}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src="https://themeht.com/video/bizfic1-new.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-midnight/75 via-navy-midnight/65 to-navy-midnight/90" />
      <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm text-white/70"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-cyan-glow">{breadcrumb}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-3xl text-[32px] font-extrabold text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
