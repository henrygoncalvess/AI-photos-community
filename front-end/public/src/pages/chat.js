import { CreateButton } from '../components/Button';
import { generateImage } from '../utils/generateImage';

const root = document.querySelector("div#root")

const button = CreateButton("submit", "⭐gerar imagem⭐")

root.appendChild(button)

const prompt = document.querySelector("input#prompt")
const name = localStorage.getItem("user")
const id = localStorage.getItem("id")
const h1 = document.querySelector("h1")

button.addEventListener("click", async () => {
    if(prompt.value.length > 0){
        prompt.style.display = "none"
        button.style.display = "none"

        h1.innerHTML = "A IA está gerando sua imagem..."
        
        const generetadImageResult = await generateImage(prompt.value, name, "apple")

        console.log(generetadImageResult);
        
    }else{
        alert("Peça uma imagem à IA")
    }
})