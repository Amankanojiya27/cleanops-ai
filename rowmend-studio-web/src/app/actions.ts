// File: rowmend-studio-web/src/app/actions.ts
"use server";

import { sendContactEmail, validateContactSubmission } from "@/lib/contact-email";

const emailAddress = "hello@rowmend.studio";

export type ContactState = {
  success: boolean;
  error?: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const service = formData.get("service") as string;
  const description = formData.get("description") as string;
  const file = formData.get("file") as File | null;

  const validationError = validateContactSubmission({ name, contact, description });
  if (validationError) {
    return { success: false, error: validationError };
  }

  try {
    const result = await sendContactEmail({
      name,
      contact,
      service: service || "Spreadsheet cleanup",
      description,
      file,
    });

    if (!result.ok) {
      if ("cause" in result && result.cause) {
        console.error("Contact form delivery failed:", result.cause);
      }

      return { success: false, error: result.error };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: `Could not reach the server. Please email us at ${emailAddress} or try again.`,
    };
  }
}
