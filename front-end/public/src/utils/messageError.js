export function displayError(message, field, error){
    if(message){
        field.className = "form error"
        error.innerText = message
    }else{
        field.className = "form"
    }
}