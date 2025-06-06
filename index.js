const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnMarcarTodos = document.getElementById("btnMarcarTodos");
const btnOcultar = document.getElementById("btnOcultar");
const btnLimpar = document.getElementById("btnLimpar");
const listaTarefas = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

const tarefas = []

function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.textContent = tarefa;
        listaTarefas.appendChild(li)

        li.addEventListener('click', () => {
            li.classList.toggle('concluido')
        });
    });

    contador.textContent = `Total de tarefas: ${tarefas.length}`;

};
btnAdicionar.addEventListener('click', () => {
    const valor = inputTarefa.value.trim();
    if (valor !== "") {
        tarefas.push(valor);

    }
    renderizarTarefas();
    inputTarefa.value = '';

});
btnMarcarTodos.addEventListener('click', () => {
    const itens = document.querySelectorAll("#listaTarefas li");
    itens.forEach(item => {
        item.classList.add('concluido')
    })

});

let mostrar = false
btnOcultar.addEventListener('click', () => {
    mostrar = !mostrar
    if (mostrar) {
        btnOcultar.textContent = "Mostrar Lista"
        listaTarefas.style.display = "none"
    } else {
        btnOcultar.textContent = "Ocultar Lista"
        listaTarefas.style.display = "block"
    }


});
btnLimpar.addEventListener('click', () => {
    tarefas.length = 0;
    listaTarefas.innerHTML = "";
    renderizarTarefas();
});








