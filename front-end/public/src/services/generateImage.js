import { RemoveLoadingScreen } from "../components/LoadingScreen";

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

    if (responseData.ok){
        RemoveLoadingScreen(document.querySelector("div#loadingScreen"))
        
        document.querySelector("h2").innerHTML = "Prontinho! <br> Divirta-se compartilhando <br> seu resultado"
            
        await showImages()

    }else{
        RemoveLoadingScreen(document.querySelector("div#loadingScreen"))
        alert("erro ao gerar imagem")
    
        document.querySelector("input#prompt").style.display = "initial"
        document.querySelector("button").style.display = "block"
        document.querySelector("h2").innerHTML = "Peça uma imagem à IA <br> e veja o que ela cria!"
    
        return responseData
    }
}