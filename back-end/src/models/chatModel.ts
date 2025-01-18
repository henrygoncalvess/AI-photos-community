import { generate } from "../services/generateImage";
import { usersCollection } from "../utils/connectCollections"

export class ChatModel {
    static async requestImage({ prompt, id }: { prompt: string, id: string }){
        const urlImage = await generate(prompt, id)

        return { message: "generated", urlImage, ok: true }
    }
}