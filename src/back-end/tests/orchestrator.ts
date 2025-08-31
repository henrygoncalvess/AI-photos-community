import retry from "async-retry";
import database from "infra/database";
import userCollectionSchema from "infra/schemas/userSchema";
import user from "models/user";
import sessionCollectionSchema from "infra/schemas/sessionSchema";
import session from "models/session";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (response.status !== 200) {
        throw Error();
      }
    }
  }
}

async function clearDatabase() {
  await database.db.collection("users").deleteMany({});
}

async function createUserCollection() {
  await database.db.collection("users").drop();

  await database.db.createCollection("users", userCollectionSchema);
  await database.db
    .collection("users")
    .createIndex({ username: 1 }, { unique: true });
  await database.db
    .collection("users")
    .createIndex({ email: 1 }, { unique: true });
}

async function createSessionCollection() {
  await database.db.collection("sessions").drop();

  await database.db.createCollection("sessions", sessionCollectionSchema);
  await database.db
    .collection("sessions")
    .createIndex({ token: 1 }, { unique: true });
}

async function createUser(userObject) {
  const { faker } = await import("@faker-js/faker");

  return await user.create({
    username:
      userObject?.username || faker.internet.username().replace(/[_.-]/g, ""),
    email: userObject?.email || faker.internet.email(),
    password: userObject?.password || "validpassword",
  });
}

async function createSession(userId) {
  return await session.create(userId);
}

export default {
  waitForAllServices,
  clearDatabase,
  createUserCollection,
  createSessionCollection,
  createUser,
  createSession,
};
