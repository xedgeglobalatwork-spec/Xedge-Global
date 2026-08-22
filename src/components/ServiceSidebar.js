import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Button from "./Button";
import { services } from "@/data/services";

const categories = ["Business", "Consultation", "Management", "Networking", "Solutions"];

export default function ServiceSidebar({ activeSlug }) {
  return (
    <div className="sticky top-32 space-y-8">
      <div className="rounded-2xl border border-border-light p-6 shadow-[var(--shadow-sm)]">
        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-dark uppercase">
          <Calendar size={14} className="text-purple" /> Last Reviewed
        </h4>
        <p className="mb-6 border-b border-dashed border-border-light pb-6 text-sm text-slate-body">
          {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
        </p>

        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-dark uppercase">
          <Tag size={14} className="text-purple" /> Categories
        </h4>
        <div className="mb-6 flex flex-wrap gap-2 border-b border-dashed border-border-light pb-6">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full bg-bg-soft px-3 py-1.5 text-xs font-semibold text-slate-body"
            >
              {c}
            </span>
          ))}
        </div>

        <h4 className="mb-4 text-xs font-bold tracking-widest text-slate-dark uppercase">
          All Services
        </h4>
        <ul className="flex flex-col gap-2">
          {services.map((s) => {
            const active = s.slug === activeSlug;
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`group flex items-center justify-between gap-3 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-purple text-white shadow-[0_10px_24px_-6px_rgba(79,70,229,0.5)]"
                      : "text-slate-dark hover:bg-bg-soft"
                  }`}
                >
                  {s.shortName}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-bg-soft text-slate-light group-hover:bg-purple/10 group-hover:text-purple"
                    }`}
                  >
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-navy to-purple p-7 ">
        <h4 className="text-lg font-bold text-white">Think You&apos;d Be a Good Fit For Our Team?</h4>
        <p className="mt-2 text-sm text-white/70">
          We&apos;re always looking for chartered accountants and advisors who want
          partner-track growth.
        </p>
        <Button href="/contact" variant="white" className="mt-6 !px-5 !py-3 text-xs">
          Get In Touch
        </Button>
      </div>
    </div>
  );
}
