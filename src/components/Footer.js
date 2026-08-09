import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { company, quickLinks } from "@/data/company";
import { services } from "@/data/services";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-navy-midnight pt-20 pb-8 text-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Xedge Global"
              width={150}
              height={46}
              className="mb-5 h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Chartered accounting, tax recovery and CFO-level advisory for ambitious
              businesses across the UK, Europe and the Middle East.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {company.badges.map((b) => (
                <span
                  key={b}
                  className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/50"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold tracking-widest text-white/40">
              OUR SERVICES
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold tracking-widest text-white/40">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold tracking-widest text-white/40">LONDON HQ</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-purple-bright" />
                {company.address}
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-purple-bright" />
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-purple-bright" />
                <a href={company.emailHref} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-purple-bright" />
                {company.hours}
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-purple"
                >
                  <SocialIcon name={s.label} size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved. Company No.{" "}
            {company.regNo}, {company.regNote}.
          </p>
        </div>
      </div>
    </footer>
  );
}
