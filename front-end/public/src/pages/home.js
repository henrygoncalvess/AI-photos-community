import { createButton } from "../components/Button";

export function createHomeContent(){
    const root = document.querySelector("div#homeRoot")

    const div = document.createElement("div")

    div.setAttribute("id", "conteinerButtons")

    const loginButton = createButton("submit", "entrar")
    const registerButton = createButton("submit", "Registrar")

    div.appendChild(registerButton)   
    div.appendChild(loginButton)
    root.appendChild(div)   
}