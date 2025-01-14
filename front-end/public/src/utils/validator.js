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
        
        const nameSchema = z.string().min(2)

        element.addEventListener("input", () => {
            try{
                nameSchema.parse(element.value)
                field.className = "form"

            }catch(error){
                field.className = "form error"
                errorElement.innerText = errorMessages.invalidName
            }
        })
    }

    static email(element){
        const field = element.parentElement
        const errorElement = element.nextElementSibling

        const emailSchema = z.string().email()

        element.addEventListener("input", () => {
            try{
                emailSchema.parse(element.value)
                field.className = "form"

            }catch(error){
                field.className = "form error"
                errorElement.innerText = errorMessages.invalidEmail
            }
        })
    }

    static password(element){
        const field = element.parentElement
        const errorElement = element.nextElementSibling

        const passwordSchema = z.string().min(8)

        element.addEventListener("input", () => {
            try{
                passwordSchema.parse(element.value)
                field.className = "form"

            }catch(error){
                field.className = "form error"
                errorElement.innerText = errorMessages.invalidPassword
            }
        })
    }

    static passConfirmation(element, lastElement){
        const field = element.parentElement
        const errorElement = element.nextElementSibling

        const passwordSchema = z.string().min(8)

        element.addEventListener("input", () => {
            try{
                if (element.value != lastElement.value) {
                    field.className = "form error"
                    errorElement.innerText = errorMessages.passwordMismatch
                }else{
                    passwordSchema.parse(element.value)
                    field.className = "form"
                }
            }catch(error){
                field.className = "form error"
                errorElement.innerText = errorMessages.invalidPassword
            }
        })
    }

    static validateAll(){
        const userSchema = z.object({
            name: z.string().min(2),
            email: z.string().email(),
            password: z.string().min(8)
        })

        const name = document.querySelector("input#name").value
        const email = document.querySelector("input#email").value
        const password = document.querySelector("input#passwordConfirmation").value

        try{
            userSchema.parse({ name, email, password })
            return true
        }catch(error){
            return false
        }
    }

    static validateLogin(){
        const userSchema = z.object({
            password: z.string().min(8)
        })

        const password = document.querySelector("input#password").value

        try{
            userSchema.parse({ password })
            return true
        }catch(error){
            return false
        }
    }
}