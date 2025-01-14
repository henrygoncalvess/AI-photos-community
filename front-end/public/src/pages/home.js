import { createButton } from "../components/Button";

const root = document.querySelector("div#homeRoot")

const div = document.createElement("div")

div.setAttribute("id", "conteinerButtons")

const loginButton = createButton("submit", "entrar")

loginButton.setAttribute("id", "loginButton")

const registerButton = createButton("submit", "Registrar")

registerButton.setAttribute("id", "registerButton")

div.appendChild(registerButton)
div.appendChild(loginButton)
root.appendChild(div)

document.querySelector("button#loginButton").addEventListener("click", () => {
    window.location.href = "login.html"
})

document.querySelector("button#registerButton").addEventListener("click", () => {
    window.location.href = "sign-up.html"
})