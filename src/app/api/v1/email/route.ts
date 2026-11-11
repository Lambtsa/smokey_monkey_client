import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

import { details } from "@/constants/details";
import { reservationRequestSchema } from "@/schemas/reservation.schema";
import { dateToString } from "@/utils/date";
import { logger } from "@/utils/logger";

const RECIPIENTS = process.env.NODE_ENV === "production"
  ? [details.email, "lambtsa@hotmail.com", "thusmokeymonkey@hotmail.com"]
  : ["lambtsa@hotmail.com"];

/* The visitor's text goes into the email's HTML */
const escapeHtml = (value: string): string => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll("\"", "&quot;")
  .replaceAll("'", "&#39;");

/* Sends a table booking request to the restaurant */
export const POST = async (request: Request): Promise<NextResponse> => {
  const body: unknown = await request.json().catch(() => null);
  const parsed = reservationRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({}, {
      status: 400,
    });
  }

  const { count } = parsed.data;
  const name = escapeHtml(parsed.data.name);
  const email = escapeHtml(parsed.data.email);
  /* The date is the visitor's local time, written out as it was typed */
  const date = dateToString(new Date(parsed.data.date));

  const transporter = createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    auth: {
      user: process.env.ZOHO_ID,
      pass: process.env.ZOHO_PASSWORD,
    },
    secure: true,
  });

  const message = `
    ${name} (${email}) est intéressé(e) pour réserver une table le ${date} pour ${count} ${count > 1 ? "personnes" : "personne"}.
  `;

  try {
    await transporter.sendMail({
      from: process.env.ZOHO_ID,
      to: RECIPIENTS,
      subject: `Reservation From ${name}`,
      text: message,
      html: `<div>${message}</div>`,
    });
    return NextResponse.json({});
  } catch (err) {
    logger.error("Reservation email could not be sent", {
      err: err instanceof Error ? err : new Error(String(err)),
      path: "/api/v1/email",
    });
    return NextResponse.json({}, {
      status: 400,
    });
  }
};
