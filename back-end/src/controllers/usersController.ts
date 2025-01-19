import { UsersModel } from "../models/usersModel"

export class UsersController {
    static async verify(request, reply){
        try{
            const validUser = await UsersModel.check(request.body)

            if (validUser.ok) reply.status(200).send(validUser)

            else if (validUser.password == false) reply.status(403).send(validUser)
                    
            else reply.status(400).send(validUser)

        }catch (error){
            reply.status(500)
            throw error
        }
    }

    static async check(request, reply){
        try{
            const response = await UsersModel.checkImage(request.body)

            if (response.ok) reply.status(200).send(response)

            else if (response.image == false) reply.status(401).send(response)
                    
            else reply.status(400).send(response)

        }catch (error){
            reply.status(500)
            throw error
        }
    }

    static async url(request, reply){
        try{
            const response = await UsersModel.findUrl(request.body)

            if (response.ok){
                reply.status(200).send(response)
            }
            
            reply.status(400).send(response)

        }catch (error){
            reply.status(500)
            throw error
        }
    }
}