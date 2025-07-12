import { CreateInput } from '../components/InputForm';
import { SetValidator } from '../utils/validator';
import { CreateButton } from '../components/Button';
import { handleAuthorization } from '../services/handleAuthorization';
import { SetupLoginForm } from '../components/SetupLoginForm';
import { CreateLoginError } from '../components/LoginError';

const root = document.querySelector("div#root")

const inputPassword = CreateInput("password", "text", "Senha", "Digite sua senha...")

const button = CreateButton("submit", "entrar")

SetValidator.password(inputPassword[1])

root.appendChild(inputPassword[0])
root.appendChild(button)

const params = new URLSearchParams(window.location.search);
const token = params.get('token');

async function main() {
    const userStored = localStorage.getItem("user");

    if (userStored) {
        document.querySelector("h1").innerHTML += ` ${userStored}`;
        SetupLoginForm();
    } else {
        if (!token) {
            CreateLoginError()
        }else{
            await handleAuthorization(token);
        }
    }
}

main();