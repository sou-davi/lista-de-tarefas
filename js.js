let input=document.getElementById("input-add")
let botao=document.getElementById("botao-add")
let listacompleta=document.getElementById("lista-add")
let listDeTarefas=[]

function mostrarNatela(){
    let novalista=""

    listDeTarefas.forEach(tarefa =>{
        novalista= novalista + `
        <li class="item-tarefa">
            <p>${tarefa}</p>
        
        </li>

        `
        
    })
    listacompleta.innerHTML=novalista
}


function cliqueiNoBotao(){
    listDeTarefas.push(input.value)
    mostrarNatela()

}



botao.addEventListener("click",cliqueiNoBotao)
