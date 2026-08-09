const items = [
  "BOOKKEEPING & FINANCE",
  "YEAR-END STATUTORY FILING",
  "HMRC TAX CLAIMS",
  "INTERNATIONAL TAX ADVISORY",
  "R&D TAX CREDITS",
  "XEDGE ADVISORY (CFO)",
];

export default function MarqueeTicker() {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden bg-navy-midnight py-6">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center px-8 text-sm font-bold tracking-widest text-white/80 md:text-base"
          >
            {item}
            <span className="ml-8 text-purple-bright">&#10038;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
