import { cn } from "@/lib/cn";
import {
  afterItems,
  audienceChips,
  benefits,
  beforeItems,
  brandName,
  contactCards,
  contactSupportText,
  emailAddress,
  faqs,
  heroHighlights,
  heroLead,
  heroMetrics,
  heroSubheadline,
  heroTitle,
  outputDetails,
  outputItems,
  plans,
  pricingNote,
  problems,
  proofItems,
  sectionCopy,
  serviceOptions,
  steps,
  tagline,
  trustChips,
  whatsappLink,
} from "../_content/site-content";
import {
  ActionLink,
  CheckMark,
  DataRow,
  ProofCard,
  SectionIntro,
  ServiceIcon,
} from "./landing-primitives";
import ContactForm from "./contact-form";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

function HeroSection() {
  return (
    <section id="home" className="border-b border-line/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-10 sm:px-6 sm:pb-18 lg:grid-cols-[1fr_1fr] lg:pb-24 lg:pt-18">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/12 bg-white/88 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              AI-assisted data cleanup
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="font-serif max-w-4xl text-balance text-[3rem] font-semibold tracking-[-0.05em] text-ink sm:text-[4.4rem] lg:text-[5.35rem] lg:leading-[0.98]">
              {heroTitle}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
              {heroSubheadline}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {heroLead}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#contact">Send a File</ActionLink>
            <ActionLink href="#services" tone="secondary">
              See Services
            </ActionLink>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>

          <div className="grid gap-4 rounded-[var(--radius-lg)] border border-line/70 bg-white/72 p-4 shadow-[var(--shadow-card)] sm:grid-cols-[1fr_1fr]">
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Best fit for
              </p>
              <div className="flex flex-wrap gap-2">
                {audienceChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-[var(--radius-md)] border border-line/70 bg-surface px-4 py-3"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-0 h-40 rounded-full bg-[radial-gradient(circle,rgba(123,143,105,0.16),transparent_70%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line/75 bg-white/90 p-5 shadow-[var(--shadow-panel)] backdrop-blur">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,208,194,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,208,194,0.28)_1px,transparent_1px)] bg-[size:28px_28px] opacity-50" />
            <div className="relative space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
                    Delivery preview
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Before and after spreadsheet cleanup
                  </p>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Reviewed before delivery
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <div className="space-y-3 rounded-[var(--radius-md)] border border-line/70 bg-[#fbf8f2] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      Before
                    </span>
                    <span className="rounded-full bg-[#f1ddd6] px-2.5 py-1 text-xs text-[#8d5646]">
                      raw export
                    </span>
                  </div>
                  <div className="space-y-2">
                    <DataRow label="Duplicate contact rows across tabs" tone="danger" />
                    <DataRow label="Mixed email and phone formats" tone="danger" />
                    <DataRow label="Blank source fields and loose notes" tone="neutral" />
                    <DataRow label="Status labels changed by team member" tone="neutral" />
                  </div>
                </div>

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-brand shadow-[0_10px_28px_rgba(23,33,38,0.06)]">
                  <svg aria-hidden className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12m-4-4 4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="space-y-3 rounded-[var(--radius-md)] border border-brand/10 bg-surface p-4 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      After
                    </span>
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent">
                      ready to use
                    </span>
                  </div>
                  <div className="space-y-2">
                    <DataRow label="Deduplicated contact list and clean headers" tone="success" />
                    <DataRow label="Standardized formats for import or follow-up" tone="success" />
                    <DataRow label="Tagged categories and clearer ownership fields" tone="success" />
                    <DataRow label="Short handoff summary with notes" tone="success" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
                <div className="rounded-[var(--radius-md)] border border-line/70 bg-surface-soft p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Included with delivery
                  </p>
                  <div className="mt-4 space-y-3">
                    {outputItems.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-ink">
                        <CheckMark />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[var(--radius-md)] border border-brand/10 bg-brand p-4 text-white">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                    Scope note
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/85">
                    Price, timing, and delivery format are confirmed before work
                    starts, so the handoff stays straightforward.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {trustChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs text-white/82"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContextSection() {
  return (
    <section className="border-y border-line/70 bg-white/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 sm:py-22 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <div className="space-y-8">
          <SectionIntro
            eyebrow="The problem"
            title={sectionCopy.problem.title}
            description={sectionCopy.problem.description}
          />

          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line/70 bg-surface shadow-[var(--shadow-panel)]">
            {problems.map((problem, index) => (
              <article
                key={problem.title}
                className={cn(
                  "grid gap-4 px-5 py-5 sm:grid-cols-[auto_1fr] sm:gap-5 sm:px-6",
                  index > 0 && "border-t border-line/70",
                  index === 1 && "bg-surface-soft/70",
                )}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                    {problem.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.84fr)]">
            <div className="rounded-[var(--radius-lg)] border border-line/70 bg-surface-soft p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Where the drag usually shows up
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                End-of-week cleanup, pre-client handoffs, CRM imports, internal notes,
                and follow-up lists usually end up absorbing the hours that should be
                spent on revenue-generating work.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-brand/10 bg-brand p-5 text-white">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                Better outcome
              </p>
              <p className="mt-4 text-sm leading-7 text-white/82">
                The goal is not more tooling. It is a calmer handoff, cleaner data, and
                fewer late cleanup sessions inside a small team.
              </p>
            </div>
          </div>
        </div>

        <div className="grid content-start gap-5">
          <div className="rounded-[var(--radius-lg)] border border-brand/10 bg-brand p-6 text-white shadow-[0_24px_60px_rgba(23,33,38,0.12)]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              Trust and fit
            </p>
            <div className="mt-5 space-y-0">
              {proofItems.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "px-1 py-4",
                    index > 0 && "border-t border-white/10",
                  )}
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/78">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-line/70 bg-surface p-5 shadow-[var(--shadow-card)]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                Best suited to
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {audienceChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line bg-surface-soft px-3 py-1.5 text-sm text-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-line/70 bg-surface-soft p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Common file types
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionIntro
            eyebrow="Services"
            title={sectionCopy.services.title}
            description={sectionCopy.services.description}
          />

          <div className="mt-8 rounded-[var(--radius-lg)] border border-line/70 bg-surface-soft p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
              Typical uses
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <p>One export that needs cleanup before the next handoff.</p>
              <p>Recurring admin work that keeps reappearing at the wrong time.</p>
              <p>A file, transcript, or document that needs structure before it is useful.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-line/70 bg-surface/72 px-5 shadow-[var(--shadow-panel)] sm:px-6">
          {serviceOptions.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                "grid gap-5 py-6 md:grid-cols-[4.5rem_minmax(0,1fr)_15rem] md:items-start",
                index > 0 && "border-t border-line/70",
                index % 2 === 1 && "md:pl-10",
                index % 3 === 2 && "md:pl-18",
              )}
            >
              <div className="flex items-center gap-3 md:block">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  0{index + 1}
                </p>
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-surface-soft md:mt-3">
                  <ServiceIcon name={service.icon} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>

              <div className="grid gap-3 border-t border-line/70 pt-4 text-sm md:border-l md:border-t-0 md:pl-5 md:pt-0">
                <p className="inline-flex w-fit rounded-full border border-brand/12 bg-brand/6 px-3 py-1.5 font-mono font-semibold uppercase tracking-[0.16em] text-brand">
                  {service.price}
                </p>
                <p className="text-muted md:max-w-[15rem]">{service.audience}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <SectionIntro
          eyebrow="Before and after"
          title={sectionCopy.transformation.title}
          description={sectionCopy.transformation.description}
        />

        <div className="space-y-5">
          <div className="grid gap-5 rounded-[var(--radius-lg)] border border-line/70 bg-surface p-5 shadow-[var(--shadow-panel)] lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[var(--radius-md)] bg-[#fbf8f2] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Before
              </p>
              <ul className="mt-4 space-y-3">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#c57a63]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[var(--radius-md)] bg-accent-soft/78 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  After
                </p>
                <ul className="mt-4 space-y-3">
                  {afterItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                      <CheckMark />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-md)] border border-brand/10 bg-brand p-5 text-white">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                  What the handoff includes
                </p>
                <div className="mt-4 space-y-3">
                  {outputDetails.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-7 text-white/84">
                      <CheckMark className="text-[#d7e4d9]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="border-y border-line/70 bg-surface-soft/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 sm:py-22 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionIntro
            eyebrow="How it works"
            title={sectionCopy.process.title}
            description={sectionCopy.process.description}
          />

          <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-line/70 bg-surface shadow-[var(--shadow-panel)]">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={cn(
                  "grid gap-5 px-5 py-5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:px-6",
                  index > 0 && "border-t border-line/70",
                )}
              >
                <div className="flex gap-4 sm:flex-col sm:items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                    {step.number}
                  </div>
                  {index < steps.length - 1 ? (
                    <span className="hidden h-full w-px bg-line sm:block" />
                  ) : null}
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                    {step.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-5 lg:pt-24">
          <div className="rounded-[var(--radius-lg)] border border-brand/10 bg-brand p-6 text-white shadow-[0_24px_60px_rgba(23,33,38,0.12)]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              Why the process works for lean teams
            </p>
            <div className="mt-5 space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={cn(
                    "flex gap-3 px-1 py-4",
                    index > 0 && "border-t border-white/10",
                  )}
                >
                  <CheckMark className="text-[#d7e4d9]" />
                  <p className="text-sm leading-7 text-white/86">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-line/70 bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Practical advantage
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              There is no long onboarding flow here. Most jobs start with a sample
              file, a short description, and a clear confirmation on scope, timing,
              and price before any work begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <SectionIntro
          eyebrow="Pricing"
          title={sectionCopy.pricing.title}
          description={sectionCopy.pricing.description}
        />

        <div className="space-y-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "rounded-[var(--radius-lg)] border p-6 shadow-[var(--shadow-card)]",
                  plan.featured
                    ? "border-brand bg-brand text-white shadow-[0_26px_70px_rgba(23,33,38,0.14)] lg:-translate-y-4"
                    : "border-line/70 bg-surface",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {plan.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-7",
                        plan.featured ? "text-white/80" : "text-muted",
                      )}
                    >
                      {plan.audience}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-white">
                      Best starting point
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.18em]">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7">
                      <CheckMark className={plan.featured ? "text-[#d9e6da]" : undefined} />
                      <span className={plan.featured ? "text-white/88" : "text-ink"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[var(--radius-lg)] border border-brand/10 bg-surface-soft p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                Pricing note
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{pricingNote}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="#contact">Send a File</ActionLink>
                <ActionLink href="#contact" tone="secondary">
                  Ask About Monthly Support
                </ActionLink>
              </div>
            </div>

            <div
              id="faq"
              className="overflow-hidden rounded-[var(--radius-lg)] border border-line/70 bg-surface shadow-[var(--shadow-card)]"
            >
              <div className="border-b border-line/70 px-5 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                  Practical questions
                </p>
              </div>
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  className={cn("group px-5 py-5", index > 0 && "border-t border-line/70")}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold tracking-[-0.02em] text-ink">
                    {item.question}
                    <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line bg-surface-soft text-brand transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Final CTA"
            title={sectionCopy.contact.title}
            description={sectionCopy.contact.description}
          />

          <p className="max-w-xl text-sm leading-7 text-muted">
            {contactSupportText}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[var(--radius-lg)] border border-line/70 bg-surface p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(23,33,38,0.08)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                  {card.channel}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.detail}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-line/70 bg-surface p-6 shadow-[var(--shadow-panel)]">
          <ContactForm />
        </div>
      </div>

      <div className="mt-8 rounded-[var(--radius-lg)] border border-brand/10 bg-brand px-6 py-10 text-white shadow-[0_24px_60px_rgba(23,33,38,0.14)] sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              {brandName}
            </p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Send the task, confirm the scope, and get a cleaner handoff.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
              {tagline}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href={whatsappLink}
              className="bg-white text-brand hover:bg-surface-soft focus-visible:outline-white"
            >
              Send on WhatsApp
            </ActionLink>
            <ActionLink
              href={`mailto:${emailAddress}`}
              tone="ghost"
            >
              Email {brandName}
            </ActionLink>
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

      <main id="main-content" className="relative pb-28 md:pb-0">
        <HeroSection />
        <ContextSection />
        <ServicesSection />
        <TransformationSection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </main>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line/70 bg-surface/95 p-3 shadow-[0_-18px_42px_rgba(23,33,38,0.08)] backdrop-blur md:hidden">
        <ActionLink href="#contact" className="w-full">
          Start a Task
        </ActionLink>
      </div>
    </div>
  );
}
