import bcryptjs from "bcryptjs";

async function hash(password: string): Promise<string> {
  const rounds = getNumberOfRounds();
  return bcryptjs.hash(password, rounds);
}

function getNumberOfRounds(): number {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

async function compare(
  providedPassword: string,
  storedPassword: string,
): Promise<boolean> {
  return await bcryptjs.compare(providedPassword, storedPassword);
}

const password = {
  hash,
  compare,
};

export default password;
