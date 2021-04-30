import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const user = process.env.EMAIL_LOGIN;
const pass = process.env.EMAIL_PASS;
console.log(user, pass);

export default async (subject, html, attachments, recipient) => {
  const transporter = nodemailer.createTransport({
    service: 'Yandex',
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    to: recipient,
    subject,
    html,
  };

  if (attachments) {
    mailOptions.attachments = attachments;
  }

  return new Promise(((resolve, reject) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
      }

      return resolve();
    });
  }));
};
