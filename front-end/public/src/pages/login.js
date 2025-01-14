import { createInput } from '../components/InputForm';
import { SetValidator } from '../utils/validator';
import { createButton } from '../components/Button';
import { confirmAuthorization } from '../services/confirmAuthorization';
import { confirmLogin } from '../services/confirmLogin';

window.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("div#root")

    const inputPassword = createInput("password", "text", "Senha", "Digite sua senha...")

    const button = createButton("submit", "entrar")

    SetValidator.password(inputPassword[1])

    root.appendChild(inputPassword[0])
    root.appendChild(button)
})

const params = new URLSearchParams(window.location.search);
const token = params.get('token');

if (token){
    const data = await confirmAuthorization(token)

    if (!data.ok){
        // function that's show invalid or expired token error
    }else{
        document.querySelector("h1").innerHTML += ` ${data.user}`

        const fields = document.querySelectorAll("fieldset.form")
        const email = localStorage.getItem("email")
        const password = document.querySelector("input#password")

        document.querySelector("button").addEventListener("click", async () => {
            const validUser = SetValidator.validateLogin()
    
            const allFilled = [...fields].every(item => {
                return item.className === "form"
            })

            if(allFilled && validUser){
                const data = await confirmLogin(email, password.value)

                if (data.ok){
                    alert("logado")
                }
    
            }else{
                alert("Preencha todos os campos corretamente antes de confirmar")
            }
        })
    }
}else{
    alert("página com mensagem que precisa se registrar")
}