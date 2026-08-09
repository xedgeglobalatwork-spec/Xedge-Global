import Image from "next/image";
import { Rocket, Users, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import ServiceRow from "@/components/ServiceRow";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStepCard from "@/components/ProcessStepCard";
import MarqueeTicker from "@/components/MarqueeTicker";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { process } from "@/data/process";
import { caseStudies } from "@/data/caseStudies";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <section className="section py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal y={40}>
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Xedge Global advisory team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="text-[120px] font-extrabold leading-none text-purple/10 md:text-[180px]">
                5
              </span>
              <h3 className="-mt-10 text-2xl font-extrabold text-slate-dark md:text-3xl">
                Years of Dedicated Work Experience
              </h3>
              <p className="mt-5 max-w-lg text-slate-body">
                Xedge Global was founded to give ambitious businesses the kind of financial
                leadership usually reserved for listed companies — chartered accounting,
                forensic tax recovery, and board-level advisory under one roof, backed by a
                London HQ and a partner-led delivery model.
              </p>
              <Button href="/about" variant="ghost" className="mt-8">
                More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="section bg-bg-soft py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Feedback from Our Clients"
            description="Real outcomes from businesses we've worked alongside across the UK, Europe and the Middle East."
            center
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <RevealItem key={t.name}>
                <TestimonialCard t={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <MarqueeTicker />

      {/* Services */}
      <section className="section py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Professional Solutions for Growing Businesses"
            description="From day-to-day bookkeeping to fractional CFO advisory — a full financial stack under one partner-led team."
          />
          <Reveal>
            <div>
              {services.map((service, i) => (
                <ServiceRow key={service.slug} service={service} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-bg-soft py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Strategy. Execution. Results."
            description="A proven five-step methodology that takes you from first audit to ongoing executive advisory."
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <RevealItem key={step.step}>
                <ProcessStepCard step={step} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Black CTA */}
      <section className="section relative overflow-hidden bg-navy-midnight py-24 md:py-28">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--purple-accent) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-[44px]">
                Ready to Elevate Your Financial Performance?
              </h2>
              <p className="mt-5 max-w-lg text-white/60">
                Talk to a senior partner about where your finance function is losing time,
                cash or clarity — and what a Xedge engagement would actually look like.
              </p>
              <Button href="/contact" variant="white" className="mt-8">
                Contact Us
              </Button>
            </Reveal>
            <RevealGroup className="grid gap-5" stagger={0.15}>
              {[
                {
                  icon: Rocket,
                  title: "Fast SLA Delivery",
                  desc: "Day-5 monthly board accounts, every cycle.",
                },
                {
                  icon: Users,
                  title: "Dedicated UK Accountants",
                  desc: "A named partner-led team, not a rotating helpdesk.",
                },
                {
                  icon: ShieldCheck,
                  title: "Full HMRC Defense",
                  desc: "100% audit-defense guarantee on every claim we file.",
                },
              ].map((f) => (
                <RevealItem key={f.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple/20 text-purple-bright">
                      <f.icon size={20} />
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{f.title}</h4>
                      <p className="mt-1 text-sm text-white/50">{f.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section className="section py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Get Started"
                title="Schedule an Executive Advisory Session"
                description="Tell us a little about your business and a senior partner will be in touch within 24 hours to arrange a session."
                className="mb-0"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border-light bg-bg-soft p-7 md:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-bg-soft py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Case Studies & Advisory Highlights"
            description="A sample of the outcomes our partners have delivered for clients this year."
          />
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.title}>
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
