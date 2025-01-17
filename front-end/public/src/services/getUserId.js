export async function getUserId(name){
    const userId = await fetch("http://localhost:3000/chat", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })
    
    const response = await userId.json()

    return response
}