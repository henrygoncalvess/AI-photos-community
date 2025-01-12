const validEmail = JSON.parse(localStorage.getItem("utils"))

console.log(validEmail.response.message);

document.querySelector("p").innerHTML += `<strong>${validEmail.email}</strong>`