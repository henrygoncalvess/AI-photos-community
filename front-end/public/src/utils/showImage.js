export async function showImage(prompt, name, urlImage){
    const containerImage = document.querySelector("section")

    const img = document.createElement("img")
    const p = document.createElement("p")
    
    img.setAttribute("src", urlImage)

    p.innerHTML = `
    <strong>Gerada por:</strong> ${name}<br>
    <strong>Pedido:</strong> ${prompt}`

    containerImage.appendChild(img)
    containerImage.appendChild(p)

    return containerImage
}