import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <contact@notify.ditolab.com>",
      to: ["support@ditolab.com"],
      subject: `New Contact Form Submission: ${subject}`,
      react: ContactFormEmail({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
