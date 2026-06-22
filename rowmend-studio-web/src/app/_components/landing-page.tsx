// File: src/app/_components/landing-page.tsx
import {
  afterItems,
  beforeItems,
  benefits,
  emailAddress,
  faqs,
  heroHighlights,
  navigation,
  outputItems,
  plans,
  problems,
  serviceLinks,
  services,
  steps,
  trustChips,
  useCases,
  whatsappLink,
} from "../_content/site-content";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={cx("max-w-3xl space-y-4", centered && "mx-auto text-center")}>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function ActionLink({
  href,
  children,
  tone = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <a
      className={cx(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4",
        tone === "primary" &&
          "bg-brand text-white shadow-[0_18px_40px_rgba(16,43,58,0.18)] hover:bg-brand-strong focus-visible:outline-brand",
        tone === "secondary" &&
          "border border-line bg-white text-ink hover:border-brand/30 hover:bg-surface-muted focus-visible:outline-brand",
        className,
      )}
      href={href}
    >
      {children}
    </a>
  );
}

function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  const commonProps = {
    className: "h-5 w-5 text-brand",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "spreadsheet":
      return (
        <svg aria-hidden {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 9v11M15 9v11" />
        </svg>
      );
    case "research":
      return (
        <svg aria-hidden {...commonProps}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2M8.5 11h5M11 8.5v5" />
        </svg>
      );
    case "transcription":
      return (
        <svg aria-hidden {...commonProps}>
          <path d="M12 3a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-7 0v-4A3.5 3.5 0 0 1 12 3Z" />
          <path d="M5 10.5a7 7 0 0 0 14 0M12 17.5v3.5M8.5 21h7" />
        </svg>
      );
    case "crm":
      return (
        <svg aria-hidden {...commonProps}>
          <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M5 19a7 7 0 0 1 14 0M4 8h2M18 8h2M2.5 14H5M19 14h2.5" />
        </svg>
      );
    case "summary":
      return (
        <svg aria-hidden {...commonProps}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "automation":
      return (
        <svg aria-hidden {...commonProps}>
          <path d="M12 2v5M12 17v5M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M2 12h5M17 12h5M4.9 19.1l3.5-3.5M15.6 8.4l3.5-3.5" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    default:
      return null;
  }
}

function CheckMark() {
  return (
    <svg
      aria-hidden
      className="mt-1 h-4 w-4 flex-none text-accent"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="m3.5 8.4 2.4 2.4L12.5 4.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DataRow({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "danger" | "success";
}) {
  return (
    <div className="grid grid-cols-[18px_1fr] items-center gap-3 rounded-2xl border border-line/70 bg-white px-3 py-2.5">
      <span
        className={cx(
          "h-2.5 w-2.5 rounded-full",
          tone === "neutral" && "bg-line",
          tone === "danger" && "bg-[#d18a73]",
          tone === "success" && "bg-accent",
        )}
      />
      <span className="text-sm text-ink">{label}</span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="relative overflow-x-clip bg-canvas text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(47,138,115,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(24,57,76,0.14),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.75),transparent)]"
      />

      <a
        className="sr-only absolute left-4 top-4 z-50 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only"
        href="#main-content"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,43,58,0.16)]">
              CA
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[-0.02em] text-ink">
                CleanOps AI
              </span>
              <span className="block text-xs text-muted">
                AI-assisted back-office support
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ActionLink href="#contact" className="hidden sm:inline-flex">
            Send Your File
          </ActionLink>
        </div>
      </header>

      <main id="main-content" className="relative pb-28 md:pb-0">
        <section id="home" className="border-b border-line/70">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-10 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-16">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/12 bg-white/80 px-3 py-2 shadow-[0_14px_30px_rgba(16,32,40,0.05)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  AI-assisted back-office support
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
                  Messy files in. Clean business-ready work out.
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
                  CleanOps AI helps small teams clean spreadsheets, organize
                  business data, transcribe recordings, summarize documents, and
                  handle repetitive admin work with fast AI-assisted,
                  human-reviewed delivery.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionLink href="#contact">Send Your File</ActionLink>
                <ActionLink href="#services" tone="secondary">
                  View Services
                </ActionLink>
              </div>

              <p className="max-w-xl text-sm leading-7 text-muted">
                Spreadsheet cleanup, transcription, summaries, and admin
                automation for small teams.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-line/70 bg-white/90 p-4 shadow-[0_16px_40px_rgba(16,32,40,0.05)]"
                  >
                    <h2 className="text-sm font-semibold text-ink">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
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

            <div className="relative">
              <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="hero-float relative overflow-hidden rounded-[2rem] border border-line/70 bg-white/90 p-5 shadow-[0_30px_80px_rgba(16,32,40,0.08)] backdrop-blur">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(215,224,219,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(215,224,219,0.5)_1px,transparent_1px)] bg-[size:26px_26px] opacity-35" />
                <div className="relative space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
                        Practical delivery preview
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        Before and after spreadsheet cleanup
                      </p>
                    </div>
                    <span className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Human reviewed
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className="space-y-3 rounded-[1.5rem] border border-line/70 bg-[#fbfaf8] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                          Before
                        </span>
                        <span className="rounded-full bg-[#f3dfd8] px-2.5 py-1 text-xs text-[#8d5340]">
                          messy export
                        </span>
                      </div>
                      <div className="space-y-2">
                        <DataRow label="Row 42: duplicate contact" tone="danger" />
                        <DataRow label="Email column mixed formats" tone="danger" />
                        <DataRow label="Blank company values" tone="neutral" />
                        <DataRow label="Unclear status labels" tone="neutral" />
                      </div>
                    </div>

                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand shadow-[0_10px_30px_rgba(16,32,40,0.06)]">
                      <svg
                        aria-hidden
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10h12m-4-4 4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="space-y-3 rounded-[1.5rem] border border-brand/10 bg-white p-4 shadow-[0_16px_36px_rgba(16,43,58,0.06)]">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                          After
                        </span>
                        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent">
                          client-ready
                        </span>
                      </div>
                      <div className="space-y-2">
                        <DataRow label="Deduplicated contact list" tone="success" />
                        <DataRow label="Standardized email formatting" tone="success" />
                        <DataRow label="Tagged by category and source" tone="success" />
                        <DataRow label="Summary note for next steps" tone="success" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.5rem] border border-line/70 bg-surface-muted p-4">
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
                    <div className="rounded-[1.5rem] border border-line/70 bg-brand p-4 text-white">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                        Scope note
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/85">
                        We confirm pricing, timeline, and delivery format before
                        the task begins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <SectionIntro
            eyebrow="The problem"
            title="Admin work gets expensive when the data is messy."
            description="Duplicate contacts, broken CSVs, scattered notes, long recordings, and endless copy-paste work slow down teams that should be spending time on clients, sales, and delivery."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-[1.5rem] border border-line/70 bg-white p-5 shadow-[0_16px_40px_rgba(16,32,40,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(16,32,40,0.08)]"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-surface-muted p-3 text-brand">
                  <span className="block h-full w-full rounded-full border border-brand/10" />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {problem.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="border-y border-line/70 bg-white/70">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <SectionIntro
              eyebrow="Services"
              title="Back-office help built for real business tasks."
              description="Each service is designed to remove manual cleanup, make your data usable, and save time without adding a complicated new system."
              centered
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.75rem] border border-line/70 bg-white p-6 shadow-[0_18px_44px_rgba(16,32,40,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <div className="mt-5 space-y-2 border-t border-line/70 pt-5 text-sm">
                    <p className="text-muted">{service.audience}</p>
                    <p className="font-mono font-semibold uppercase tracking-[0.16em] text-brand">
                      {service.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <SectionIntro
                eyebrow="Before and after"
                title="From messy raw data to client-ready output"
                description="We do not just process files. We organize them so they are easier to use, easier to share, and easier to trust."
              />
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 rounded-[2rem] border border-line/70 bg-white p-5 shadow-[0_20px_50px_rgba(16,32,40,0.05)] md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#fbfaf8] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Before
                  </p>
                  <ul className="mt-4 space-y-3">
                    {beforeItems.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-ink">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#d18a73]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] bg-accent-soft/70 p-5">
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
              </div>

              <div className="rounded-[1.75rem] border border-line/70 bg-brand p-6 text-white shadow-[0_20px_50px_rgba(16,43,58,0.12)]">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                  Typical handoff
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {outputItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-line/70 bg-surface-muted/55">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <SectionIntro
              eyebrow="How it works"
              title="A simple four-step process for messy back-office work."
              description="The flow is built to feel clear from the first message to the final file."
              centered
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.75rem] border border-line/70 bg-white p-6 shadow-[0_18px_40px_rgba(16,32,40,0.04)]"
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
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple pricing for one-off tasks and ongoing support."
            description="Choose the level that fits the amount of admin work you need to hand off."
            centered
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={cx(
                  "rounded-[2rem] border p-6 shadow-[0_18px_44px_rgba(16,32,40,0.05)]",
                  plan.featured
                    ? "border-brand bg-brand text-white shadow-[0_24px_60px_rgba(16,43,58,0.12)]"
                    : "border-line/70 bg-white",
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
                      Popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.18em]">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7">
                      <CheckMark />
                      <span className={plan.featured ? "text-white/88" : "text-ink"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-line/70 bg-white px-5 py-4 text-center text-sm text-muted shadow-[0_16px_36px_rgba(16,32,40,0.04)]">
            Final price depends on file size, deadline, and complexity.
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink href="#contact">Send Your File</ActionLink>
            <ActionLink href="#contact" tone="secondary">
              Ask About Monthly Support
            </ActionLink>
          </div>
        </section>

        <section className="border-y border-line/70 bg-white/70">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <SectionIntro
              eyebrow="Use cases"
              title="Examples of tasks CleanOps AI can handle."
              description="These are the kinds of practical jobs small businesses, creators, and agencies ask for most often."
              centered
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.5rem] border border-line/70 bg-white p-5 shadow-[0_16px_40px_rgba(16,32,40,0.04)]"
                >
                  <p className="text-base leading-7 text-ink">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionIntro
              eyebrow="Why choose us"
              title="Practical support for small teams that need clean outputs fast."
              description="The service is designed to be easy to buy, easy to understand, and useful immediately after delivery."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit}
                  className="rounded-[1.5rem] border border-line/70 bg-white p-5 shadow-[0_16px_40px_rgba(16,32,40,0.04)]"
                >
                  <div className="flex gap-3">
                    <CheckMark />
                    <p className="text-sm leading-7 text-ink">{benefit}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-line/70 bg-surface-muted/55">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
            <SectionIntro
              eyebrow="FAQ"
              title="Questions people usually ask before sending a task."
              description="Clear answers help reduce hesitation and keep the next step simple."
              centered
            />

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.5rem] border border-line/70 bg-white p-5 shadow-[0_16px_36px_rgba(16,32,40,0.04)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.question}
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line bg-surface-muted text-brand transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="Contact"
                title="Send the task, confirm the scope, and get moving."
                description="Use WhatsApp, email, or the contact form below. Keep the first message simple. A sample file or short description is enough to start."
              />

              <div className="grid gap-4">
                <a
                  href={whatsappLink}
                  className="rounded-[1.5rem] border border-line/70 bg-white p-5 shadow-[0_16px_40px_rgba(16,32,40,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(16,32,40,0.08)]"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                    WhatsApp
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink">
                    Send on WhatsApp
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Best for quick scope checks, urgent cleanup jobs, and simple
                    task handoff.
                  </p>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="rounded-[1.5rem] border border-line/70 bg-white p-5 shadow-[0_16px_40px_rgba(16,32,40,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(16,32,40,0.08)]"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                    Email
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink">
                    Email your task
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Ideal for longer descriptions, file samples, and monthly
                    support requests.
                  </p>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-line/70 bg-white p-6 shadow-[0_22px_50px_rgba(16,32,40,0.05)]">
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
                    defaultValue="Spreadsheet Cleanup"
                  >
                    {services.map((service) => (
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
                    placeholder="Tell us what needs to be cleaned, organized, summarized, or automated."
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
                    If your mail app does not attach files automatically, send the
                    file in your reply or on WhatsApp after scope confirmation.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(16,43,58,0.18)] transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-line/70 bg-brand px-6 py-10 text-white shadow-[0_24px_60px_rgba(16,43,58,0.14)] sm:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
                  Final call to action
                </p>
                <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Have a messy file or admin task? Send it today.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                  Share the task, get a clear scope, and receive clean usable
                  output without turning it into a bigger project than it needs
                  to be.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionLink
                  href={whatsappLink}
                  className="bg-white text-brand hover:bg-surface-muted focus-visible:outline-white"
                >
                  Send on WhatsApp
                </ActionLink>
                <ActionLink
                  href={`mailto:${emailAddress}`}
                  tone="secondary"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white"
                >
                  Email Your Task
                </ActionLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">
              CleanOps AI
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              AI-assisted back-office support for messy business work. Clean
              spreadsheets, better summaries, simpler admin systems.
            </p>
            <div className="mt-5">
              <ActionLink href="#contact">Send Your File</ActionLink>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a className="transition hover:text-ink" href={`mailto:${emailAddress}`}>
                  {emailAddress}
                </a>
              </li>
              <li>
                <a className="transition hover:text-ink" href={whatsappLink}>
                  WhatsApp link placeholder
                </a>
              </li>
              <li>Privacy-conscious process for business files and recordings.</li>
              <li>Copyright {new Date().getFullYear()} CleanOps AI</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line/70 bg-white/95 p-3 shadow-[0_-18px_42px_rgba(16,32,40,0.08)] backdrop-blur md:hidden">
        <ActionLink href="#contact" className="w-full">
          Send Your File
        </ActionLink>
      </div>
    </div>
  );
}
