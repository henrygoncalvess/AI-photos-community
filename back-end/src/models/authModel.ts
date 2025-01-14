import db from '../config/db';
import { User } from '../types/authInterface';
import { sendVerificationEmail } from '../services/email';
import { encrypt } from '../utils/encryptAuthUser';

export class AuthModel {
    static async signup({ name, password, email }: User){
        const userExists = db.find(value => {
            return value.email === email
        })

        if(userExists){
            return {
                message: "already registered user",
                ok: false
            }
        }

        const encryptedUser = await encrypt({ name, password, email })

        db.push(encryptedUser)

        console.log(db);

        return sendVerificationEmail(encryptedUser)
    }

    static async login(data: string){
        return {
            message: `user registered successfully`,
            user: data,
            ok: true
        }
    }
}