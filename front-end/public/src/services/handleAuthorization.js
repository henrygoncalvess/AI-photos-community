export async function handleAuthorization(token) {
    const authorizedUser = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    
    const response = await authorizedUser.json()

    if (!response.ok) {
        alert("Token inválido ou expirado");
        return;
    }

    localStorage.setItem("user", response.user);
    document.querySelector("h1").innerHTML += ` ${response.user}`;
}