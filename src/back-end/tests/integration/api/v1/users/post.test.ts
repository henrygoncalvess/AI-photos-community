import { ObjectId } from "mongodb";
import orchestrator from "../../../../orchestrator";
import { User, ValidationError } from "../../../../../interfaces/user";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.createUserCollection();
});

describe("POST to /api/v1/users", () => {
  describe("Anonymous user", () => {
    test("With unique and valid data", async () => {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "teste de username",
          email: "teste@teste.com",
          password: "abc123",
        }),
      });

      expect(response.status).toBe(201);

      const responseBody = (await response.json()) as User;

      expect(responseBody).toEqual({
        _id: responseBody._id,
        username: "teste de username",
        email: "teste@teste.com",
        password: "abc123",
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(ObjectId.isValid(responseBody._id)).toBeTruthy();
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();
    });

    test("With duplicated 'email'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "emailduplicado1",
          email: "duplicado@teste.com",
          password: "abc123",
        }),
      });

      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "emailduplicado2",
          email: "Duplicado@teste.com",
          password: "abc123",
        }),
      });

      expect(response2.status).toBe(400);

      const response2Body = (await response2.json()) as ValidationError;

      expect(response2Body).toEqual({
        name: "ValidationError",
        message: "O email informado já está sendo utilizado.",
        action: "Utilize outro email para realizar o cadastro.",
        status_code: 400,
      });
    });

    test("With duplicated 'username'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "usernameduplicado",
          email: "usernameduplicado1@teste.com",
          password: "abc123",
        }),
      });

      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "UsernameDuplicado",
          email: "usernameduplicado2@teste.com",
          password: "abc123",
        }),
      });

      expect(response2.status).toBe(400);

      const response2Body = (await response2.json()) as ValidationError;

      expect(response2Body).toEqual({
        name: "ValidationError",
        message: "O apelido informado já está sendo utilizado.",
        action: "Utilize outro apelido para realizar o cadastro.",
        status_code: 400,
      });
    });
  });
});
