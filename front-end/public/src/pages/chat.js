import { CreateButton } from '../components/Button';
import { checkIfUserHasImage } from '../services/checkUserImage';
import { generateImage } from '../services/generateImage';
import { showImages } from '../services/showImages';
import { CreateLoadingScreen } from '../components/LoadingScreen';

const root = document.querySelector("div#root")
const savedImage = document.querySelector("div#savedImage")
const prompt = document.querySelector("input#prompt")
const email = localStorage.getItem("email")

const isUserGeneratedImage = await checkIfUserHasImage(email)

console.log(isUserGeneratedImage);

if (isUserGeneratedImage.ok){
    root.style.display = "none"
    savedImage.style.display = "initial"

    const images = await showImages()

    savedImage.appendChild(images)
    
}else{
    const button = CreateButton("submit", "⭐gerar imagem⭐")
    
    root.appendChild(button)
    
    const id = localStorage.getItem("id")

    document.querySelector("h2").innerHTML = "Peça uma imagem à IA <br> e veja o que ela cria!"
    
    button.addEventListener("click", async () => {
        if(prompt.value.length > 0){
            prompt.style.display = "none"
            button.style.display = "none"
            document.querySelector("h2").innerHTML = ""
    
            const screen = CreateLoadingScreen("⭐ a IA está gerando sua imagem... ⭐")
            document.querySelector("body").appendChild(screen)
            
            const generetadImageResult = await generateImage(prompt.value, id)
            
            console.log(generetadImageResult);
            
        }else{
            alert("Peça uma imagem à IA")
        }
    })
}
