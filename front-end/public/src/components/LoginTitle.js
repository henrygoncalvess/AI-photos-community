export function createTitle(username){
    const root = document.querySelector("div#root")

    const header = document.createElement('header')
    const h1 = document.createElement('h1')

    h1.textContent = `Bem vindo ${username}`

    header.appendChild(h1)
    root.appendChild(header)
}