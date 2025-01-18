export async function generateImage(prompt, name, id) {
    const POST = await fetch("http://localhost:3000/chat/image", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt, id })
    })

    const responseData = await POST.json()

    console.log(responseData);

    const h1 = document.querySelector("h1")
    const containerImage = document.querySelector("section")

    const img = document.createElement("img")
    const p = document.createElement("p")
    
    img.setAttribute("src", responseData.urlImage)

    h1.innerHTML = "Prontinho! <br> Divirta-se compartilhando <br> seu resultado"
    p.innerHTML = `
    <strong>Gerada por:</strong> ${name}<br>
    <strong>Pedido:</strong> ${prompt}`

    containerImage.appendChild(img)
    containerImage.appendChild(p)

    return "ok"
}