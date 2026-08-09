import { MapPin, Mail, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/SocialIcon";
import { company, directors } from "@/data/company";

export const metadata = {
  title: "Contact Us — Xedge Global Ltd",
  description:
    "Get in touch with Xedge Global Ltd — our London HQ, phone, email and a direct enquiry form. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" breadcrumb="Contact Us" image="/images/contact-office.jpg" />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Simply the Best Approach for Your Company — Let&apos;s Talk
              </h2>
              <p className="mt-5 max-w-lg text-slate-body">
                Whether it&apos;s a single statutory filing or a full fractional-CFO engagement,
                the fastest way to get an accurate answer is to talk to a partner directly.
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-light">
                      Our Location
                    </div>
                    <div className="mt-1 text-sm text-slate-dark">{company.address}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                    <Mail size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-light">
                      Interested in working with us?
                    </div>
                    <a
                      href={company.emailHref}
                      className="mt-1 block text-sm font-semibold text-slate-dark hover:text-purple"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                    <Phone size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-light">
                      Feel free to call us
                    </div>
                    <a
                      href={company.phoneHref}
                      className="mt-1 block text-sm font-semibold text-slate-dark hover:text-purple"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                    <Clock size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-light">
                      Office Hours
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-dark">
                      {company.hours}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex gap-3">
                {company.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-slate-dark transition-colors hover:border-purple hover:bg-purple hover:text-white"
                  >
                    <SocialIcon name={s.label} size={16} />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border-light bg-bg-soft p-7 md:p-9">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Leave a Message
                </span>
                <h3 className="text-2xl font-extrabold text-slate-dark">Get In Touch</h3>
                <p className="mt-2 mb-7 text-sm text-slate-body">
                  Fill in the form below and a senior partner will respond within 2 hours
                  during business hours.
                </p>
                <ContactForm rows={4} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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

      <Reveal>
        <section className="px-5 pt-4 pb-4 md:px-8">
          <div className="mx-auto h-[380px] w-full max-w-[1280px] overflow-hidden rounded-3xl border border-border-light">
            <iframe
              src={company.mapEmbedSrc}
              title="Xedge Global London HQ location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </Reveal>
    </>
  );
}
