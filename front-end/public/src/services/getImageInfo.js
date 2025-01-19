export async function getImageInfo(email){
    const POST = await fetch("http://localhost:3000/users/url", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })

    const responseData = await POST.json()

    return responseData
}