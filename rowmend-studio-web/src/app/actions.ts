"use server";

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

  if (!name?.trim()) {
    return { success: false, error: "Please enter your name." };
  }
  if (!contact?.trim()) {
    return { success: false, error: "Please enter your email address." };
  }
  if (!description?.trim()) {
    return { success: false, error: "Please describe your task or file." };
  }

  try {
    const body = new FormData();
    body.set("name", name);
    body.set("contact", contact);
    body.set("service", service || "Spreadsheet cleanup");
    body.set("description", description);
    if (file && file.size > 0) {
      body.set("file", file);
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${origin}/api/contact`, {
      method: "POST",
      body,
    });

    if (!res.ok) {
      const data = await res.json();
      return { success: false, error: data.error || "Failed to send request." };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: `Could not reach the server. Please email us at ${emailAddress} or try again.`,
    };
  }
}
