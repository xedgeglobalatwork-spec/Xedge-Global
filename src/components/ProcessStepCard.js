import { icons } from "@/lib/icons";

export default function ProcessStepCard({ step, detailed = false }) {
  const Icon = icons[step.icon];
  return (
    <div className="h-full rounded-2xl border border-border-light bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple/30 hover:shadow-[var(--shadow-lg)]">
      <span className="text-4xl font-extrabold text-border-light">{step.step}</span>
      <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
        {Icon && <Icon size={22} />}
      </span>
      <h3 className="mt-5 text-lg font-bold text-slate-dark">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-body">
        {detailed ? step.longDesc : step.shortDesc}
      </p>
    </div>
  );
}
