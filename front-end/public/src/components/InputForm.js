export function createInput(id, type, text, placeholder){
    const label = document.createElement("label")

    label.setAttribute("for", id)

    const fieldset = document.createElement("fieldset")

    fieldset.className = "form"

    const legend = document.createElement("legend")

    legend.innerHTML = text

    const input = document.createElement("input")

    input.setAttribute("id", id)
    input.setAttribute("autocomplete", "off")
    input.setAttribute("type", type)
    input.setAttribute("placeholder", placeholder)

    const span = document.createElement("span")
    
    label.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(input)
    fieldset.appendChild(span)

    return [label, input]
}