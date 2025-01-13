import { compare } from 'bcryptjs';
import bcrypt from 'bcryptjs';
import db from '../config/db';

export class HomeModel {
    static async find(name, password){
        const userExists = db.find(value => {
            return value.name === name
        })

        console.log(userExists?.password);
        console.log(password);


        if(userExists){
            const decryptedPassword = await bcrypt.compare(userExists.password, password);
            

            console.log(decryptedPassword);
        }else{
            return 'invalid credentials'
        }
    }
}