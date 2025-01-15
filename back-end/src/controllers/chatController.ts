import { ChatModel } from "../models/chatModel"

export class ChatController {
    static async index(request, reply){
        try{
            const { email, password } = request.body

            const validUser = await ChatModel.find(email, password)

            if (validUser.ok) reply.status(200).send(validUser)

            else if (validUser.password == false) reply.status(403).send(validUser)
                    
            else reply.status(400).send(validUser)

        }catch (error){
            reply.status(500)
            throw error
        }
    }
}