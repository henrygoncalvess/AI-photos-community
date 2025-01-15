import { client } from "../config/db";

export async function usersCollection(){
    const database = await client.db("ai-photos-community")

    const users = await database.collection("users")

    return users
}