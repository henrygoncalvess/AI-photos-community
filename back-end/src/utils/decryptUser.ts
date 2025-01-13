import bcrypt from 'bcryptjs';

export async function compare(encryptedPassword: string, currentPassword: string){
    const decryptedPassword = await bcrypt.compare(currentPassword, encryptedPassword);

    return decryptedPassword
}