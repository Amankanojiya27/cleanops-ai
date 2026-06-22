// File: rowmend-studio-web/src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendContactEmail, validateContactSubmission } from "@/lib/contact-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const file = formData.get("file") as File | null;

    const validationError = validateContactSubmission({ name, contact, description });
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 },
      );
    }

    const result = await sendContactEmail({
      name,
      contact,
      service: service || "Spreadsheet cleanup",
      description,
      file,
    });

    if (!result.ok) {
      if ("cause" in result && result.cause) {
        console.error("Resend contact form delivery failed:", result.cause);
      }

      return NextResponse.json(
        { error: result.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again or reach out via WhatsApp." },
      { status: 500 },
    );
  }
}
