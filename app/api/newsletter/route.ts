import { NextResponse } from "next/server";

// Adds a newsletter signup to a Resend "audience" (contact list).
// Configure with env vars (see .env.example):
//   RESEND_API_KEY      - your Resend API key
//   RESEND_AUDIENCE_ID  - the audience/list id to add subscribers to
// Without these the route still returns ok so the form works during setup,
// but the address is only logged, not stored.

export async function POST(req: Request) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;

  if (!key || !audience) {
    console.warn("[newsletter] RESEND_API_KEY / RESEND_AUDIENCE_ID not set — subscriber logged, not stored:", email);
    return NextResponse.json({ ok: true, stored: false });
  }

  const res = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  // Resend returns 409 if the contact already exists — treat that as success.
  if (!res.ok && res.status !== 409) {
    const detail = await res.text().catch(() => "");
    console.error("[newsletter] Resend error", res.status, detail);
    return NextResponse.json({ ok: false, error: "store_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
