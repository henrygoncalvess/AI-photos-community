import { confirmLogin } from "../services/confirmLogin";
import { SetValidator } from "../utils/validator";

export function SetupLoginForm() {
    const email = localStorage.getItem("email");
    const password = document.querySelector("input#password");

    document.querySelector("button").addEventListener("click", async () => {
        const validUser = SetValidator.validatePasswordLogin();

        if (validUser) {
            const data = await confirmLogin(email, password.value);

            if (data.ok) {
                window.location.href = "chat.html"
            } else {
                alert("Senha incorreta");
            }
        }
    });
}