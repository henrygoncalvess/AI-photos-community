export async function confirmAuthorization(token) {
    const authorizedUser = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    
    const response = await authorizedUser.json()

    return response
}