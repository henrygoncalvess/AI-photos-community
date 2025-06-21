import { User } from "../types/authInterface";
import { sendVerificationEmail } from "../services/email";
import { encrypt } from "../utils/encryptAuthUser";
import { checkIfUserDocumentExists } from "../utils/checkDocument";
import { usersCollection } from "../utils/connectCollections";

export class AuthModel {
  static async signup({ name, password, email }: User) {
    const userExists = await checkIfUserDocumentExists({ email });

    let registered = false;

    if (userExists) {
      registered = true;

      return sendVerificationEmail(
        {
          name: userExists.name,
          email: userExists.email,
        },
        registered,
      );
    }

    const encryptedUser = await encrypt({ name, password, email });

    const users = await usersCollection();

    users.insertOne(encryptedUser);

    return sendVerificationEmail(encryptedUser, registered);
  }

  static async login(data: string) {
    const users = await usersCollection();

    const registeredUser = await users.find({ name: data }).next();

    return {
      message: `user registered successfully`,
      user: data,
      id: registeredUser?._id,
      ok: true,
    };
  }
}
