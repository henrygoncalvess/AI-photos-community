import jwt from "jsonwebtoken";
import { env } from "env";

export function loginToken(request, reply, done) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    reply.code(400).send({
      message: "Required access token",
      ok: false,
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, env.JWT_SECRET, (error, data) => {
    if (error) {
      reply.code(498).send({
        message: "Invalid or expired token",
        ok: false,
      });
    }

    request.data = data.name;
    done();
  });
}
