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
  cx,
} from "./landing-primitives";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

function HeroSection() {
  return (
    <section id="home" className="border-b border-line/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-10 sm:px-6 sm:pb-18 lg:grid-cols-[1.03fr_0.97fr] lg:pb-24 lg:pt-18">
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

          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {heroHighlights.map((item) => (
              <ProofCard key={item.title} item={item} />
            ))}
          </div>

          <div className="grid gap-4 rounded-[1.8rem] border border-line/70 bg-white/72 p-4 shadow-[var(--shadow-card)] md:grid-cols-[1.1fr_0.9fr]">
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
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-[1.1rem] border border-line/70 bg-surface px-4 py-3"
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
          <div className="absolute inset-x-8 top-10 h-40 rounded-full bg-[radial-gradient(circle,rgba(123,143,105,0.16),transparent_70%)] blur-3xl" />
          <div className="hero-float relative overflow-hidden rounded-[2.1rem] border border-line/75 bg-white/90 p-5 shadow-[var(--shadow-panel)] backdrop-blur">
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
                <div className="space-y-3 rounded-[1.45rem] border border-line/70 bg-[#fbf8f2] p-4">
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

                <div className="space-y-3 rounded-[1.45rem] border border-brand/10 bg-surface p-4 shadow-[var(--shadow-card)]">
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

              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-[1.45rem] border border-line/70 bg-surface-soft p-4">
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
                <div className="rounded-[1.45rem] border border-brand/10 bg-brand p-4 text-white">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                    Scope note
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/84">
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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 sm:py-22 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-8">
          <SectionIntro
            eyebrow="The problem"
            title={sectionCopy.problem.title}
            description={sectionCopy.problem.description}
          />

          <div className="space-y-3">
            {problems.map((problem, index) => (
              <article
                key={problem.title}
                className={cx(
                  "rounded-[1.6rem] border border-line/70 bg-surface p-5 shadow-[var(--shadow-card)]",
                  index === 1 && "lg:ml-8",
                )}
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{problem.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-brand/10 bg-brand p-6 text-white shadow-[0_24px_60px_rgba(23,33,38,0.12)]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              Trust and fit
            </p>
            <div className="mt-5 grid gap-4">
              {proofItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.15rem] border border-white/10 bg-white/6 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/78">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.8rem] border border-line/70 bg-surface p-5 shadow-[var(--shadow-card)]">
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

            <div className="rounded-[1.8rem] border border-line/70 bg-surface-soft p-5">
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
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionIntro
          eyebrow="Services"
          title={sectionCopy.services.title}
          description={sectionCopy.services.description}
        />

        <div className="grid gap-5">
          {serviceOptions.map((service, index) => (
            <article
              key={service.title}
              className={cx(
                "grid gap-5 rounded-[1.85rem] border border-line/70 bg-surface p-6 shadow-[var(--shadow-card)] md:grid-cols-[auto_1fr_auto]",
                index % 2 === 0 && "md:mr-10",
                index % 2 === 1 && "md:ml-10",
              )}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft">
                <ServiceIcon name={service.icon} />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>
              <div className="space-y-2 border-t border-line/70 pt-4 text-sm md:border-t-0 md:border-l md:pl-5 md:pt-0">
                <p className="font-mono font-semibold uppercase tracking-[0.16em] text-brand">
                  {service.price}
                </p>
                <p className="text-muted md:max-w-[16rem]">{service.audience}</p>
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
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionIntro
          eyebrow="Before and after"
          title={sectionCopy.transformation.title}
          description={sectionCopy.transformation.description}
        />

        <div className="space-y-5">
          <div className="grid gap-5 rounded-[2.15rem] border border-line/70 bg-surface p-5 shadow-[var(--shadow-panel)] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[1.6rem] bg-[#fbf8f2] p-5">
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

            <div className="grid gap-5 lg:grid-cols-[1fr_0.84fr]">
              <div className="rounded-[1.6rem] bg-accent-soft/78 p-5">
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
              <div className="rounded-[1.6rem] border border-brand/10 bg-brand p-5 text-white">
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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-18 sm:px-6 sm:py-22 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <SectionIntro
            eyebrow="How it works"
            title={sectionCopy.process.title}
            description={sectionCopy.process.description}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-line/70 bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-line/70 bg-surface p-6 shadow-[var(--shadow-panel)]">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            Why the process works for lean teams
          </p>
          <div className="mt-5 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-[1.2rem] border border-line/70 bg-surface-soft px-4 py-4"
              >
                <CheckMark />
                <p className="text-sm leading-7 text-ink">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22">
      <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
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
                className={cx(
                  "rounded-[2rem] border p-6 shadow-[var(--shadow-card)]",
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
                      className={cx(
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

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[1.8rem] border border-line/70 bg-surface-soft p-5">
              <p className="text-sm leading-7 text-muted">{pricingNote}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="#contact">Send a File</ActionLink>
                <ActionLink href="#contact" tone="secondary">
                  Ask About Monthly Support
                </ActionLink>
              </div>
            </div>

            <div id="faq" className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                Practical questions
              </p>
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.4rem] border border-line/70 bg-surface p-5 shadow-[var(--shadow-card)]"
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
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Final CTA"
            title={sectionCopy.contact.title}
            description={sectionCopy.contact.description}
          />

          <p className="max-w-xl text-sm leading-7 text-muted">
            {contactSupportText}
          </p>

          <div className="grid gap-4">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[1.5rem] border border-line/70 bg-surface p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(23,33,38,0.08)]"
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

        <div className="rounded-[2rem] border border-line/70 bg-surface p-6 shadow-[var(--shadow-panel)]">
          <form
            action={`mailto:${emailAddress}`}
            method="post"
            encType="text/plain"
            className="grid gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="min-h-12 rounded-2xl border border-line bg-canvas px-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-ink">
                Email or WhatsApp
                <input
                  required
                  name="contact"
                  type="text"
                  autoComplete="email"
                  className="min-h-12 rounded-2xl border border-line bg-canvas px-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
                  placeholder="Email address or number"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-ink">
              Service needed
              <select
                name="service"
                className="min-h-12 rounded-2xl border border-line bg-canvas px-4 text-base text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
                defaultValue="Spreadsheet cleanup"
              >
                {serviceOptions.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink">
              File or task description
              <textarea
                required
                name="description"
                rows={6}
                className="rounded-[1.5rem] border border-line bg-canvas px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
                placeholder="Tell us what needs to be cleaned, organized, summarized, or supported."
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-ink">
              Upload file (optional)
              <input
                name="file"
                type="file"
                className="min-h-12 rounded-2xl border border-dashed border-line bg-canvas px-4 py-3 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-brand file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                accept=".csv,.xlsx,.xls,.pdf,.doc,.docx,.txt,.mp3,.mp4,.wav,.m4a"
                aria-describedby="file-help"
              />
              <span id="file-help" className="text-sm leading-6 text-muted">
                This opens an email draft. If your mail app does not attach the
                file automatically, send it in your reply or on WhatsApp after scope confirmation.
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Prepare Email Request
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-brand/10 bg-brand px-6 py-10 text-white shadow-[0_24px_60px_rgba(23,33,38,0.14)] sm:px-10">
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(123,143,105,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(32,59,69,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.72),transparent)]"
      />

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
