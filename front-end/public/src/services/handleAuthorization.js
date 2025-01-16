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

    if (!response.ok) {
        CreateLoginError()
    }else{
        localStorage.setItem("user", response.user);
        document.querySelector("h1").innerHTML += ` ${response.user}`;
        SetupLoginForm()
    }
}