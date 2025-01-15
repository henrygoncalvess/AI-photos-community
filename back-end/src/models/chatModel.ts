import { usersCollection } from "../utils/connectCollections"

export class ChatModel {
    static async all(){
        const users = await usersCollection()

        const allUsers = await users.find().toArray()

        return allUsers
    }
}