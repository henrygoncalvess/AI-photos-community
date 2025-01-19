import { CreateButton } from '../components/Button';
import { checkIfUserHasImage } from '../services/checkUserImage';
import { getImageInfo } from '../services/getImageInfo';
import { generateImage } from '../services/generateImage';
import { showImage } from '../utils/showImage';

const root = document.querySelector("div#root")
const savedImage = document.querySelector("div#savedImage")
const prompt = document.querySelector("input#prompt")
const name = localStorage.getItem("user")
const email = localStorage.getItem("email")

const isUserGeneratedImage = await checkIfUserHasImage(email)

console.log(isUserGeneratedImage);

if (isUserGeneratedImage.ok){
    root.style.display = "none"
    savedImage.style.display = "initial"

    const response = await getImageInfo(email)

    const image = await showImage(response.prompt, name, response.urlImage)

    savedImage.appendChild(image)
    
}else{
    const button = CreateButton("submit", "⭐gerar imagem⭐")
    
    root.appendChild(button)

    h1.innerHTML = "Peça uma imagem à IA <br> e veja o que ela cria!"
    
    const id = localStorage.getItem("id")
    const h1 = document.querySelector("h1")
    
    button.addEventListener("click", async () => {
        if(prompt.value.length > 0){
            prompt.style.display = "none"
            button.style.display = "none"
    
            h1.innerHTML = "A IA está gerando sua imagem..."
            
            const generetadImageResult = await generateImage(prompt.value, name, id)
    
            console.log(generetadImageResult);
            
        }else{
            alert("Peça uma imagem à IA")
        }
    })
}
