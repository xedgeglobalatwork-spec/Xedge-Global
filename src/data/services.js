export const services = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping & Managed Finance",
    shortName: "Bookkeeping",
    badge: "UK Core Operations",
    badgeVariant: "uk",
    thumbnail: "/images/service-bookkeeping.jpg",
    heroImage: "/images/service-bookkeeping-hero.jpg",
    catalogDescription:
      "Day-to-day bookkeeping, accounts payable/receivable and cloud finance management that keeps your numbers audit-ready year round.",
    breadcrumb: "Bookkeeping",
    mainH2:
      "Accelerate Business Growth with Expert Accounting & Financial Solutions",
    intro:
      "Our managed bookkeeping desk keeps your ledgers reconciled, your cash position visible and your finance stack running on modern cloud software — so you always know exactly where the business stands.",
    frameworkTitle: "The Xedge Managed-Finance Framework",
    frameworkBullets: [
      "Daily transaction coding and bank reconciliation across every account",
      "Cloud-first stack setup on Xero, QuickBooks or Sage with bank feeds",
      "Monthly management accounts delivered by day 5 of the following month",
    ],
    featureQuad: [
      {
        icon: "BookOpen",
        title: "Bookkeeping",
        desc: "Accurate daily ledgers, bank reconciliation and expense coding across every account.",
      },
      {
        icon: "Calculator",
        title: "Accounting",
        desc: "Full-cycle accounting with month-end close and statutory-ready records.",
      },
      {
        icon: "TrendingUp",
        title: "FP&A",
        desc: "Rolling forecasts, budget-vs-actual reporting and cash-flow visibility.",
      },
      {
        icon: "Scale",
        title: "Tax & Compliance",
        desc: "VAT returns and compliance checkpoints built into every close cycle.",
      },
    ],
    hasCalculator: false,
    outcomeHeading: "Service Outcome",
    outcomeImage: "/images/service-bookkeeping-outcome.jpg",
    outcomeText:
      "You get a finance function that never falls behind — reconciled books, current filings and management accounts you can actually make decisions from.",
    outcomeChecklist: [
      "Accurate, always-current financial records",
      "Proactive accounts payable & receivable management",
      "Monthly reporting and rolling forecasts",
      "Ongoing compliance advisory built into every close",
    ],
    faqs: [
      {
        q: "Which accounting software do you support?",
        a: "We work natively across Xero, QuickBooks Online, Sage and Dext, and can migrate you onto whichever platform fits your operations best.",
      },
      {
        q: "What exactly is included in the bookkeeping service?",
        a: "Daily transaction processing, bank and card reconciliation, AP/AR management, VAT return prep, and monthly management accounts with a short commentary.",
      },
      {
        q: "What size and type of businesses do you work with?",
        a: "Everything from pre-revenue startups to £20m-turnover scale-ups across SaaS, professional services, e-commerce and logistics.",
      },
    ],
  },
  {
    slug: "year-end",
    name: "Year-End Statutory Filing & Compliance",
    shortName: "Year-End Filing",
    badge: "Companies House & HMRC",
    badgeVariant: "uk",
    thumbnail: "/images/service-year-end.jpg",
    heroImage: "/images/service-year-end-hero.jpg",
    catalogDescription:
      "Statutory accounts, CT600 corporation tax filing and Companies House submissions handled end-to-end with zero-penalty accuracy.",
    breadcrumb: "Year-End Filing",
    mainH2:
      "Guaranteed UK Statutory Compliance & Corporation Tax Optimization",
    intro:
      "We prepare and file your statutory accounts and corporation tax return with a chartered accountant's sign-off, structuring every claim to legally minimise the tax you owe.",
    frameworkTitle: "The Xedge Statutory Compliance Framework",
    frameworkBullets: [
      "FRS 102 / FRS 105 statutory accounts prepared and iXBRL-tagged",
      "CT600 corporation tax computations with full capital allowance review",
      "Companies House confirmation statement and accounts filing, on schedule",
    ],
    featureQuad: [
      {
        icon: "FileCheck2",
        title: "FRS 102 / 105",
        desc: "Statutory accounts prepared under the correct reporting standard for your entity size.",
      },
      {
        icon: "Landmark",
        title: "CT600 Corp Tax",
        desc: "Full corporation tax computation and submission, optimised for allowances and reliefs.",
      },
      {
        icon: "FolderCheck",
        title: "Companies House Filings",
        desc: "Confirmation statements and statutory accounts filed accurately and on time.",
      },
      {
        icon: "ShieldCheck",
        title: "Audit Packs & Defense",
        desc: "Full working-paper packs held on file in case HMRC or Companies House ever query a filing.",
      },
    ],
    hasCalculator: true,
    calculator: {
      label: "Estimate Your Corporation Tax",
      inputLabel: "Annual taxable profit",
      min: 50000,
      max: 2000000,
      step: 10000,
      default: 250000,
      prefix: "£",
      resultLabel: "Estimated Corporation Tax due",
      compute: "ctBanding",
    },
    outcomeHeading: "Service Outcome",
    outcomeImage: "/images/service-year-end-outcome.jpg",
    outcomeText:
      "Every statutory deadline is hit with room to spare, and your corporation tax position is optimised rather than just calculated.",
    outcomeChecklist: [
      "Zero-penalty statutory filing guarantee",
      "Marginal relief banding applied — effective rate 19–25%",
      "iXBRL tagging handled for HMRC submission",
      "Chartered accountant sign-off on every set of accounts",
    ],
    faqs: [
      {
        q: "When are my statutory accounts and CT600 due?",
        a: "Statutory accounts are due at Companies House 9 months after your year end; your CT600 and corporation tax payment are due 12 months and 9 months after year end respectively.",
      },
      {
        q: "Do I need FRS 102 or FRS 105 accounts?",
        a: "FRS 105 (micro-entity) applies if you're under the small-company thresholds; larger or more complex entities use FRS 102. We'll confirm which applies and prepare accordingly.",
      },
      {
        q: "Can you actually reduce my corporation tax bill?",
        a: "Yes — through capital allowances, R&D claims where applicable, and correctly structured group relief, most clients see a meaningfully lower effective rate than the headline 25%.",
      },
    ],
  },
  {
    slug: "hmrc",
    name: "HMRC Tax Claims & Refund Recovery",
    shortName: "HMRC Tax Claims",
    badge: "HMRC Direct Refunds",
    badgeVariant: "uk",
    thumbnail: "/images/service-hmrc.jpg",
    heroImage: "/images/service-hmrc-hero.jpg",
    catalogDescription:
      "Forensic review of historic filings to recover overpaid tax through capital allowances, land remediation relief and loss carry-back claims.",
    breadcrumb: "HMRC Tax Claims",
    mainH2: "Unlock Trapped Cash Through Forensic HMRC Tax Recovery",
    intro:
      "Most businesses are sitting on unclaimed reliefs. We run a forensic review of your last four years of filings and recover what HMRC owes you — on a contingent, zero-risk basis.",
    frameworkTitle: "The Xedge Tax Recovery Framework",
    frameworkBullets: [
      "Full four-year lookback across capital allowances and reliefs",
      "Commercial property embedded-fixtures allowance surveys",
      "Loss carry-back claims filed to recover corporation tax already paid",
    ],
    featureQuad: [
      {
        icon: "Building2",
        title: "Commercial Property Allowances",
        desc: "Embedded fixtures and integral features surveyed for unclaimed capital allowances.",
      },
      {
        icon: "Sprout",
        title: "Land Remediation Relief",
        desc: "150% enhanced relief recovered on qualifying contaminated or derelict land costs.",
      },
      {
        icon: "Undo2",
        title: "Loss Carry-Back Claims",
        desc: "Prior-year corporation tax reclaimed against current-year trading losses.",
      },
      {
        icon: "ShieldCheck",
        title: "HMRC Enquiry Defense",
        desc: "Every claim filed with a full technical report ready for HMRC scrutiny.",
      },
    ],
    hasCalculator: true,
    calculator: {
      label: "Estimate Your Recoverable Allowance",
      inputLabel: "Commercial property value",
      min: 200000,
      max: 5000000,
      step: 50000,
      default: 1000000,
      prefix: "£",
      resultLabel: "Estimated recoverable allowance",
      compute: "flatPercent",
      percent: 0.25,
    },
    outcomeHeading: "Service Outcome",
    outcomeImage: "/images/service-hmrc-outcome.jpg",
    outcomeText:
      "Cash lands back in your business bank account, not just as a smaller number on next year's tax bill.",
    outcomeChecklist: [
      "Direct cash repayment from HMRC, not just future relief",
      "Reduced ongoing corporation tax liability",
      "Zero-risk, contingent-fee structure — you only pay on success",
      "100% audit defense included on every claim we file",
    ],
    faqs: [
      {
        q: "How far back can a claim go?",
        a: "HMRC generally allows claims covering the previous four accounting periods, which is exactly the window our forensic review covers.",
      },
      {
        q: "How long does a refund take to arrive?",
        a: "Once a claim is filed and accepted, most clients see funds land within 4–6 weeks.",
      },
      {
        q: "What kind of property qualifies?",
        a: "Owned or long-leased commercial property — offices, warehouses, retail units and industrial premises — typically qualifies for an embedded-fixtures review.",
      },
    ],
  },
  {
    slug: "international-tax",
    name: "International Tax Advisory",
    shortName: "International Tax",
    badge: "Cross-Border & DTA",
    badgeVariant: "global",
    thumbnail: "/images/service-international.jpg",
    heroImage: "/images/service-international-hero.jpg",
    catalogDescription:
      "Double Tax Agreement relief, transfer pricing and entity structuring for businesses expanding across the UK, Europe and the Middle East.",
    breadcrumb: "International Tax",
    mainH2: "Strategic Cross-Border Corporate Expansion & DTA Relief",
    intro:
      "As your business crosses borders, we structure entities, pricing and treaty positions so growth doesn't come with double taxation or compliance risk attached.",
    frameworkTitle: "The Xedge Cross-Border Framework",
    frameworkBullets: [
      "Double Tax Agreement relief applied across UK, EU and Middle East corridors",
      "OECD-compliant transfer pricing documentation and benchmarking",
      "Branch vs. subsidiary structuring aligned to commercial and tax objectives",
    ],
    featureQuad: [
      {
        icon: "Globe2",
        title: "DTA Relief",
        desc: "Treaty positions applied to eliminate or reduce double taxation on cross-border income.",
      },
      {
        icon: "Scale",
        title: "OECD Transfer Pricing",
        desc: "Arm's-length pricing documentation prepared to OECD and local-authority standard.",
      },
      {
        icon: "Building2",
        title: "Entity & Branch Structuring",
        desc: "Subsidiary, branch or holding structures designed around your expansion plan.",
      },
      {
        icon: "ShieldAlert",
        title: "CFC & PE Risk",
        desc: "Controlled Foreign Company and Permanent Establishment exposure reviewed and mitigated.",
      },
    ],
    hasCalculator: true,
    calculator: {
      label: "Estimate Your Cross-Border Exposure",
      inputLabel: "Annual cross-border revenue",
      min: 500000,
      max: 15000000,
      step: 100000,
      default: 3000000,
      prefix: "£",
      resultLabel: "Indicative withholding-tax exposure",
      compute: "flatPercent",
      percent: 0.15,
    },
    outcomeHeading: "Service Outcome",
    outcomeImage: "/images/service-international-outcome.jpg",
    outcomeText:
      "You expand into new markets with a tax structure built for it in advance, not patched together after HMRC or a local authority raises a flag.",
    outcomeChecklist: [
      "Withholding tax eliminated or reduced under treaty relief",
      "Audit-ready transfer pricing documentation on file",
      "Tax-efficient dividend and profit repatriation routes",
      "A named partner guiding every cross-border decision",
    ],
    faqs: [
      {
        q: "What is a Double Tax Agreement (DTA)?",
        a: "A treaty between two countries that determines which one taxes a given type of income, preventing the same profit from being taxed twice.",
      },
      {
        q: "When do I actually need transfer pricing documentation?",
        a: "As soon as you have related-party transactions across borders — intercompany services, financing or royalties — most tax authorities expect contemporaneous documentation.",
      },
      {
        q: "Do you support expansion into the EU and Middle East?",
        a: "Yes — we regularly structure UK businesses into both regions and hold active treaty and structuring expertise across both corridors.",
      },
    ],
  },
  {
    slug: "rd-tax-credits",
    name: "R&D Tax Credits & Subsidies",
    shortName: "R&D Tax Credits",
    badge: "Up to 33% Cash Back",
    badgeVariant: "global",
    thumbnail: "/images/service-rd.jpg",
    heroImage: "/images/service-rd-hero.jpg",
    catalogDescription:
      "Turn qualifying software, engineering and product R&D spend into a direct HMRC cash refund, with a fully defensible technical report.",
    breadcrumb: "R&D Tax Credits",
    mainH2: "Convert Technical Innovation Into Direct HMRC Cash Refunds",
    intro:
      "If your team is solving genuine technical uncertainty — in code, in a lab, or on a production line — that work is very likely eligible for a cash-back R&D claim.",
    frameworkTitle: "The Xedge R&D Claim Framework",
    frameworkBullets: [
      "Technical narrative built directly from engineering and product records",
      "Qualifying staff cost, subcontractor and cloud-compute apportionment",
      "Full alignment with HMRC's Compliance Investigation Report standard",
    ],
    featureQuad: [
      {
        icon: "Code2",
        title: "Software & AI Development",
        desc: "Novel architecture, algorithms and AI/ML development that overcomes genuine technical uncertainty.",
      },
      {
        icon: "Cog",
        title: "Engineering & Manufacturing",
        desc: "Product, process and materials R&D across engineering and manufacturing lines.",
      },
      {
        icon: "Users",
        title: "Staff Payroll Expenditure",
        desc: "Time-apportioned salaries, employer NI and pension costs for R&D-active staff.",
      },
      {
        icon: "ShieldCheck",
        title: "HMRC CIR Compliance",
        desc: "Every claim submitted with a Compliance Investigation Report ready for scrutiny.",
      },
    ],
    hasCalculator: true,
    calculator: {
      label: "Estimate Your R&D Cash Refund",
      inputLabel: "Annual qualifying R&D spend",
      min: 50000,
      max: 3000000,
      step: 10000,
      default: 300000,
      prefix: "£",
      resultLabel: "Estimated cash refund",
      compute: "flatPercent",
      percent: 0.27,
    },
    outcomeHeading: "Service Outcome",
    outcomeImage: "/images/service-rd-outcome.jpg",
    outcomeText:
      "Innovation spend that already happened turns into real cash back in the business — funding the next sprint, hire or production run.",
    outcomeChecklist: [
      "Direct cash repayment from HMRC in most cases",
      "10–14 day service-level target from filing to submission",
      "Full technical narrative report prepared for you",
      "Audit defense included if HMRC opens an enquiry",
    ],
    faqs: [
      {
        q: "What actually qualifies as R&D?",
        a: "Work that seeks an advance in science or technology by resolving genuine technical uncertainty — this covers far more day-to-day engineering and product work than most teams assume.",
      },
      {
        q: "How much cash back can I expect?",
        a: "Depending on scheme and profitability, qualifying SMEs typically recover 18–33% of qualifying R&D expenditure.",
      },
      {
        q: "Does cloud hosting and software spend qualify?",
        a: "Yes — cloud compute, data licences and certain software costs directly used in the R&D activity are eligible qualifying expenditure.",
      },
    ],
  },
  {
    slug: "xedge-advisory",
    name: "Xedge Advisory — Fractional CFO",
    shortName: "Xedge Advisory",
    badge: "Executive Board Level",
    badgeVariant: "global",
    thumbnail: "/images/service-advisory.jpg",
    heroImage: "/images/service-advisory-hero.jpg",
    catalogDescription:
      "Board-level financial leadership — 3-way modeling, M&A due diligence and capital-raise readiness — without a full-time CFO salary.",
    breadcrumb: "Xedge Advisory",
    mainH2: "Executive Board-Level Fractional CFO & Growth Advisory",
    intro:
      "You get a named senior partner in the room for board meetings, funding rounds and major decisions — the judgment of a full-time CFO, sized to how much of one you actually need.",
    frameworkTitle: "The Xedge Fractional CFO Framework",
    frameworkBullets: [
      "3-way financial models (P&L, balance sheet, cash flow) built and maintained monthly",
      "Board-ready reporting packs delivered ahead of every board cycle",
      "Capital raise and M&A due diligence led by a named senior partner",
    ],
    featureQuad: [
      {
        icon: "LineChart",
        title: "3-Way Financial Modeling",
        desc: "Integrated P&L, balance sheet and cash-flow models kept current every month.",
      },
      {
        icon: "Handshake",
        title: "M&A Due Diligence",
        desc: "Buy-side and sell-side financial due diligence led by a senior partner.",
      },
      {
        icon: "PiggyBank",
        title: "Capital Raise Readiness",
        desc: "Data rooms, investor decks and financial narratives prepared for fundraising.",
      },
      {
        icon: "Target",
        title: "Margin & Unit Economics",
        desc: "Unit-level profitability analysis that sharpens pricing and resource allocation.",
      },
    ],
    hasCalculator: true,
    calculator: {
      label: "Estimate Your CFO Cost Savings",
      inputLabel: "Annual turnover",
      min: 1000000,
      max: 20000000,
      step: 500000,
      default: 5000000,
      prefix: "£",
      resultLabel: "Estimated annual savings vs. full-time CFO",
      compute: "cfoSavings",
    },
    outcomeHeading: "Service Outcome",
    outcomeImage: "/images/service-advisory-outcome.jpg",
    outcomeText:
      "The business gets senior financial leadership at every major decision point, at a fraction of a full-time executive package.",
    outcomeChecklist: [
      "Board-ready reporting delivered on a fixed monthly cadence",
      "£100k+ typical annual saving versus a full-time CFO hire",
      "Institutional-grade due diligence rigor on every transaction",
      "A named partner present at your board meetings",
    ],
    faqs: [
      {
        q: "What exactly is a fractional CFO?",
        a: "Senior financial leadership — strategy, modeling, fundraising, board reporting — delivered on a part-time or project basis rather than as a full-time hire.",
      },
      {
        q: "What does 3-way modeling actually give me?",
        a: "A single integrated model linking your P&L, balance sheet and cash flow, so you can see the cash impact of any decision before you make it.",
      },
      {
        q: "What does M&A due diligence cover?",
        a: "Financial, tax and working-capital due diligence on either side of a transaction, plus post-deal integration planning where needed.",
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
