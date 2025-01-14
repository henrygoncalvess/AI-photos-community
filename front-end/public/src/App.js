import { createButton } from "./components/Button";
import { createInput } from "./components/InputForm";
import { SetValidator } from "./utils/validator";

export function createFormSignUp(){
    const root = document.querySelector("div#signRoot")

    const inputName = createInput("name", "text", "Nome", "Digite o nome do usuário...")

    const inputEmail = createInput("email", "email", "E-mail", "Digite seu e-mail...")

    const inputPassword = createInput("password", "text", "Senha", "Digite sua senha...")

    const inputPasswordConfirmation = createInput("passwordConfirmation", "text", "Confirme sua senha", "Digite novamente sua senha...")

    const button = createButton("submit", "confirmar")
    
    SetValidator.name(inputName[1])
    SetValidator.email(inputEmail[1])
    SetValidator.password(inputPassword[1])
    SetValidator.passConfirmation(inputPasswordConfirmation[1], inputPassword[1])
    
    root.appendChild(inputName[0])
    root.appendChild(inputEmail[0])
    root.appendChild(inputPassword[0])
    root.appendChild(inputPasswordConfirmation[0])
    root.appendChild(button)
}