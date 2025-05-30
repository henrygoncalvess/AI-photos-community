import { ChatModel } from "../models/chatModel";

export class ChatController {
  static async index(request, reply) {
    try {
      const generatedImage = await ChatModel.requestImage(request.body);

      if (generatedImage.ok) reply.status(200).send(generatedImage);

      reply.status(500).send(generatedImage);
    } catch (error) {
      reply.status(500);
      throw error;
    }
  }
}
