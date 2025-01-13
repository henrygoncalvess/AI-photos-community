import { HomeModel } from "../models/homeModel"

export class HomeController {
    static async index(request, reply){
        try{
            const { name, password } = request.body

            const validUser = await HomeModel.find(name, password)
            
            reply.status(201).send(validUser)
        }catch (error){
            reply.status(500)
            throw error
        }
    }
}