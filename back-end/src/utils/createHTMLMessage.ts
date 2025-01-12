export function createHTMLMessage(name: string, link: string): string{
    const cssButton = `
    color: white;text-shadow: 0px 1.2px 1px #242424;background-color: #00c645;padding: 7px 13px;
    font-size: large;font-weight: bolder;text-transform: uppercase;text-decoration: none;border-radius: 50px;
    border-bottom: 5px solid #006423;`

    const title = `<h3 align="center" style="color:#016ce6;margin:auto;width:max-content;padding:5px10px;border-radius:5px;">${name}</h3>`

    const content = `
    <section style="border: 1px solid black;padding: 3px 0px;margin:auto;width: 450px;border-radius:5px;">
    <h1 align="center">Agradeçemos seu cadastro</h1>
    <p align="center" style="font-weight: 100;">Clique no botão abaixo para confirmar seu e-mail.</p>
    <p align="center" style="margin-top: 40px;"><a href="${link}" style="${cssButton}">Confirmar seu e-mail</a></p></section>`

    const message = [title, content].join("")

    return message
}