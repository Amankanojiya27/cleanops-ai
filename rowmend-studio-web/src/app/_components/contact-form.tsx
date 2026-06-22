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
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-[var(--shadow-card)] transition",
        pending
          ? "cursor-not-allowed bg-brand/60 text-white/70"
          : "bg-brand text-white hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
      )}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          Sending...
        </span>
      ) : (
        "Send Request"
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-accent/30 bg-accent-soft p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink">Request sent</h3>
        <p className="mt-2 text-sm text-muted">
          We will review your task and get back to you shortly. If you do not hear back within a few hours, please reach out on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="min-h-12 rounded-[var(--radius-md)] border border-line bg-canvas px-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Email
          <input
            required
            name="contact"
            type="email"
            autoComplete="email"
            className="min-h-12 rounded-[var(--radius-md)] border border-line bg-canvas px-4 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-ink">
        Service needed
        <select
          name="service"
          className="min-h-12 rounded-[var(--radius-md)] border border-line bg-canvas px-4 text-base text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
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
          className="rounded-[var(--radius-md)] border border-line bg-canvas px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/10"
          placeholder="Tell us what needs to be cleaned, organized, summarized, or supported."
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-ink">
        Upload file (optional)
        <input
          name="file"
          type="file"
          className="min-h-12 rounded-[var(--radius-md)] border border-dashed border-line bg-canvas px-4 py-3 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-brand file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          accept=".csv,.xlsx,.xls,.pdf,.doc,.docx,.txt,.mp3,.mp4,.wav,.m4a"
        />
      </label>

      {state.error && (
        <p className="rounded-[var(--radius-sm)] bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.error}
        </p>
      )}

      <SubmitButton pending={pending} />
    </form>
  );
}
