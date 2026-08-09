import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import ProcessStepCard from "@/components/ProcessStepCard";
import { process } from "@/data/process";

export const metadata = {
  title: "How We Work — Xedge Global Ltd",
  description:
    "Our proven five-step advisory methodology, from strategic intake through to continuous executive CFO insights.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero title="Our Proven 5-Step Advisory Methodology" breadcrumb="How We Work" />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Methodology"
            title="A Framework Built for Clarity, Not Just Compliance"
            description="Every engagement follows the same disciplined process — from a full audit of where you stand today to ongoing, board-level insight."
            center
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <RevealItem key={step.step}>
                <ProcessStepCard step={step} detailed />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
