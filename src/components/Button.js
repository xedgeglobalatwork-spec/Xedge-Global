import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-purple text-white hover:bg-[#4338ca] shadow-[0_14px_30px_-10px_rgba(79,70,229,0.55)]",
  white: "bg-white text-navy hover:bg-slate-50",
  ghost:
    "bg-transparent text-navy border border-border-light hover:border-purple hover:text-purple",
};

const iconBg = {
  primary: "bg-white/20",
  white: "bg-navy/10",
  ghost: "bg-navy/5 group-hover:bg-purple/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  icon = true,
  disabled = false,
}) {
  const base =
    "group relative inline-flex items-center gap-3 rounded-full font-semibold text-sm px-7 py-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 whitespace-nowrap disabled:opacity-60 disabled:pointer-events-none";
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${iconBg[variant]}`}
        >
          <ArrowRight size={16} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
