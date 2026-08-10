import Image from "next/image";
import { notFound } from "next/navigation";
import { Landmark, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import FeatureQuadCard from "@/components/FeatureQuadCard";
import ROICalculator from "@/components/ROICalculator";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceSidebar from "@/components/ServiceSidebar";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Xedge Global Ltd`,
    description: service.catalogDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.name} breadcrumb={service.breadcrumb} image={service.heroImage} />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_2.2fr]">
            {/* Sidebar */}
            <Reveal className="order-2 lg:order-1" y={30}>
              <ServiceSidebar activeSlug={service.slug} />
            </Reveal>

            {/* Main content */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl md:h-96">
                  <Image
                    src={service.thumbnail}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-extrabold md:text-3xl lg:text-[38px]">
                  {service.mainH2}
                </h2>
                <p className="mt-5 text-slate-body">{service.intro}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 rounded-2xl border border-border-light bg-bg-soft p-7 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple/10 text-purple">
                      <Landmark size={20} />
                    </span>
                    <h4 className="font-bold text-slate-dark">{service.frameworkTitle}</h4>
                  </div>
                  <ul className="space-y-3">
                    {service.frameworkBullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-slate-body">
                        <Check size={16} className="mt-0.5 shrink-0 text-purple" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2" stagger={0.1}>
                {service.featureQuad.map((item) => (
                  <RevealItem key={item.title}>
                    <FeatureQuadCard item={item} />
                  </RevealItem>
                ))}
              </RevealGroup>

              {service.hasCalculator && (
                <Reveal className="mt-10">
                  <ROICalculator config={service.calculator} />
                </Reveal>
              )}

              <Reveal className="mt-10">
                <div className="grid gap-8 rounded-2xl border border-border-light p-7 md:grid-cols-2 md:p-8">
                  <div className="relative h-56 overflow-hidden rounded-xl md:h-auto">
                    <Image
                      src={service.outcomeImage}
                      alt={service.outcomeHeading}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-dark">
                      {service.outcomeHeading}
                    </h3>
                    <p className="mt-3 text-sm text-slate-body">{service.outcomeText}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.outcomeChecklist.map((c) => (
                        <li key={c} className="flex gap-2.5 text-sm text-slate-body">
                          <Check size={16} className="mt-0.5 shrink-0 text-emerald" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal className="mt-10">
                <h3 className="mb-6 text-xl font-bold text-slate-dark">
                  Any questions? We&apos;re here to help..
                </h3>
                <FAQAccordion items={service.faqs} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
