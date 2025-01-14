import { sendVerificationEmail } from '../services/sendVerificationEmail'
import { SetValidator } from "../utils/validator";

export function confirmUser(){
    const name = document.querySelector("input#name")
    const email = document.querySelector("input#email")
    const password = document.querySelector("input#passwordConfirmation")

    const button = document.querySelector("button")
    const fields = document.querySelectorAll("fieldset.form")

    button.addEventListener("click", async event => {
        event.preventDefault();

        const validUser = SetValidator.validateAll()

        const allFilled = [...fields].every(item => {
            return item.className === "form"
        })
        
        if(allFilled && validUser){
            document.querySelector("div#root").style.display = "none"
            
            document.querySelector("div#emailMessage").style.display = "initial"

            const userEmail = document.querySelector("p#userEmail")

            userEmail.innerHTML += "<strong>email.value</strong>"

            const data = await sendVerificationEmail({
                name: name.value,
                email: email.value,
                password: password.value
            })

            console.log(data);

        }else{
            alert("Preencha todos os campos corretamente antes de confirmar")
        }
    })
}