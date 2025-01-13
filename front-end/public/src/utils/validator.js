import { z } from 'zod';

const errorMessages = {
    invalidName: "O nome deve conter no mínimo 2 caracteres",
    invalidEmail: "E-mail inválido",
    invalidPassword: "A senha deve conter no mínimo 8 caracteres",
    passwordMismatch: "A senha deve ser igual a anterior",
};

export class SetValidator {
    static name(element){
        const field = element.parentElement
        const errorElement = element.nextElementSibling

        element.addEventListener("input", () => {
            
            const nameSchema = z.string().min(2)

            try{
                nameSchema.parse(element.value)
                field.className = "form"

                return element.value
                
            }catch(error){
                field.className = "form error"
                errorElement.innerText = errorMessages.invalidName
            }
        })


    }

    static email(email){
        const emailSchema = z.string().email()

        try{
            return emailSchema.parse(email)
        }catch(error){
            return { message: errorMessages.invalidEmail }
        }
    }

    static password(password){
        const passwordSchema = z.string().min(8)

        try{
            return passwordSchema.parse(password)
        }catch(error){
            return { message: errorMessages.invalidPassword }
        }
    }

    static passConfirmation(currentPass, lastPass){
        const passwordSchema = z.string().min(8)

        try{
            if (currentPass !== lastPass) {
                return { message: errorMessages.passwordMismatch };
            }

            return passwordSchema.parse(currentPass)
        }catch(error){
            return { message: errorMessages.invalidPassword };
        }
    }

    static validUser(userData){
        const userSchema = z.object({
            name: z.string().min(2),
            email: z.string().email(),
            password: z.string().min(8)
        })

        try{
            return userSchema.parse(userData)
        }catch (error){
            return false
        }
    }
}