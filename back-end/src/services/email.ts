import nodemailer from 'nodemailer';
import { User } from '../types/authInterface';
import jwt from 'jsonwebtoken';
import fs from 'fs';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD_EMAIL
    }
  });
  
export async function sendVerificationEmail({ name, email }: User): Promise<{ message: string; ok: boolean; }>{

    const token = await jwt.sign({ name }, String(process.env.JWT_SECRET), { expiresIn: "1d" })

    const verificationLink = `http://localhost:3000/login?token=${token}`

    const htmlText = fs.readFileSync('src/services/htmlEmail.html', "utf8")

    const cssName = "color:#016ce6;margin:auto;width:max-content;padding:5px 10px;border-radius:5px;"

    const cssButton = `
    color: white;text-shadow: 0px 1.2px 1px #242424;background-color: #00c645;padding: 7px 13px;
    font-size: large;font-weight: bolder;text-transform: uppercase;text-decoration: none;border-radius: 50px;
    border-bottom: 5px solid #006423;`

    const html = [
        `<h3 align="center" style="${cssName}">${name}</h3>
        <section style="border: 1px solid black;padding: 3px 0px;margin:auto;width: 450px;border-radius:5px;">`,
        htmlText,
        `<a href="${verificationLink}" style="${cssButton}">Confirmar seu e-mail</a></p></section>`
    ]

    return new Promise((resolve, reject) => {
        transporter.sendMail({
                from: `"Dev em formação" <${process.env.EMAIL}>`,
                subject: `${name}, confirme seu e-mail.`,
                to: email,
                html: html.join('')
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