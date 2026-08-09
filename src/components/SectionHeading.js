export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
  className = "",
}) {
  return (
    <div
      className={`max-w-2xl mb-12 md:mb-16 ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest mb-5 ${
            light ? "bg-white/10 text-white" : "bg-purple/10 text-purple"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-white" : "bg-purple"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[44px] font-extrabold ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-slate-body"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
