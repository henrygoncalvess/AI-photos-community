import { createButton } from "./components/Button";
import { createInput } from "./components/InputForm";

export function createFormIndex(){
    const root = document.querySelector("div#root")

    const inputName = createInput("name", "text", "Nome", "Digite o nome do usuário...")

    const button = createButton("submit", "confirmar")
    
    
    root.appendChild(inputName)
    root.appendChild(button)
}