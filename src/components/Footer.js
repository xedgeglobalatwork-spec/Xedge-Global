import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { company, quickLinks } from "@/data/company";
import { services } from "@/data/services";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

const linkClass =
  "group relative inline-block w-fit text-lg font-medium text-white/80 transition-colors hover:text-white sm:text-xl";
const underlineClass =
  "absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8 text-white">
      {/*
        Plain CSS background instead of next/image: this is an external
        hotlinked decorative image, and Next's server-side image optimizer
        was timing out trying to fetch/resize it from this environment. A
        CSS background lets the browser fetch it directly, same as a normal
        <img>/background:url() would.
      */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://fynomenal.com/wp-content/uploads/2025/07/footer-bg.webp')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.821)]" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Column 1: brand + CTA + contact */}
          <div>
            <Image
              src="/logo.png"
              alt="Xedge Global"
              width={150}
              height={46}
              className="mb-6 h-10 w-auto object-contain brightness-0 invert"
            />
            <h3 className="mb-2 text-3xl font-light tracking-tight text-white md:text-[40px]">
              Ready to Talk Strategy?
            </h3>
            <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              Chartered accounting, tax recovery and CFO-level advisory for ambitious
              businesses across the UK, Europe and the Middle East.
            </p>
            <Button href="/contact" variant="white" className="mb-6 !px-7 !py-3 text-sm">
              Get In Touch
            </Button>

            <div className="flex flex-col gap-2.5">
              <a
                href={company.emailHref}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 opacity-60" />
                {company.email}
              </a>
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone size={16} className="shrink-0 opacity-60" />
                {company.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="shrink-0 opacity-60" />
                {company.address}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Clock size={16} className="shrink-0 opacity-60" />
                {company.hours}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {company.badges.map((b) => (
                <span
                  key={b}
                  className="w-fit rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/50"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-2xl font-light text-white md:text-[28px]">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                    <span className={underlineClass} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-2xl font-light text-white md:text-[28px]">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkClass}>
                    {s.shortName}
                    <span className={underlineClass} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved. Company No.{" "}
            {company.regNo}, {company.regNote}.
          </p>
          <div className="flex gap-3">
            {company.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/15"
              >
                <SocialIcon name={s.label} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
