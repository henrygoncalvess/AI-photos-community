import { ObjectId } from "mongodb";
import orchestrator from "tests/orchestrator";
import session from "models/session";
import setCookieParser from "set-cookie-parser";
import { SessionObject } from "interfaces/user";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.createUserCollection();
  await orchestrator.createSessionCollection();
});

describe("DELETE to /api/v1/sessions", () => {
  describe("Default user", () => {
    test("With nonexistent session", async () => {
      const nonexistentToken =
        "f3438abdca741ae010a4e098e5af4858b31ef3f03b225360a56cd6cb65771e86b82e32b5dabe1587720f667aef4ee74d";

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "DELETE",
        headers: {
          Cookie: `session_id=${nonexistentToken}`,
        },
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuário não possui sessão ativa.",
        action: "Verifique se este usuário está logado e tente novamente.",
        status_code: 401,
      });
    });

    test("With expired session", async () => {
      jest.useFakeTimers({
        now: new Date(Date.now() - session.EXPIRATION_IN_MILLISECONDS),
        doNotFake: ["nextTick", "setImmediate", "setTimeout"],
      });

      const createdUser = await orchestrator.createUser({});

      const sessionObject = await orchestrator.createSession(createdUser._id);

      jest.useRealTimers();

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "DELETE",
        headers: {
          Cookie: `session_id=${sessionObject.token}`,
        },
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuário não possui sessão ativa.",
        action: "Verifique se este usuário está logado e tente novamente.",
        status_code: 401,
      });
    });

    test("With valid session", async () => {
      const createdUser = await orchestrator.createUser({});

      const sessionObject = await orchestrator.createSession(createdUser._id);

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "DELETE",
        headers: {
          Cookie: `session_id=${sessionObject.token}`,
        },
      });

      expect(response.status).toBe(200);

      const responseBody = (await response.json()) as SessionObject;

      expect(responseBody).toEqual({
        _id: sessionObject._id.toString(),
        token: sessionObject.token,
        user_id: sessionObject.user_id.toString(),
        expires_at: responseBody.expires_at,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(ObjectId.isValid(responseBody._id)).toBeTruthy();
      expect(Date.parse(responseBody.expires_at)).not.toBeNaN();
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      expect(new Date(responseBody.expires_at) < sessionObject.expires_at).toBe(
        true,
      );
      expect(new Date(responseBody.updated_at) > sessionObject.updated_at).toBe(
        true,
      );

      // Set-Cookie assertions
      const parsedSetCookie = setCookieParser(response, { map: true });

      expect(parsedSetCookie.session_id).toEqual({
        name: "session_id",
        value: "invalid",
        maxAge: -1,
        path: "/",
        httpOnly: true,
      });

      // Double check assetions
      const doubleCheckResponse = await fetch(
        "http://localhost:3000/api/v1/user",
        {
          headers: {
            Cookie: `session_id=${sessionObject.token}`,
          },
        },
      );

      expect(doubleCheckResponse.status).toBe(401);

      const doubleCheckResponseBody = await doubleCheckResponse.json();

      expect(doubleCheckResponseBody).toEqual({
        name: "UnauthorizedError",
        message: "Usuário não possui sessão ativa.",
        action: "Verifique se este usuário está logado e tente novamente.",
        status_code: 401,
      });
    });
  });
});
