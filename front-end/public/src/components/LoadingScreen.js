export function CreateLoadingScreen(text){
    const divScreen = document.createElement("div")
    const divCircle = document.createElement("div")
    const p = document.createElement("p")

    divScreen.setAttribute("id", "loadingScreen")

    divScreen.style.position = "fixed"
    divScreen.style.top = "0"
    divScreen.style.left = "0"
    divScreen.style.width = "100%"
    divScreen.style.height = "100%"
    divScreen.style.backgroundColor = "rgba(0, 0, 0, 0.83)"
    divScreen.style.display = "flex"
    divScreen.style.justifyContent = "center"
    divScreen.style.alignItems = "center"
    divScreen.style.flexDirection = "column"
    divScreen.style.color = "white"
    divScreen.style.zIndex = "10000"
    divScreen.style.pointerEvents = "all"

    divCircle.style.border = "5px solid #f3f3f3"
    divCircle.style.borderTop = "5px solid #2aaaff"
    divCircle.style.borderRadius = "50%"
    divCircle.style.width = "60px"
    divCircle.style.height = "60px"
    divCircle.style.animation = "spin 0.8s linear infinite"

    p.style.fontSize = "1.1em"
    p.style.fontWeight = "bolder"
    p.innerHTML = text

    divScreen.appendChild(divCircle)
    divScreen.appendChild(p)

    return divScreen
}

export function RemoveLoadingScreen(screenElement){
    screenElement.style.display = "none"
}