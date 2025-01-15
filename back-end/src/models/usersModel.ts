import { compare } from 'bcryptjs';
import { checkIfUserDocumentExists } from '../utils/checkDocument';

export class UsersModel {
    static async check(email, password){
        const userExists = await checkIfUserDocumentExists({ email })

        if (userExists){
            const isValidCredentials = await compare(password, userExists.password)
    
            if (isValidCredentials){
                return { message: "valid password, user logged", ok: true}
            }
            
            return { message: "invalid password", password: false}
        }
        
        return { message: "unregistered user", user: false }
    }
}