import { createInput } from '../components/InputForm';
import { SetValidator } from '../utils/validator';
import { createButton } from '../components/Button';
import { handleAuthorization } from '../services/handleAuthorization';
import { showError } from '../utils/showError';
import { setupLoginForm } from '../components/setupLoginForm';

const root = document.querySelector("div#root")

const inputPassword = createInput("password", "text", "Senha", "Digite sua senha...")

const button = createButton("submit", "entrar")

SetValidator.password(inputPassword[1])

root.appendChild(inputPassword[0])
root.appendChild(button)

const params = new URLSearchParams(window.location.search);
const token = params.get('token');

async function main() {
    const userStored = localStorage.getItem("user");

    if (userStored) {
        document.querySelector("h1").innerHTML += ` ${userStored}`;
        setupLoginForm();
    } else {
        if (!token) {
            showError("Página com mensagem que precisa se registrar");
            return;
        }

        await handleAuthorization(token);
        setupLoginForm()
    }
}

main();