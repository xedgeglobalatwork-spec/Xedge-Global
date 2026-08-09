"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceRow({ service, index }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group -mx-4 flex items-center gap-4 rounded-xl border-b border-border-light px-4 py-7 transition-colors hover:bg-bg-soft/70 sm:gap-6"
    >
      <span className="hidden w-10 shrink-0 text-2xl font-extrabold text-border-light transition-colors group-hover:text-purple sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
        <Image
          src={service.thumbnail}
          alt={service.name}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-bold text-slate-dark transition-colors group-hover:text-purple sm:text-lg md:text-xl">
            {service.name}
          </h3>
          {service.badge && (
            <span
              className={`hidden rounded-full px-3 py-1 text-[11px] font-bold sm:inline-block ${
                service.badgeVariant === "uk"
                  ? "bg-accent-blue/10 text-accent-blue"
                  : "bg-purple/10 text-purple"
              }`}
            >
              {service.badge}
            </span>
          )}
        </div>
        <p className="mt-1 hidden text-sm text-slate-body sm:line-clamp-2 sm:block">
          {service.catalogDescription}
        </p>
      </div>
      <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-light text-slate-dark transition-all duration-300 group-hover:rotate-45 group-hover:border-purple group-hover:bg-purple group-hover:text-white md:flex">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}
