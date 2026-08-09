import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialCard({ t }) {
  return (
    <div className="h-full rounded-2xl border border-border-light bg-white p-7 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-2 hover:border-purple/30 hover:shadow-[var(--shadow-lg)]">
      <div className="mb-4 flex gap-1 text-gold">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mb-6 text-sm leading-relaxed text-slate-body">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-dark">{t.name}</div>
          <div className="text-xs text-slate-light">{t.title}</div>
        </div>
      </div>
    </div>
  );
}
