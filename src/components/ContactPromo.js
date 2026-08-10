import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import ContactForm from "./ContactForm";
import { company } from "@/data/company";

export default function ContactPromo() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="animate-contact-drift-1 pointer-events-none absolute -top-36 -left-24 h-72 w-72 rounded-full opacity-40 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.18), transparent 70%)" }}
      />
      <div
        className="animate-contact-drift-2 pointer-events-none absolute -right-28 -bottom-40 h-80 w-80 rounded-full opacity-40 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(15,43,92,0.16), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Left: image + floating info box */}
          <Reveal y={30}>
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
                <Image
                  src="/images/contact-office.jpg"
                  alt="Xedge Global advisory consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={company.emailHref}
                  className="flex items-center gap-2.5 text-lg font-medium text-slate-dark transition-colors hover:text-purple"
                >
                  <Mail size={18} className="shrink-0 text-purple" />
                  {company.email}
                </a>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 text-lg font-medium text-slate-dark transition-colors hover:text-purple"
                >
                  <Phone size={18} className="shrink-0 text-purple" />
                  {company.phone}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: headline + floating form panel */}
          <div>
            <Reveal delay={0.1}>
              <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-light uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Get In Touch
              </span>
              <h2 className="max-w-md text-3xl leading-[1.1] font-medium text-slate-dark md:text-4xl lg:text-[44px]">
                Let&apos;s build your <em className="text-purple italic">financial edge</em>,
                together.
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 rounded-3xl border border-border-light bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)] md:p-9">
                <h3 className="mb-2 text-2xl font-medium text-slate-dark">
                  Tell us about your business
                </h3>
                <p className="mb-7 max-w-md text-sm text-slate-body">
                  Fill in a few details below and a senior partner will follow up with
                  tailored next steps within one business day.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
