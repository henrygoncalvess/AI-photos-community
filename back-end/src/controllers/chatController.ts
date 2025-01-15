import { ChatModel } from "../models/chatModel"

export class ChatController {
    static async index(request, reply){
        try{
            const allUsers = await ChatModel.all()

            reply.status(200).send(allUsers)

        }catch (error){
            reply.status(500)
            throw error
        }
    }
}