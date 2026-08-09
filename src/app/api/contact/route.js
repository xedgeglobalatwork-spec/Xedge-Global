import { NextResponse } from "next/server";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, message } = body ?? {};

  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you — a senior partner will be in touch shortly.",
  });
}
