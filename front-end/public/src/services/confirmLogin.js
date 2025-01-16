export async function confirmLogin(email, password){
    const POST = await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    const response = await POST.json()

    return response
}