import orchestrator from "tests/orchestrator";
import { ObjectId } from "mongodb";
import { User, ValidationError } from "interfaces/user";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.createUserCollection();
});

describe("GET to /api/v1/users/[username]", () => {
  describe("Anonymous user", () => {
    test("With exact case match", async () => {
      const userCreated = await orchestrator.createUser({
        username: "MesmoCase",
      });

      const response2 = await fetch(
        `http://localhost:3000/api/v1/users/${userCreated.username}`,
      );

      expect(response2.status).toBe(200);

      const response2Body = (await response2.json()) as User;

      expect(response2Body).toEqual({
        _id: response2Body._id,
        username: "MesmoCase",
        email: userCreated.email,
        password: response2Body.password,
        created_at: response2Body.created_at,
        updated_at: response2Body.updated_at,
      });

      expect(ObjectId.isValid(response2Body._id)).toBeTruthy();
      expect(Date.parse(response2Body.created_at)).not.toBeNaN();
      expect(Date.parse(response2Body.updated_at)).not.toBeNaN();
    });

    test("With case mismatch", async () => {
      const userCreated = await orchestrator.createUser({
        username: "CaseDiferente",
      });

      const response2 = await fetch(
        `http://localhost:3000/api/v1/users/${userCreated.username}`,
      );

      expect(response2.status).toBe(200);

      const response2Body = (await response2.json()) as User;

      expect(response2Body).toEqual({
        _id: response2Body._id,
        username: "CaseDiferente",
        email: userCreated.email,
        password: response2Body.password,
        created_at: response2Body.created_at,
        updated_at: response2Body.updated_at,
      });

      expect(ObjectId.isValid(response2Body._id)).toBeTruthy();
      expect(Date.parse(response2Body.created_at)).not.toBeNaN();
      expect(Date.parse(response2Body.updated_at)).not.toBeNaN();
    });

    test("With with nonexistent username", async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/UsuarioInexistente",
      );

      expect(response.status).toBe(404);

      const responseBody = (await response.json()) as ValidationError;

      expect(responseBody).toEqual({
        name: "NotFoundError",
        message: "O apelido informado não foi encontrado no sistema.",
        action: "Verifique se o apelido está digitado corretamente.",
        status_code: 404,
      });
    });
  });
});
