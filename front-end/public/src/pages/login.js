import { createError } from "../components/LoginError";
import { displayError } from "../utils/messageError";
import { Validate } from "../utils/validator";

const params = new URLSearchParams(window.location.search);
const token = params.get('token');

if (!token){
    document.querySelector("div#loginForm").style.display = "none"
    createError()

}else{
    const authorizedUser = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })

    const response = await authorizedUser.json()

    console.log(response);

    document.querySelector("h1").innerText += ` ${response.user}`

    const form = document.querySelector("form");
    const name = document.querySelector("input#name");
    const password = document.querySelector("input#password");
    const field = document.getElementsByClassName("form")
    const messageError = document.querySelectorAll("span")
    const submitMessage = document.querySelector("span.submitMessage")

    name.addEventListener("input", () => {
        const isValidName = Validate.name(name.value)

        displayError(isValidName.message, field[0], messageError[0])
    })

    password.addEventListener("input", () => {
        const isValidPassword = Validate.password(password.value)

        displayError(isValidPassword.message, field[1], messageError[1])
    })

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const validName = Validate.name(name.value)
        const validPassword = Validate.password(password.value)

        if(!validName.message && !validPassword.message){
            const validCredentials = await fetch("http://localhost:3000/home", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    password: password.value
                })
            })

            console.log(validCredentials);

            // window.location.href = "home.html"

        }else{
            submitMessage.className = "submitMessage"

            submitMessage.innerHTML = "Preencha todos os campos corretamente <br> antes de confirmar"

            setTimeout(() => {
                submitMessage.className = ""
            }, 4000)
        }
    })
}