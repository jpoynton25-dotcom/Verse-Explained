import { NextResponse } from "next/server";
import { classifyPageTopic } from "@/lib/subscriberTopic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "";
};

const jsonNoIndex = (body: unknown, init?: ResponseInit) => {
  const response = NextResponse.json(body, init);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return jsonNoIndex(
      { message: "Signup integration is not configured yet." },
      { status: 500 }
    );
  }

  let body: { email?: unknown; page?: unknown };

  try {
    body = (await request.json()) as { email?: unknown; page?: unknown };
  } catch {
    return jsonNoIndex({ message: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const page = typeof body.page === "string" && body.page.length ? body.page : "unknown";

  if (!EMAIL_REGEX.test(email)) {
    return jsonNoIndex({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const payload = {
    email,
    page,
    topicBucket: classifyPageTopic(page),
    submittedAt: new Date().toISOString(),
    source: "verseexplained-site",
    userAgent: request.headers.get("user-agent") ?? "",
    ip: getClientIp(request)
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      cache: "no-store"
    });

    if (!response.ok) {
      return jsonNoIndex(
        { message: "Could not save your email right now. Please try again." },
        { status: 502 }
      );
    }
  } catch {
    return jsonNoIndex(
      { message: "Could not save your email right now. Please try again." },
      { status: 502 }
    );
  }

  return jsonNoIndex({ ok: true });
}
