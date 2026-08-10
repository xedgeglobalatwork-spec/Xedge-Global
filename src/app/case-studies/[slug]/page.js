import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import Button from "@/components/Button";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Xedge Global Ltd`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const relatedService = study.relatedService ? getServiceBySlug(study.relatedService) : null;

  return (
    <>
      <PageHero title={study.title} breadcrumb="Case Studies" image={study.image} />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[2.1fr_1fr]">
            {/* Main content */}
            <div>
              <Reveal>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple/10 px-4 py-2 text-xs font-bold tracking-widest text-purple uppercase">
                  {study.tag}
                </span>
                <h2 className="text-2xl font-extrabold md:text-3xl">{study.client}</h2>
                <p className="mt-5 text-lg text-slate-body">{study.summary}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative mt-10 h-64 w-full overflow-hidden rounded-2xl md:h-96">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <h3 className="mt-12 mb-4 text-xl font-bold text-slate-dark">The Challenge</h3>
                <p className="text-slate-body">{study.challenge}</p>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="mt-10 mb-4 text-xl font-bold text-slate-dark">Our Approach</h3>
                <ul className="space-y-3">
                  {study.approach.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate-body">
                      <Check size={16} className="mt-0.5 shrink-0 text-purple" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 rounded-2xl border border-border-light bg-bg-soft p-7 md:p-8">
                  <h3 className="mb-4 text-xl font-bold text-slate-dark">The Result</h3>
                  <ul className="space-y-2.5">
                    {study.results.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-slate-body">
                        <Check size={16} className="mt-0.5 shrink-0 text-emerald" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {study.quote && (
                <Reveal delay={0.3}>
                  <div className="mt-10 rounded-2xl bg-navy-midnight p-8 text-white md:p-10">
                    <Quote size={28} className="mb-4 text-purple-bright" />
                    <p className="text-lg leading-relaxed font-medium md:text-xl">
                      &ldquo;{study.quote.text}&rdquo;
                    </p>
                    <p className="mt-5 text-sm text-white/60">{study.quote.name}</p>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <Reveal delay={0.1} className="lg:sticky lg:top-32 lg:self-start">
              <div className="space-y-6">
                <div className="rounded-2xl border border-border-light p-7 text-center">
                  <div className="text-4xl font-extrabold text-purple md:text-5xl">
                    {study.stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-light">{study.stat.label}</div>
                </div>

                {relatedService && (
                  <div className="rounded-2xl border border-border-light p-6">
                    <h4 className="mb-2 text-xs font-bold tracking-widest text-slate-light uppercase">
                      Related Service
                    </h4>
                    <Button
                      href={`/services/${relatedService.slug}`}
                      variant="ghost"
                      className="mt-2 w-full justify-center !px-5 !py-3 text-sm"
                    >
                      {relatedService.shortName}
                    </Button>
                  </div>
                )}

                <div className="rounded-2xl bg-gradient-to-br from-navy to-purple p-7 text-white">
                  <h4 className="text-lg font-bold">Ready for similar results?</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Talk to a senior partner about what an engagement like this would look
                    like for your business.
                  </p>
                  <Button href="/contact" variant="white" className="mt-6 !px-5 !py-3 text-xs">
                    Get In Touch
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
