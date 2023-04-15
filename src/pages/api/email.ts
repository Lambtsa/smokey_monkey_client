import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log({
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASSWORD,
  });
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.GMAIL_ID,
    to: "lambtsa.tom@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: "<div>{req.body.message}</div>",
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  console.log({ req: req.body });
  res.status(200).json({ name: "John Doe" });
}
