import { createButton } from "./components/Button";
import { createInput } from "./components/InputForm";
import { SetValidator } from "./utils/validator";

export function createFormIndex(){
    const root = document.querySelector("div#root")

    const inputName = createInput("name", "text", "Nome", "Digite o nome do usuário...")

    const inputEmail = createInput("email", "email", "E-mail", "Digite seu e-mail...")

    const inputPassword = createInput("password", "text", "Senha", "Digite sua senha...")

    const inputPasswordConfirmation = createInput("passwordConfirmation", "text", "Confirme sua senha", "Digite novamente sua senha...")

    const button = createButton("submit", "confirmar")
    
    SetValidator.name(inputName[1])
    
    root.appendChild(inputName[0])
    root.appendChild(inputEmail[0])
    root.appendChild(inputPassword[0])
    root.appendChild(inputPasswordConfirmation[0])
    root.appendChild(button)
}