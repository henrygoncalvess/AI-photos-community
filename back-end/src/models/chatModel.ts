import { compare } from 'bcryptjs';
import db from '../config/db';

export class ChatModel {
    static async find(email, password){
        const userPassword = db.find(value => {
            return value.email === email
        })

        if (userPassword){
            const isValidCredentials = await compare(password, userPassword.password)
    
            console.log(isValidCredentials);
    
            if (isValidCredentials){
                return { message: "valid password, user logged", ok: true}
            }
            
            return { message: "invalid password", password: false}
        }else{
            return { message: "unregistered user", user: false }
        }
    }
}