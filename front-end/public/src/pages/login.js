const params = new URLSearchParams(window.location.search);
const token = params.get('token');

window.addEventListener("load", async () => {
    const authorizedUser = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })

    const response = await authorizedUser.json()

    document.querySelector("h1").textContent += response.user
})