const btnAgregarTarea = document.querySelector(".app__button--add-task")
const formAgregarTarea = document.querySelector(".app__form-add-task")
const textarea = document.querySelector(".app__form-textarea")

const tareas = []

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

    //JSON 
    // stringify - Conventir un parametro a string
    // parse     - Convertir un string a un array/obj

    localStorage.setItem("tareas", JSON.stringify(tareas))
})
