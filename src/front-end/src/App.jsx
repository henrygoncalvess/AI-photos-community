// import { CreateButton } from "./components/Button";
// import { CreateInput } from "./components/InputForm";
// import { SetValidator } from "./utils/validator";

// export function createFormSignUp(){
//     const root = document.querySelector("div#root")

//     const inputName = CreateInput("name", "text", "Nome", "Digite o nome do usuário...")

//     const inputEmail = CreateInput("email", "email", "E-mail", "Digite seu e-mail...")

//     const inputPassword = CreateInput("password", "text", "Senha", "Digite sua senha...")

//     const inputPasswordConfirmation = CreateInput("passwordConfirmation", "text", "Confirme sua senha", "Digite novamente sua senha...")

//     const button = CreateButton("submit", "confirmar")

//     SetValidator.name(inputName[1])
//     SetValidator.email(inputEmail[1])
//     SetValidator.password(inputPassword[1])
//     SetValidator.passConfirmation(inputPasswordConfirmation[1], inputPassword[1])

//     root.appendChild(inputName[0])
//     root.appendChild(inputEmail[0])
//     root.appendChild(inputPassword[0])
//     root.appendChild(inputPasswordConfirmation[0])
//     root.appendChild(button)
// }

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Status from "./routes/Status";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"status"} element={<Status />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
