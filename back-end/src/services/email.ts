import nodemailer from 'nodemailer';
import { User } from '../types/authInterface';
import jwt from 'jsonwebtoken';
import { createHTMLMessage } from '../utils/createHTMLMessage';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD_EMAIL
    }
  });
  
export async function sendVerificationEmail({ name, email }: User): Promise<{ message: string; ok: boolean; }>{

    const token = await jwt.sign({ name }, String(process.env.JWT_SECRET), { expiresIn: "1h" })

    const verificationLink = `http://localhost:3001/login?token=${token}`

    const message = createHTMLMessage(name, verificationLink)


    return new Promise((resolve, reject) => {
        transporter.sendMail({
                from: `"Dev em formação" <${process.env.EMAIL}>`,
                subject: `${name}, confirme seu e-mail.`,
                to: email,
                html: message
        },
        (error, info) => {
            if (error) {
                reject({
                    message: error,
                    ok: false
                });
            } else {
                resolve({
                    message: `Email successfully sent to: ${info.accepted}`,
                    ok: true
                });
            }
        }
        );
    });
}