import { createError } from "../components/LoginError";
import { createTitle } from "../components/LoginTitle";

const params = new URLSearchParams(window.location.search);
const token = params.get('token');

if (!token){
    createError()

}else{
    const authorizedUser = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })

    const response = await authorizedUser.json()

    console.log(response);

    createTitle(response.user)
}