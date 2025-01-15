import bcrypt from 'bcryptjs';
import { User } from '../types/authInterface';

export async function encrypt({ name, password, email }: User){
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        name,
        password: hashedPassword,
        email
    }

    return newUser
}