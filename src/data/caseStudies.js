export const caseStudies = [
  {
    slug: "rd-tax-recovery-ai-software",
    title: "£140k R&D Tax Recovery",
    client: "AI Software Enterprise, London",
    image: "/images/case-rd.jpg",
    tag: "R&D Tax Credits",
    relatedService: "rd-tax-credits",
    summary:
      "A fast-growing AI software business had never claimed R&D tax relief, despite two years of heavy investment in model development and infrastructure.",
    challenge:
      "The client's engineering team had been building proprietary machine-learning infrastructure for over two years, but their previous accountants had never flagged the work as eligible for R&D tax relief. With no technical narrative on file and limited internal bandwidth, a claim felt out of reach.",
    approach: [
      "Ran a technical discovery workshop with the engineering leads to map qualifying activity",
      "Built a defensible technical narrative aligned to HMRC's Compliance Investigation Report standard",
      "Apportioned staff, subcontractor and cloud-compute costs against qualifying R&D work",
    ],
    results: [
      "£140,000 recovered as a direct HMRC cash refund",
      "Two prior accounting periods claimed in a single filing",
      "Full technical report retained on file for future claims",
      "Ongoing annual R&D review now built into their close process",
    ],
    stat: { value: "£140k", label: "Cash refund recovered" },
    quote: {
      text: "Xedge found a claim our previous accountants never even flagged, and handled the entire HMRC submission for us.",
      name: "Engineering Director",
    },
  },
  {
    slug: "cross-border-dta-structuring",
    title: "Cross-Border DTA Structuring",
    client: "European Logistics Group",
    image: "/images/case-logistics.jpg",
    tag: "International Tax",
    relatedService: "international-tax",
    summary:
      "A UK logistics group expanding into three EU markets was losing a meaningful share of intercompany payments to unrelieved withholding tax.",
    challenge:
      "As the group's EU subsidiaries scaled, cross-border management fees and financing payments were being taxed twice — once at source and again in the UK — because no treaty relief had been applied for.",
    approach: [
      "Reviewed the group's entity structure and intercompany payment flows",
      "Applied Double Tax Agreement relief across the relevant UK–EU corridors",
      "Prepared OECD-compliant transfer pricing documentation for the intercompany services",
    ],
    results: [
      "£95,000 in withholding tax recovered on cross-border payments",
      "Ongoing withholding tax exposure eliminated on future payments",
      "Transfer pricing documentation now audit-ready in every jurisdiction",
    ],
    stat: { value: "£95k", label: "Withholding tax recovered" },
    quote: {
      text: "The international tax team restructured our EU entities and recovered £95k in withholding taxes on cross-border payments.",
      name: "Julian Vance, MD",
    },
  },
  {
    slug: "fractional-cfo-series-b-support",
    title: "Fractional CFO Series B Support",
    client: "BioHealth Innovations UK",
    image: "/images/case-cfo.jpg",
    tag: "Xedge Advisory",
    relatedService: "xedge-advisory",
    summary:
      "A biotech scale-up needed board-ready financial leadership heading into a Series B raise, without the cost or lead time of a full-time CFO hire.",
    challenge:
      "With a Series B raise approaching, the board needed institutional-grade financial modeling and due diligence readiness, but the business wasn't yet ready to commit to a full-time CFO salary.",
    approach: [
      "Embedded a named partner as fractional CFO across board cycles and investor calls",
      "Built an integrated 3-way financial model to support the fundraising narrative",
      "Led buy-side due diligence preparation and data room organisation",
    ],
    results: [
      "Series B round closed with investor-ready financial reporting in place",
      "Over £100k saved annually versus a full-time CFO hire",
      "Board-ready reporting pack now delivered on a fixed monthly cadence",
    ],
    stat: { value: "£100k+", label: "Annual savings vs. full-time CFO" },
    quote: {
      text: "Having a named partner in every board meeting changed how we make decisions. Xedge feels like an in-house CFO.",
      name: "Elena Rostova, CEO",
    },
  },
];

export const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);
