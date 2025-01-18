export async function generateImage(prompt, name, id) {
    const h1 = document.querySelector("h1")
    const containerImage = document.querySelector("section")

    const img = document.createElement("img")
    const p = document.createElement("p")
    
    img.setAttribute("src", `http://localhost:3000/images/${id}.jpg`)

    h1.innerHTML = "Prontinho! <br> Divirta-se compartilhando <br> seu resultado"
    p.innerHTML = `
    <strong>Gerada por:</strong> ${name}<br>
    <strong>Pedido:</strong> ${prompt}`

    containerImage.appendChild(img)
    containerImage.appendChild(p)

    return "ok"
}