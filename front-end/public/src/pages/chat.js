import { CreateButton } from '../components/Button';
import { getUserId } from '../services/getUserId';

const root = document.querySelector("div#root")

const button = CreateButton("submit", "⭐gerar imagem⭐")

root.appendChild(button)

const prompt = document.querySelector("input#prompt")
const name = localStorage.getItem("user")

button.addEventListener("click", async () => {
    const response = await getUserId(name)

    console.log(response);
})