export function showOkMessage(email){
    document.querySelector("div#root").style.display = "none"
                
    document.querySelector("div#emailMessage").style.display = "initial"

    const containerMessage = document.querySelector("main")

    containerMessage.innerHTML += `
    <img src="./images/verified_icon.png">
    <h1 align="center">Tudo certo!</h1>
    <p align="center">Confirme o E-mail através do link de verificação <br> que foi enviado para: <strong>${email}</strong></p>`
}

export function showErrorMessage(email){
    document.querySelector("div#root").style.display = "none"
                
    document.querySelector("div#emailMessage").style.display = "initial"

    const containerMessage = document.querySelector("main")

    containerMessage.innerHTML += `
    <img src="./images/important_icon.png">
    <h1 align="center">Atenção!</h1>
    <p align="center">O E-mail: <strong>${email}</strong>, já foi registrado, confirme este E-mail através do link de verificação que lhe foi enviado</p>`
}