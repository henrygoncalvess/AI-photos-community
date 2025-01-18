import { showOkMessage, showErrorMessage } from '../components/Sign-upMessage';
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
            const data = await sendVerificationEmail({
                name: name.value,
                email: email.value,
                password: password.value
            })

            console.log(data);

            if (data.registered){
                showErrorMessage(email.value)
                
            }else{
                localStorage.setItem("email", email.value)
                showOkMessage(email.value)
            }

        }else{
            alert("Preencha todos os campos corretamente antes de confirmar")
        }
    })
}