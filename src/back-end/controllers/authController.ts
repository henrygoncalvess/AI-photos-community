import { AuthModel } from "../models/authModel";

export class AuthController {
  static async sigup(request, reply) {
    try {
      const sendMail = await AuthModel.signup(request.body);

      if (sendMail.registered) {
        reply.status(400).send(sendMail);
      }

      reply.status(201).send(sendMail);
    } catch (error) {
      reply.status(500);
      throw error;
    }
  }

  static async login(request, reply) {
    try {
      const verifyUser = await AuthModel.login(request.data);

      reply.status(200).send(verifyUser);
    } catch (error) {
      reply.status(500);
      throw error;
    }
  }
}
