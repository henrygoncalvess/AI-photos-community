import { usersCollection } from "../utils/connectCollections"

export class ChatModel {
    static async getId(name){
        const collection = await usersCollection()

        const user = await collection.find(name).next()

        return user?._id
    }
}