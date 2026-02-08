import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const ipCache = new Map<string, { count: number; lastRequest: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = ipCache.get(ip);

  if (!entry) {
    ipCache.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - entry.lastRequest > RATE_LIMIT_WINDOW) {
    ipCache.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  entry.count += 1;
  entry.lastRequest = now;

  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    const {
      name,
      email,
      phone,
      enquiry_type,
      message,
      fax, // honeypot
    } = body;

    // Honeypot check (silent success)
    // Honeypot check (silent success)
if (typeof fax === "string" && fax.trim() !== "") {
  return NextResponse.json({ success: true });
}

    if (!name || !email || !phone || !enquiry_type || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "We Will Wok You <web@wewillwokyou.co.uk>",
      to: ["joe.shipton@shipped-studio.co.uk"],
      replyTo: email,
      subject: `New Enquiry: ${enquiry_type}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enquiry Type:</strong> ${enquiry_type}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
