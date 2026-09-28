import { NextResponse } from "next/server";

// Receives contact-form submissions and emails them to the shop via Resend.
// Configure with env vars (see .env.example):
//   RESEND_API_KEY     - your Resend API key
//   CONTACT_TO_EMAIL   - where messages are delivered (the shop inbox)
//   CONTACT_FROM_EMAIL - optional "from" (defaults to Resend's test sender)
// Without a key the route still returns ok so the form works during setup,
// but the message is only logged, not delivered.

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!key || !to) {
    console.warn("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — message logged, not delivered:", {
      name,
      email,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Shipstore <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nieuw contactbericht — ${name}`,
      html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt; schreef:</p>
             <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, detail);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
