export function CreateLoginError(){
    const root = document.querySelector("div#root")
    const loginError = document.querySelector("div#loginError")

    root.className = "hidden" 
    loginError.className = "visible" 

    const header = document.createElement('header')
    const h1 = document.createElement('h1')

    h1.innerHTML = `
    <p style="color:red;">Usuário expirado ou não registrado</p>
    Vá para a página <a href="sign-up.html">Sign-Up</a> para <br> se registrar antes de entrar`

    h1.style = "text-align: center;"

    header.appendChild(h1)
    loginError.appendChild(header)
}