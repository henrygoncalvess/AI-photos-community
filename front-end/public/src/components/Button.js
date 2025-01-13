export function createButton(type, text){
    const button = document.createElement("button")

    button.setAttribute("type", type)

    button.innerHTML = text

    button.style.cursor = "pointer"
    button.style.margin = "auto"
    button.style.padding = "7px 10px"
    button.style.marginTop = "15px"
    button.style.fontSize = "1.2em"
    button.style.fontWeight = "bolder"
    button.style.textTransform = "uppercase"
    button.style.border = "1px solid black"
    button.style.borderRadius = "5px"
    button.style.display = "block"
    button.style.boxShadow = "1px 1px 0px #a1a1a1ab"

    return button
}