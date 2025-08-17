import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET to /api/v1/status", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);

      const responseBody = (await response.json()) as {
        updated_at: string;
        dependencies: {
          database: {
            version: string;
            max_connections: number;
            opened_connections: number;
          };
        };
      };

      const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
      expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

      expect(responseBody.dependencies.database.version).toEqual("7.0.23");
      expect(
        responseBody.dependencies.database.max_connections,
      ).toBeGreaterThanOrEqual(838700);
      expect(
        responseBody.dependencies.database.opened_connections,
      ).toBeLessThanOrEqual(10);
    });
  });
});
