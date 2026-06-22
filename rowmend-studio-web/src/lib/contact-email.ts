// File: rowmend-studio-web/src/lib/contact-email.ts
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactFrom = process.env.CONTACT_FROM;
const contactTo = process.env.CONTACT_TO;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export type ContactSubmission = {
  name: string;
  contact: string;
  service: string;
  description: string;
  file?: File | null;
};

export function validateContactSubmission({
  name,
  contact,
  description,
}: Pick<ContactSubmission, "name" | "contact" | "description">) {
  if (!name.trim()) {
    return "Please enter your name.";
  }

  if (!contact.trim()) {
    return "Please enter your email address.";
  }

  if (!description.trim()) {
    return "Please describe your task or file.";
  }

  return null;
}

export async function sendContactEmail({
  name,
  contact,
  service,
  description,
  file,
}: ContactSubmission) {
  if (!resend || !contactFrom || !contactTo) {
    return {
      ok: false as const,
      error: "Email delivery is not configured yet. Please try again later.",
    };
  }

  const attachments =
    file && file.size > 0
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          },
        ]
      : [];

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const { error } = await resend.emails.send({
    from: contactFrom,
    to: [contactTo],
    replyTo: contact,
    subject: `New cleanup request from ${name}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Service: ${service || "Spreadsheet cleanup"}`,
      `Submitted: ${submittedAt}`,
      "",
      "Description:",
      description,
      "",
      file && file.size > 0 ? `Attachment: ${file.name}` : "Attachment: None",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #171c18; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">New contact form submission</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Contact:</strong> ${escapeHtml(contact)}</p>
        <p style="margin: 0 0 8px;"><strong>Service:</strong> ${escapeHtml(service || "Spreadsheet cleanup")}</p>
        <p style="margin: 0 0 16px;"><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <p style="margin: 0 0 8px;"><strong>Description:</strong></p>
        <div style="padding: 12px 14px; border: 1px solid #dfe8de; background: #f4faf1; border-radius: 12px; white-space: pre-wrap;">${escapeHtml(description)}</div>
        <p style="margin: 16px 0 0;"><strong>Attachment:</strong> ${file && file.size > 0 ? escapeHtml(file.name) : "None"}</p>
      </div>
    `,
    attachments,
  });

  if (error) {
    return {
      ok: false as const,
      error: "Something went wrong. Please try again or reach out via WhatsApp.",
      cause: error,
    };
  }

  return { ok: true as const };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
