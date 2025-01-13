// import { sendVerificationEmail } from "../services/sendVerificationEmail";

export function confirmUser(){
    const button = document.querySelector("button")

    button.addEventListener("click", async event => {
        event.preventDefault();

        alert("clicado")
        // const allFilled = [...field].every(item => {
        //     return item.className === "form"
        // })

        // const validUserData = Validate.validUser({
        //     name: name.value,
        //     email: email.value,
        //     password: passConfirmation.value
        // })


        // if(allFilled && validUserData){
        //     alert("a")

        //     const data = await sendVerificationEmail(validUserData)

        //     localStorage.setItem("utils", JSON.stringify({
        //         email: email.value,
        //         response: data
        //     }))

        //     window.location.href = "email.html"

        // }else{
        //     alert("Preencha todos os campos corretamente antes de confirmar")
        // }
    })
}