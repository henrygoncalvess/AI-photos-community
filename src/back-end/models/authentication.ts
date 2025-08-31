import user from "models/user";
import password from "models/password";
import { NotFoundError, UnauthorizedError } from "infra/error";

async function getAuthenticatedUser(
  providedEmail: string,
  providedPassword: string,
) {
  try {
    const storedUser = await findOneByEmail(providedEmail);
    await validatePassword(providedPassword, storedUser.password);

    return storedUser;
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      throw new UnauthorizedError({
        message: "Dados de autenticação não conferem.",
        action: "Verifique se os dados enviados estão corretos.",
      });
    }

    throw error;
  }

  async function findOneByEmail(providedEmail: string) {
    try {
      return await user.findOneByEmail(providedEmail);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new UnauthorizedError({
          message: "Email não confere.",
          action: "Verifique se este dado está correto.",
        });
      }

      throw error;
    }
  }

  async function validatePassword(
    providedPassword: string,
    storedPassword: string,
  ) {
    const correctPassowordMatch = await password.compare(
      providedPassword,
      storedPassword,
    );

    if (!correctPassowordMatch) {
      throw new UnauthorizedError({
        message: "Senha não confere.",
        action: "Verifique se este dado está correto.",
      });
    }
  }
}

const authentication = {
  getAuthenticatedUser,
};

export default authentication;
