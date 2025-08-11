const inputTarefa = document.querySelector(".tarefa");
const addTarefa = document.querySelector(".add-tarefa");
const rmvTarefa = document.querySelector(".rmv-tarefa");
const listaTarefas = document.querySelector(".lista-tarefas");
const botaoExcluirTudo = document.querySelector(".excluirTudo");

function addBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement("button");
    botaoApagar.setAttribute("class", "rmv-tarefa");
    botaoApagar.innerHTML = '🗙';
    li.appendChild(botaoApagar);
} 

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); //faz o input ser "reativado", para o usuário apenas digitar, sem ter que clicar no input dnv
}

function criaTarefa(tarefa){
    if(!tarefa) return;
    const li = document.createElement("li");
    li.innerText = tarefa;

    addBotaoApagar(li); 
    listaTarefas.appendChild(li);
    limpaInput();

    const hr = document.createElement("hr");
    li.after(hr);

    addBotaoExcluirTudo();
    salvarTarefas();
}

function salvarTarefas(){
    const todosLi = listaTarefas.querySelectorAll("li");
    const arrayTarefas = [];

    for(let tarefa of todosLi){
        arrayTarefas.push(tarefa.innerText.replace("🗙", "").trim());
    }
    const tarefasJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function buscaTarefasSalvas(){
    const tarefasSalvas = localStorage.getItem("tarefas");
    const tarefas = JSON.parse(tarefasSalvas) || []; //se o usuario nn tiver nd salvo, ent tarefas sera um array vazio. Isso evita do JS tentar iterar sobre um valor null e dar erro

    if(!tarefas.length){
        botaoExcluirTudo.style.display = "none";
    }
    for(let tarefa of tarefas){
        criaTarefa(tarefa);
    }
}

function excluiTarefa(elemento){
    const hr = elemento.parentElement.nextElementSibling; //seleciona o <hr> que está depois do <li>
    if(hr) hr.remove(); //remove esse <hr>
    elemento.parentElement.remove(); //remove o <li>

    //remover o botão de Excluir Tudo, caso o usuario remova todos os itens da lista manualmente (um a um)
    const qntdLi = document.querySelectorAll("li");
    if(qntdLi.length === 0){
        if(botaoExcluirTudo) botaoExcluirTudo.style.display = "none";
    }
    salvarTarefas(); //quando uma tarefa for excluida, o localStorage se atualiza com a nova lista de tarefas
}

function excluirTodosOsItens(){
    listaTarefas.innerHTML = "";
    botaoExcluirTudo.style.display = "none";
    localStorage.clear();
}

inputTarefa.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        const tarefa = inputTarefa.value;
        criaTarefa(tarefa); //se quando o usuario estiver no input, e apertar a tecla enter, execute a função "criaTarefa()"
    }
});

addTarefa.addEventListener('click', function(){
    const tarefa = inputTarefa.value;
    criaTarefa(tarefa); //se o usuario clicar no botão addTarefa, execute a função "criaTarefa()"
});

function addBotaoExcluirTudo(){
    const main = document.querySelector("main");
    if(main.querySelectorAll("li").length > 0){
        botaoExcluirTudo.style.display = "inline-flex";
    }
}

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains("excluirTudo")) excluirTodosOsItens();
    if(elemento.classList.contains("rmv-tarefa")) excluiTarefa(elemento);
});

buscaTarefasSalvas();