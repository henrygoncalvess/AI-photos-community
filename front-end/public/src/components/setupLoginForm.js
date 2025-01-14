import { confirmLogin } from "../services/confirmLogin";
import { SetValidator } from "../utils/validator";

export function setupLoginForm() {
    const fields = document.querySelectorAll("fieldset.form");
    const email = localStorage.getItem("email");
    const password = document.querySelector("input#password");

    document.querySelector("button").addEventListener("click", async () => {
        const validUser = SetValidator.validatePasswordLogin();
        const allFilled = [...fields].every(item => item.className === "form");

        if (allFilled && validUser) {
            showError("Preencha todos os campos corretamente antes de confirmar");
            return;
        }

        const data = await confirmLogin(email, password.value);

        if (data.ok) {
            alert("Logado com sucesso!");
        } else {
            showError("Erro ao fazer login");
        }
    });
}