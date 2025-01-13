import { SetValidator } from "../utils/validator";

export function confirmUser(){
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

        }else{
            alert("Preencha todos os campos corretamente antes de confirmar")
        }
    })
}