import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
import { details } from "@constants/details";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, date, count } = req.body;

  if (!email || !name || !date || !count) {
    return res.status(400).json({});
  }
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
    ${name} (${email}) est intéressé(e) pour réserver une table le ${date} pour ${count} ${
    count > 1 ? "personnes" : "personne"
  }.
  `;

  const mailData = {
    from: process.env.ZOHO_ID,
    to:
      process.env.NODE_ENV === "production"
        ? [details.email, "lambtsa@hotmail.com"]
        : "lambtsa@hotmail.com",
    subject: `Reservation From ${name}`,
    text: message,
    html: `<div>${message}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
    return res.status(200).json({});
  } catch (err) {
    console.log({ err });
    return res.status(400).json({});
  }
}
