export function createError(){
    const root = document.querySelector("div#root")

    const header = document.createElement('header')
    const h1 = document.createElement('h1')

    h1.innerHTML = `
    <p style="color:red;">Usuário não reconhecido</p>
    Vá para a página <a href="index.html">Sign-Up</a> para <br> se cadastrar antes de fazer Login`

    h1.style = "text-align: center;"

    header.appendChild(h1)
    root.appendChild(header)
}