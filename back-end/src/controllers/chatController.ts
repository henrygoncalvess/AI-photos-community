import { ChatModel } from "../models/chatModel"

export class ChatController {
    static async index(request, reply){
        try{
            const userId = await ChatModel.getId(request.body)

            reply.status(200).send(userId)

        }catch (error){
            reply.status(500)
            throw error
        }
    }
}