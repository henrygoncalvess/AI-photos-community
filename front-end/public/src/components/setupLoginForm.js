import { confirmLogin } from "../services/confirmLogin";
import { SetValidator } from "../utils/validator";
import { CreateLoginError } from "./LoginError";

export function SetupLoginForm() {
    const email = localStorage.getItem("email");
    const password = document.querySelector("input#password");

    document.querySelector("button").addEventListener("click", async () => {
        const validUser = SetValidator.validatePasswordLogin();

        if (validUser) {
            const data = await confirmLogin(email, password.value);

            console.log(data);

            if (data.ok) {
                window.location.href = "chat.html"
            } else if (data.user === false) {
                CreateLoginError()
                localStorage.clear()
            } else{
                alert("Senha incorreta");
            }
        }
    });
}