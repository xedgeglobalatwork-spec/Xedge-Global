import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/Button";
import { generalFaqs } from "@/data/faqs";

export const metadata = {
  title: "FAQs — Xedge Global Ltd",
  description:
    "Frequently asked questions and advisory guidance on HMRC claims, UK corporate tax, international advisory and software we support.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions & Advisory Guidance"
        breadcrumb="Knowledge Base"
      />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple">
                <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Compliance & Tax FAQ
              </span>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Everything You Need To Know
              </h2>
              <p className="mt-5 max-w-md text-slate-body">
                Straight answers on the questions we hear most from growing businesses across
                the UK, Europe and the Middle East.
              </p>

              <div className="mt-10 rounded-2xl bg-navy-midnight p-8 text-white">
                <h4 className="text-lg font-bold">Have a specific tax query?</h4>
                <p className="mt-2 text-sm text-white/60">
                  Book a short technical review with a chartered partner — no charge, no
                  obligation.
                </p>
                <Button href="/contact" variant="primary" className="mt-6 !px-5 !py-3 text-xs">
                  Schedule Technical Review
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <FAQAccordion items={generalFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
