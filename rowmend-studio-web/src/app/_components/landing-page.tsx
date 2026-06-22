// File: rowmend-studio-web/src/app/_components/landing-page.tsx
import { cn } from "@/lib/cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  afterItems,
  beforeItems,
  brandName,
  contactIntro,
  contactReassurance,
  emailAddress,
  faqs,
  heroLead,
  heroPrimaryCta,
  heroProofBadge,
  heroProofDetails,
  heroProofTitle,
  heroSecondaryCta,
  heroSubheadline,
  heroTitle,
  outputItems,
  plans,
  pricingNote,
  processIntro,
  sampleOutcomeDeliverables,
  sampleOutcomeStats,
  serviceOptions,
  servicesLead,
  steps,
  tagline,
  trustItems,
  whatsappLink,
} from "../_content/site-content";
import {
  ActionLink,
  CheckMark,
  SectionIntro,
  ServiceIcon,
} from "./landing-primitives";
import ContactForm from "./contact-form";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import styles from "./landing-page.module.css";

function HeroSection() {
  return (
    <section id="home" className={cn("border-b border-line/70", styles.heroShell)}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.95fr)] lg:gap-9 lg:pt-9">
        <div className="space-y-7">
          <p className="text-lg font-medium text-brand/78">
            Spreadsheet cleanup and CRM data cleanup for small teams
          </p>

          <div className="space-y-4">
            <h1 className="max-w-4xl text-balance font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] lg:leading-[0.97]">
              {heroTitle}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-muted text-[1rem] ">
              {heroSubheadline}
            </p>
            <p className="max-w-xl text-base leading-7 text-muted">{heroLead}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#contact">{heroPrimaryCta}</ActionLink>
            <ActionLink href="#pricing" tone="secondary">
              {heroSecondaryCta}
            </ActionLink>
          </div>

          <div className="grid gap-3 text-sm text-muted sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "rounded-[var(--radius-lg)] border border-line/70 bg-white/96 p-6 shadow-[var(--shadow-panel)] sm:p-7",
            styles.heroPanel,
            styles.heroFloat,
          )}
        >
          <div className={styles.heroBeam} aria-hidden />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-brand/78">{heroProofTitle}</p>
              <span className="rounded-full border border-brand/14 bg-accent-soft px-3 py-1 text-xs font-medium text-brand">
                {heroProofBadge}
              </span>
            </div>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.045em] text-ink">
              Contact export cleaned for follow-up and re-import
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted">Before</p>
                <ul className="mt-3 space-y-3">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-line" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-medium text-muted">After</p>
                <ul className="mt-3 space-y-3">
                  {afterItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                      <CheckMark />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-3 border-t border-line/70 pt-5 text-sm text-muted">
              {heroProofDetails.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-line/70 bg-accent-soft/45">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand" />
            <span>Spreadsheet cleanup and CRM cleanup centered</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand" />
            <span>Excel, CSV, and Google Sheets-compatible handoff</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand" />
            <span>One revision included within agreed scope</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand" />
            <span>Private file handling and reviewed delivery</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <SectionIntro
          eyebrow="Services"
          title="The offer is led by spreadsheet and contact data cleanup."
          description={servicesLead}
        />

        <div className="rounded-[var(--radius-lg)] border border-line/70 bg-white shadow-[var(--shadow-panel)]">
          {serviceOptions.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                "grid gap-4 px-5 py-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start sm:px-6",
                styles.serviceRow,
                index > 0 && "border-t border-line/70",
              )}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-surface-soft",
                  service.emphasis && "bg-accent-soft",
                )}
              >
                <ServiceIcon name={service.icon} />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>
              <p className="text-sm font-medium text-brand sm:pt-1">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleOutcomeSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
        <SectionIntro
          eyebrow="Proof"
          title="A more realistic sample of what a cleanup handoff can include."
          description="The point is not only to clean the file, but to return something your team can review, trust, and use immediately."
        />

        <div className="rounded-[var(--radius-lg)] border border-line/70 bg-white p-6 shadow-[var(--shadow-panel)] sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {sampleOutcomeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[var(--radius-md)] border border-line/70 bg-surface-soft px-4 py-4"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-line/70 pt-6">
            <p className="text-sm font-medium text-brand/78">Returned deliverables</p>
            <div className="mt-4 grid gap-3">
              {sampleOutcomeDeliverables.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-ink">
                  <CheckMark />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="border-y border-line/70 bg-accent-soft/38">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
        <SectionIntro
          eyebrow="Before / after"
          title="Outcome-focused cleanup instead of a vague processing pass."
          description="The handoff should clearly show what was cleaned, what was flagged, and what can be used next."
        />

        <div className="mt-10 rounded-[var(--radius-lg)] border border-line/70 bg-white p-6 shadow-[var(--shadow-panel)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
            <div>
              <p className="text-sm font-medium text-muted">Before</p>
              <ul className="mt-4 space-y-3">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-line" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-muted">After</p>
              <ul className="mt-4 space-y-3">
                {afterItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                    <CheckMark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-brand/10 bg-surface-soft px-5 py-4 lg:min-w-64">
              <p className="text-sm font-medium text-muted">What you receive</p>
              <ul className="mt-3 space-y-3">
                {outputItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                    <CheckMark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <SectionIntro
        eyebrow="Process"
        title="A practical 3-step workflow with real operating details."
        description={processIntro}
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className={cn(
              "rounded-[var(--radius-lg)] border border-line/70 bg-white p-6 shadow-[var(--shadow-card)]",
              styles.processCard,
            )}
          >
            <p className="text-sm font-medium text-brand">{step.number}</p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.detail}</p>
            <p className="mt-4 text-sm font-medium text-brand/80">{step.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="border-y border-line/70 bg-accent-soft/34">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
        <SectionIntro
          eyebrow="Pricing"
          title="Clearer scope anchors so the pricing feels real."
          description="Pricing stays estimate-based, but the examples below show the level of work each tier is designed for."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "rounded-[var(--radius-lg)] border p-6 shadow-[var(--shadow-card)]",
                plan.featured
                  ? "border-brand/16 bg-surface-soft shadow-[var(--shadow-panel)]"
                  : "border-line/70 bg-white/96",
                plan.featured && styles.pricingFeatured,
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{plan.note}</p>
                </div>
              
              </div>

              <p className="mt-8 text-base font-semibold text-brand">{plan.price}</p>

              <ul className="mt-5 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                    <CheckMark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-sm text-muted">{pricingNote}</p>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        <SectionIntro
          eyebrow="FAQ"
          title="The objections buyers usually need cleared up first."
          description="These answers are written to remove uncertainty before you send a sample file or request an estimate."
        />

        <div className="rounded-[var(--radius-lg)] border border-line/70 bg-white shadow-[var(--shadow-panel)]">
          <Accordion type="single" collapsible>
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index + 1}`}
                className="px-5 sm:px-6"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="border-t border-line/70 bg-surface-soft/55">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-12">
          <div className="min-w-0 max-w-2xl space-y-6">
            <div className="max-w-xl">
              <SectionIntro
                eyebrow="Start here"
                title="Send a sample file or cleanup task for review."
                description={contactIntro}
              />
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted">{tagline}</p>

            <div className="rounded-[var(--radius-lg)] border border-line/70 bg-white/90 p-5 sm:p-6">
              <div className="grid gap-3 text-sm text-muted">
                {contactReassurance.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckMark className="mt-1 text-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start">
              <ActionLink href={whatsappLink} className="w-full sm:w-auto">
                Share a file on WhatsApp
              </ActionLink>
              <ActionLink
                href={`mailto:${emailAddress}`}
                tone="secondary"
                className="w-full sm:w-auto"
              >
                Email {brandName}
              </ActionLink>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-[var(--radius-lg)] border border-line/70 bg-white p-5 shadow-[var(--shadow-panel)] sm:p-6 lg:p-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="relative overflow-x-clip bg-canvas text-ink">
      <a
        className="sr-only absolute left-4 top-4 z-50 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only"
        href="#main-content"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <SampleOutcomeSection />
        <TransformationSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
