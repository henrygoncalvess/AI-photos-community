import { usersCollection } from "./connectCollections";

export async function checkIfUserDocumentExists(findQuery: object) {
  const users = await usersCollection();

  const userExists = await users.find(findQuery).next();

  if (userExists !== null) return userExists;

  return false;
}
