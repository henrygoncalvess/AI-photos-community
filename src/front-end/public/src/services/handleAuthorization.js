import { CreateLoginError } from "../components/LoginError";
import { SetupLoginForm } from "../components/SetupLoginForm";

export async function handleAuthorization(token) {
    const authorizedUser = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    
    const response = await authorizedUser.json()

    console.log(response);

    if (!response.ok) {
        CreateLoginError()
    }else{
        localStorage.setItem("user", response.user);
        localStorage.setItem("id", response.id);
        document.querySelector("h1").innerHTML += ` ${response.user}`;
        SetupLoginForm()
    }
}