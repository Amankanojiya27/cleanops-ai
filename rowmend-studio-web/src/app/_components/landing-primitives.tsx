import { cn } from "@/lib/cn";
import { brandName, serviceOptions } from "../_content/site-content";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-line/80 bg-white text-brand shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <svg viewBox="0 0 44 44" className="h-6 w-6" fill="none">
        <rect x="8" y="10" width="18" height="5" rx="2.5" fill="currentColor" opacity="0.92" />
        <rect x="8" y="19.5" width="12" height="5" rx="2.5" fill="currentColor" opacity="0.7" />
        <path
          d="M20.5 29.5 26 24l4 3.8L36 20"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>
    </span>
  );
}

export function SectionIntro({
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
    <div className={cn("max-w-3xl space-y-3", centered && "mx-auto text-center")}>
      <p className="text-sm font-medium text-brand/78">
        {eyebrow}
      </p>
      <h2 className="font-serif text-balance text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="max-w-[60ch] text-pretty text-base leading-7 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function ActionLink({
  href,
  children,
  tone = "primary",
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4",
        tone === "primary" &&
          "bg-brand text-white shadow-[var(--shadow-card)] hover:-translate-y-px hover:bg-brand-strong focus-visible:outline-brand",
        tone === "secondary" &&
          "border border-brand/18 bg-white/96 text-ink hover:-translate-y-px hover:border-brand/30 hover:bg-surface-soft focus-visible:outline-brand",
        tone === "ghost" &&
          "text-muted hover:text-ink focus-visible:outline-brand",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function CheckMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("mt-1 h-4 w-4 flex-none text-brand", className)}
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

export function ServiceIcon({
  name,
}: {
  name: (typeof serviceOptions)[number]["icon"];
}) {
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

export function BrandLabel() {
  return (
    <span>
      <span className="block text-sm font-semibold tracking-[-0.02em] text-ink">
        {brandName}
      </span>
      <span className="block text-xs text-muted">
        AI-assisted cleanup and back-office support
      </span>
    </span>
  );
}
