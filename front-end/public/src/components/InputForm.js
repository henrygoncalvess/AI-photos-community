export function createInput(id, type, text, placeholder){
    const label = document.createElement("label")

    label.setAttribute("for", id)

    const fieldset = document.createElement("fieldset")

    fieldset.className = "form"

    label.appendChild(fieldset)

    const legend = document.createElement("legend")

    legend.innerHTML = text

    fieldset.appendChild(legend)

    const input = document.createElement("input")

    input.setAttribute("id", id)
    input.setAttribute("autocomplete", "off")
    input.setAttribute("type", type)
    input.setAttribute("placeholder", placeholder)

    fieldset.appendChild(input)

    const span = document.createElement("span")

    fieldset.appendChild(span)

    return label
}