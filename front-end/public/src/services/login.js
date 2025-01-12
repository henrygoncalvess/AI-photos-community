export async function sendVerificationEmail(data){
    const POST = await fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const responseData = await POST.json()

    return responseData
}