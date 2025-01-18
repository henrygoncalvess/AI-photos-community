import { client } from "../config/db";

export async function usersCollection(){
    const database = await client.db(process.env.DATABASE)

    const users = await database.collection(process.env.COLLECTION)

    return users
}