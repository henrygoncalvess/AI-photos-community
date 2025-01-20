export async function showImages(){
    const GET = await fetch("http://localhost:3000/users", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseData = await GET.json()

    const containerImage = document.querySelector("section")

    responseData.map(value => {
        let p = document.createElement("p")
        let img = document.createElement("img")
        let div = document.createElement("div")
        
        p.innerHTML = `
        <strong>Gerada por:</strong> ${value.name}<br>
        <strong>Pedido:</strong> ${value.prompt}`
        
        img.setAttribute("src", value.urlImage)
    
        div.appendChild(p)
        div.appendChild(img)
        containerImage.appendChild(div)
    })
    
    return containerImage
}