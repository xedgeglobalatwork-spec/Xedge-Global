import Image from "next/image";
import { Landmark, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import { directors } from "@/data/company";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {  Mail, Phone } from "lucide-react";

export const metadata = {
  title: "About Us — Xedge Global Ltd",
  description:
    "London-headquartered corporate accounting and tax strategists, dedicated to bridging UK compliance with international advisory.",
};

const avatars = ["/images/client-1.jpg", "/images/client-2.jpg", "/images/client-3.jpg"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Dedicated Financial Leadership & Global Vision"
        breadcrumb="About Us"
      />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal y={40}>
              <span className="text-[140px] font-extrabold leading-none text-purple/10 md:text-[180px]">
                15
              </span>
              <h3 className="-mt-12 text-2xl font-extrabold text-slate-dark md:text-3xl">
                Years of Dedicated Work Experience
              </h3>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <div
                      key={src}
                      className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white"
                      style={{ zIndex: avatars.length - i }}
                    >
                      <Image src={src} alt="Client" fill sizes="48px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-slate-dark">
                  More than 500+ Satisfied Corporate Clients
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple">
                <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Who We Are
              </span>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                London-Headquartered Corporate Accounting & Tax Strategists
              </h2>
              <p className="mt-5 text-slate-body">
                Xedge Global was founded in Canary Wharf by chartered accountants who saw
                growing businesses underserved by both traditional high-street practices and
                Big-Four price tags. We built a partner-led firm that combines rigorous UK
                statutory compliance with the kind of forensic tax recovery and cross-border
                advisory usually reserved for listed companies — delivered on cloud-native
                systems, with a named partner in every engagement.
              </p>

              <div className="mt-8 rounded-2xl border border-border-light bg-bg-soft p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple/10 text-purple">
                    <Landmark size={20} />
                  </span>
                  <h4 className="font-bold text-slate-dark">
                    Our Core Corporate Commitments
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-slate-body">
                  <li className="flex gap-2">
                    <TrendingUp size={16} className="mt-0.5 shrink-0 text-purple" />
                    <span>
                      <strong className="text-slate-dark">100% Statutory Integrity</strong> —
                      every filing signed off by a chartered accountant, on schedule, every time.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <TrendingUp size={16} className="mt-0.5 shrink-0 text-purple" />
                    <span>
                      <strong className="text-slate-dark">Proactive Tax Alpha</strong> — we
                      surface reliefs and claims before you ask, not just after year end.
                    </span>
                  </li>
                </ul>
              </div>

              <Button href="/contact" variant="primary" className="mt-8">
                Speak to a Partner
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <Reveal>
        <section className="px-5 pb-24 md:px-8 md:pb-28">
          <div className="relative mx-auto h-[320px] w-full max-w-[1280px] overflow-hidden rounded-3xl md:h-[420px]">
            <Image
              src="/images/about-banner.jpg"
              alt="Xedge Global London office"
              fill
              sizes="1280px"
              className="object-cover"
            />
          </div>
        </section>
      </Reveal> */}

       <section className="bg-bg-soft py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Speak Directly to a Director"
            description="For anything beyond a general enquiry, our directors are directly reachable — no gatekeeping, no call centre."
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.12}>
            {directors.map((d) => (
              <RevealItem key={d.name}>
                <div className="h-full rounded-2xl border border-border-light bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple/30 hover:shadow-[var(--shadow-lg)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-purple/10 text-xl font-extrabold text-purple">
                    {d.name.charAt(0)}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-dark">{d.name}</h3>
                  <p className="text-sm text-slate-light">{d.role}</p>
                  <div className="mt-5 space-y-2.5 border-t border-border-light pt-5">
                    <a
                      href={d.emailHref}
                      className="flex items-center gap-2.5 text-sm text-slate-body hover:text-purple"
                    >
                      <Mail size={15} className="shrink-0 text-purple" />
                      {d.email}
                    </a>
                    <a
                      href={d.phoneHref}
                      className="flex items-center gap-2.5 text-sm text-slate-body hover:text-purple"
                    >
                      <Phone size={15} className="shrink-0 text-purple" />
                      {d.phone}
                    </a>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>


    </>
  );
}
