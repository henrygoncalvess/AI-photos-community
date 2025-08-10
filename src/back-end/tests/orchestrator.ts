import retry from "async-retry";
import database from "../infra/database";
import { env } from "../env";

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
  await database.db.collection(env.COLLECTION).deleteMany({});
}

export default {
  waitForAllServices,
  clearDatabase,
};
