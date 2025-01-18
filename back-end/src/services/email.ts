import nodemailer from 'nodemailer';
import { User } from '../types/authInterface';
import jwt from 'jsonwebtoken';
import { createHTMLMessage } from '../utils/createHTMLMessage';
import { usersCollection } from '../utils/connectCollections';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD_EMAIL
    }
  });
  
export async function sendVerificationEmail({ name, email }: { name: string, email: string }, registered: boolean){

    const token = await jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: "2min" })

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
                if (registered){
                    resolve({
                        message: `Email successfully sent to: ${info.accepted}`,
                        registered: true
                    });
                }

                resolve({
                    message: `Email successfully sent to: ${info.accepted}`,
                    sent: true
                });
            }
        }
        );
    });
}