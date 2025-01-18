import { ObjectId } from "mongodb";
import { generate } from "../services/generateImage";
import { usersCollection } from "../utils/connectCollections"

export class ChatModel {
    static async requestImage({ prompt, id }: { prompt: string, id: string }){
        const urlImage = await generate(prompt, id)

        if (urlImage){
            const collection = await usersCollection()

            const mongoObjectId = ObjectId.createFromHexString(id)

            const updatedUserInfo = {
                urlImage,
                prompt
            }

            collection.updateOne({ _id: new ObjectId(mongoObjectId)}, { $set: updatedUserInfo })

            return { message: "generated", urlImage, ok: true }
        }else{
            return { message: "failed to generate image, insufficient credits", ok: false }
        }
    }
}