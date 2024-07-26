const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('input', handleChange)

const handleStyle = {
    element: btn,
    
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },

    color(value){
        this.element.style.color = value
    },

    height(value){
        this.element.style.height = `${value}px`
    },

    width(value){
        this.element.style.width = `${value}px`
    },

    border(value){
        this.element.style.border = value
    },

    borderRadius(value){
        this.element.style.borderRadius = `${value}px`
    },

    fontFamily(value){
        this.element.style.fontFamily = value
    },

    fontSize(value){
        this.element.style.fontSize = `${value}rem`
    },

    text(value){
        this.element.textContent = value
    }

}

function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    handleStyle[name](value)
    saveValuesLocalStorage(name, value)
    showCss()
}

function setValues() {
    const properties = Object.keys(localStorage)
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie])
        controles.elements[propertie].value = localStorage[propertie]
    })
    showCss()
}

setValues()

function saveValuesLocalStorage(name, value) {
    localStorage[name] = value
}

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}
