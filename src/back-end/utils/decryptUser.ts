import bcrypt from "bcryptjs";

export async function compare(
  currentPassword: string,
  encryptedPassword: string,
) {
  const isValidPassword = await bcrypt.compare(
    currentPassword,
    encryptedPassword,
  );

  return isValidPassword;
}
