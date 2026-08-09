import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import ServiceRow from "@/components/ServiceRow";
import { services } from "@/data/services";

export const metadata = {
  title: "Services — Xedge Global Ltd",
  description:
    "Bespoke UK accounting and global tax solutions — bookkeeping, statutory filing, HMRC tax recovery, international tax, R&D credits and fractional CFO advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Bespoke UK Accounting & Global Tax Solutions" breadcrumb="Services" />

      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionHeading
            eyebrow="Services Catalog"
            title="A Full Financial Stack, One Partner-Led Team"
            description="From day-to-day bookkeeping to board-level advisory — explore each service to see exactly what's included."
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
    </>
  );
}
