// File: rowmend-studio-web/src/app/_components/contact-form.tsx
"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "../actions";
import { cn } from "@/lib/cn";
import { serviceOptions } from "../_content/site-content";

const initialState: ContactState = { success: false };

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-(--shadow-card) transition sm:w-auto",
        pending
          ? "cursor-not-allowed bg-brand/45 text-white/80"
          : "bg-brand text-white hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
      )}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          Sending request...
        </span>
      ) : (
        "Request a cleanup estimate"
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className="rounded-lg border border-brand/14 bg-accent-soft p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/12">
          <svg className="h-7 w-7 text-brand" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-muted">
          I&apos;ll review the file or task and reply with scope, timing, and price. If a file was attached, it will be reviewed privately.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid min-w-0 gap-5">
      <div className="min-w-0 space-y-2">
        <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink sm:text-2xl">
          Request a cleanup estimate
        </h3>
        <p className="max-w-xl text-sm leading-7 text-muted">
          Typical reply within 2-6 business hours. Small sample files are welcome, and scope, timing, and pricing are confirmed before work begins.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="min-h-12 w-full min-w-0 rounded-md border border-line bg-white px-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="Your name"
          />
          <span className="text-xs leading-5 font-normal text-muted">
            Use the name you want on the reply and handoff summary.
          </span>
        </label>

        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Email
          <input
            required
            name="contact"
            type="email"
            autoComplete="email"
            className="min-h-12 w-full min-w-0 rounded-md border border-line bg-white px-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="you@example.com"
          />
          <span className="text-xs leading-5 font-normal text-muted">
            This is where the estimate and follow-up questions will be sent.
          </span>
        </label>
      </div>

      <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
        What do you need cleaned or reviewed?
        <select
          name="service"
          className="min-h-12 w-full min-w-0 rounded-md border border-line bg-white px-4 text-base text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
          defaultValue="Spreadsheet cleanup"
        >
          {serviceOptions.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <span className="text-xs leading-5 font-normal text-muted">
          Spreadsheet cleanup and CRM/contact cleanup are the most common starting points.
        </span>
      </label>

      <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
        File or task description
        <textarea
          required
          name="description"
          rows={5}
          className="w-full min-w-0 rounded-md border border-line bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
          placeholder="Example: CRM export with duplicate contacts, inconsistent phone formats, and missing owner fields. Need a cleaned Excel file plus a review summary."
        />
        <span className="text-xs leading-5 font-normal text-muted">
          Helpful details: row count, file type, deadline, and whether you need Excel, CSV, or Google Sheets-compatible output.
        </span>
      </label>

      <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
        Upload file (optional)
        <input
          name="file"
          type="file"
          className="min-h-12 w-full min-w-0 max-w-full overflow-hidden rounded-md border border-dashed border-line bg-white px-4 py-3 text-sm text-muted file:mr-3 file:max-w-full file:truncate file:rounded-full file:border file:border-brand/16 file:bg-accent-soft file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand"
          accept=".csv,.xlsx,.xls,.pdf,.doc,.docx,.txt,.mp3,.mp4,.wav,.m4a"
        />
        <span className="text-xs leading-5 font-normal text-muted">
          Files are reviewed privately and are never shared publicly.
        </span>
      </label>

      {state.error && (
        <p className="rounded-sm bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.error}
        </p>
      )}

      <p className="text-xs leading-6 text-muted">
        You&apos;ll receive scope, timing, and pricing before any work begins. One revision is included within the agreed scope.
      </p>

      <div className="flex min-w-0">
        <SubmitButton pending={pending} />
      </div>
    </form>
  );
}
