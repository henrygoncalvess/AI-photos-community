import { compare } from 'bcryptjs';
import { checkIfUserDocumentExists } from '../utils/checkDocument';
import { usersCollection } from '../utils/connectCollections';

export class UsersModel {
    static async check({ email, password }: { email: string, password: string }){
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

    static async checkImage({ email }: { email: string }){
        const collection = await usersCollection()

        const userExists = await collection.find({ email }).next()

        if (userExists){
            if (userExists.urlImage.length != 0){
                return { message: "user generated image", ok: true }
            }

            return { message: "user did not generate image", image: false }
        }

        return { message: "user not found", user: false}
    }

    static async findUrl({ email }: { email: string }){
        const collection = await usersCollection()

        const userExists = await collection.find({ email }).next()

        if (userExists){
            return { urlImage: userExists.urlImage, prompt: userExists.prompt, ok: true }
        }

        return { message: "user not found", user: false}
    }
}