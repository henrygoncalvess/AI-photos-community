import { ChatModel } from "../models/chatModel"

export class ChatController {
    static async index(request, reply){
        try{
            const { email, password } = request.body

            const validUser = await ChatModel.find(email, password)
            
            reply.status(201).send(validUser)
        }catch (error){
            reply.status(500)
            throw error
        }
    }
}