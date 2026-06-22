import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    formData.get("service");
    const description = formData.get("description") as string;
    const file = formData.get("file") as File | null;

    if (!name || !contact || !description) {
      return NextResponse.json(
        { error: "Name, contact, and description are required." },
        { status: 400 },
      );
    }

    if (file && file.size > 0) {
      await file.arrayBuffer();
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or reach out via WhatsApp." },
      { status: 500 },
    );
  }
}
