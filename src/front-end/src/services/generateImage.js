import { RemoveLoadingScreen } from "../components/LoadingScreen";
import { showImages } from "./showImages";

export async function generateImage(prompt, id) {
    const POST = await fetch("http://localhost:3000/chat/image", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt, id })
    })

    const responseData = await POST.json()

    console.log(responseData);

    RemoveLoadingScreen(document.querySelector("div#loadingScreen"))

    if (responseData.ok){
        RemoveLoadingScreen(document.querySelector("div#loadingScreen"))

        document.querySelector("div#root").style.display = "none"
        document.querySelector("div#savedImage").style.display = "initial"

        const images = await showImages()

        document.querySelector("div#savedImage").appendChild(images)

        return responseData

    }else{
        RemoveLoadingScreen(document.querySelector("div#loadingScreen"))
        alert("erro ao gerar imagem")
    
        document.querySelector("input#prompt").style.display = "initial"
        document.querySelector("button").style.display = "block"
        document.querySelector("h2").innerHTML = "Peça uma imagem à IA <br> e veja o que ela cria!"
    
        return responseData
    }
}