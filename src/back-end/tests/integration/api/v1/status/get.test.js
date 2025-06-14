test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("7.0.20");
  expect(responseBody.dependencies.database.max_connections).toEqual(
    838860 - responseBody.dependencies.database.current_connections,
  );
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
