import jwt from 'jsonwebtoken';

export function loginToken(request, reply, done){
    const query = request.query.token

    if (!query){
        reply.code(400).send({
            message: "Required access token",
            ok: false
        })
    }

    jwt.verify(query, String(process.env.JWT_SECRET), (error, data) => {
        if (error){
            reply.code(403).send({
                message: 'Invalid or expired token',
                ok: false
            })
        }

        request.data = data.name
        done()
    })
}