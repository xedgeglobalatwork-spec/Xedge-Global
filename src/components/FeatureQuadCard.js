import { icons } from "@/lib/icons";

export default function FeatureQuadCard({ item }) {
  const Icon = icons[item.icon];
  return (
    <div className="h-full rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple/30 hover:shadow-[var(--shadow-lg)]">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
        {Icon && <Icon size={22} />}
      </span>
      <h4 className="text-base font-bold text-slate-dark">{item.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-body">{item.desc}</p>
    </div>
  );
}
