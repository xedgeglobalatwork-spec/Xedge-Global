import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCard({ study }) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-2xl">
      <Image
        src={study.image}
        alt={study.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-widest text-purple-bright">
          {study.tag}
        </span>
        <h3 className="text-lg font-bold leading-snug text-white">{study.title}</h3>
        <p className="mt-1 text-sm text-white/60">{study.client}</p>
      </div>
      <span className="absolute top-5 right-5 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight size={18} />
      </span>
    </div>
  );
}
