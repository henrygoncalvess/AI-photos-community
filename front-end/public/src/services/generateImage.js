import { showImage } from "../utils/showImage";

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

    if (responseData.ok){
        showImage(prompt, name, responseData.urlImage)
        document.querySelector("h1").innerHTML = "Prontinho! <br> Divirta-se compartilhando <br> seu resultado"
        return "ok"
    }else{
        alert("erro ao gerar imagem, créditos insulficientes")

        document.querySelector("input#prompt").style.display = "initial"
        document.querySelector("button").style.display = "block"
        document.querySelector("h1").innerHTML = "Peça uma imagem à IA e veja o que ela cria!"

        return "créditos insulficientes"
    }
}