import { compare } from 'bcryptjs';
import { checkIfUserDocumentExists } from '../utils/checkDocument';
import { usersCollection } from '../utils/connectCollections';

export class ChatModel {
    static async find(email, password){
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