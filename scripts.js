
let button = document.querySelector('.button-text')
let input = document.getElementById('tarefaInput')
let listaCompleta = document.querySelector('.lista-Tarefas')

let minhaListaDetarefas = []

function adicionarNovaTarefas() {

    if (input.value.trim() === '') {
        return
    }

    minhaListaDetarefas.push({
  tarefa:input.value,
  concluida:false

    })

    mostrarTarefas()

    input.value = ''
}

function mostrarTarefas() {

    let novaLi = ""

    minhaListaDetarefas.forEach((item, posicao) => {

        novaLi += `
        <li class="tarefas ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check" onclick="concluirTarefa(${posicao})" width="20" height="20">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="lixeira"onclick="deletarItem(${posicao})" width="20" height="20" >
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

localStorage.setItem('lista',JSON.stringify(minhaListaDetarefas))

}

  function concluirTarefa(posicao){
minhaListaDetarefas[posicao].concluida = !minhaListaDetarefas[posicao].concluida

    mostrarTarefas()
  }
function deletarItem(posicao){

    minhaListaDetarefas.splice(posicao,1)
    
    mostrarTarefas() 
}

function recarregarTelas(){
    let tarefasDoLocalStorage= localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
 minhaListaDetarefas= JSON.parse(tarefasDoLocalStorage)
    }

   
    mostrarTarefas()
}
recarregarTelas()
button.addEventListener('click', adicionarNovaTarefas)


