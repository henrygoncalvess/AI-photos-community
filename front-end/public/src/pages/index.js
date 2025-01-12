import { Validate } from "../utils/validator";
import { displayError } from "../utils/messageError";
import { sendVerificationEmail } from "../services/sendVerificationEmail";

const form = document.querySelector("form");
const name = document.querySelector("input#name");
const email = document.querySelector("input#email");
const password = document.querySelector("input#password");
const passConfirmation = document.querySelector("input#passwordConfirmation");

const field = document.getElementsByClassName("form")
const messageError = document.querySelectorAll("span")
const submitMessage = document.querySelector("span.submitMessage")

export function confirmUser(){
    localStorage.clear()

    name.addEventListener("input", () => {
        const isValidName = Validate.name(name.value)

        displayError(isValidName.message, field[0], messageError[0])
    })

    email.addEventListener("input", () => {
        const isValidEmail = Validate.email(email.value)

        displayError(isValidEmail.message, field[1], messageError[1])
    })

    password.addEventListener("input", () => {
        const isValidPassword = Validate.password(password.value)

        displayError(isValidPassword.message, field[2], messageError[2])
    })

    passConfirmation.addEventListener("input", () => {
        const isValidPasswordConfirm = Validate.passConfirmation(passConfirmation.value, password.value)

        displayError(isValidPasswordConfirm.message, field[3], messageError[3])
    })

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const allFilled = [...field].every(item => {
            return item.className === "form"
        })

        const validUserData = Validate.validUser({
            name: name.value,
            email: email.value,
            password: passConfirmation.value
        })


        if(allFilled && validUserData){
            const data = await sendVerificationEmail(validUserData)

            localStorage.setItem("utils", JSON.stringify({
                email: email.value,
                response: data
            }))

            window.location.href = "email.html"

        }else{
            submitMessage.innerHTML = "Preencha todos os campos corretamente <br> antes de confirmar"

            setTimeout(() => {
                submitMessage.className = ""
            }, 4000)
        }
    })
}