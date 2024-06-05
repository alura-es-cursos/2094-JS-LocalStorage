const btnAgregarTarea = document.querySelector(".app__button--add-task")
const formAgregarTarea = document.querySelector(".app__form-add-task")
const textarea = document.querySelector(".app__form-textarea")
const ulTareas = document.querySelector(".app__section-task-list")

const tareas = JSON.parse(localStorage.getItem("tareas")) || []
console.log(tareas)

function actualizarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

function crearElementoTarea(tarea) {
    const li = document.createElement("li")
    li.classList.add("app__section-task-list-item")
    const svg = document.createElement("svg")
    //backticks
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
</svg>
    `
    const parrafoDesc = document.createElement("p")
    parrafoDesc.classList.add("app__section-task-list-item-description")
    parrafoDesc.innerText = tarea.descripcion

    const btn = document.createElement("button")
    btn.classList.add("app_button-edit")

    btn.addEventListener("click", () => {
        //debugg --> Debuggear Depurar
        //debugger
        const nuevaDescripcion = prompt("¿Cuál es la nueva tarea?")
        console.log(nuevaDescripcion)
        //null , "", undefined
        if (nuevaDescripcion) {
            parrafoDesc.innerText = nuevaDescripcion
            tarea.descripcion = nuevaDescripcion
            actualizarTareas()
        }

    })

    const img = document.createElement("img")
    img.src = "/imagenes/edit.png"

    li.appendChild(svg)
    li.appendChild(parrafoDesc)

    btn.appendChild(img)

    li.appendChild(btn)

    return li
}

btnAgregarTarea.addEventListener("click", function () {
    console.log("Click")
    formAgregarTarea.classList.toggle("hidden")
})

formAgregarTarea.addEventListener("submit", function (evento) {
    evento.preventDefault()
    console.log("Guardar", textarea.value)

    const tarea = {
        descripcion: textarea.value
    }

    tareas.push(tarea)

    const elementoTarea = crearElementoTarea(tarea)
    ulTareas.appendChild(elementoTarea)

    //JSON 
    // stringify - Conventir un parametro a string
    // parse     - Convertir un string a un array/obj

    actualizarTareas()

    textarea.value = ""

    formAgregarTarea.classList.add('hidden')

})


tareas.forEach((tarea) => {
    const elementoTarea = crearElementoTarea(tarea)
    ulTareas.appendChild(elementoTarea)
})