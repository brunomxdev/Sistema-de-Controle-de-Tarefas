const formulario = document.getElementById("formTarefa");
const nomeTarefa = document.getElementById("nomeTarefa");
const descricaoTarefa = document.getElementById("descricaoTarefa");
const mensagemErro = document.getElementById("mensagemErro");
const listaTarefas = document.getElementById("listaTarefas");

const chave = "tarefasSimplificadas";
let tarefas = [];

try {
    const dadosSalvos = JSON.parse(localStorage.getItem(chave));
    if (Array.isArray(dadosSalvos)) {
        tarefas = dadosSalvos;
    }
} catch (erro) {
    tarefas = [];
}

function salvarTarefas() {
    localStorage.setItem(chave, JSON.stringify(tarefas));
}

function atualizarDashboard() {
    const concluidas = tarefas.filter(function(tarefa) {
        return tarefa.concluida;
    }).length;

    document.getElementById("totalTarefas").textContent = tarefas.length;
    document.getElementById("tarefasPendentes").textContent = tarefas.length - concluidas;
    document.getElementById("tarefasConcluidas").textContent = concluidas;
}

function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    if (tarefas.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "avisoVazio";
        aviso.textContent = "Nenhuma tarefa cadastrada por enquanto.";
        listaTarefas.appendChild(aviso);
    } else {
        tarefas.forEach(function(tarefa, indice) {
            const card = document.createElement("article");
            card.className = "cardTarefas";

            if (tarefa.concluida) {
                card.classList.add("concluida");
            }

            const titulo = document.createElement("h3");
            titulo.textContent = tarefa.nome;
            card.appendChild(titulo);

            if (tarefa.descricao) {
                const descricao = document.createElement("p");
                descricao.textContent = tarefa.descricao;
                card.appendChild(descricao);
            }

            const status = document.createElement("p");
            status.textContent = tarefa.concluida ? "Status: Concluída" : "Status: Pendente";
            card.appendChild(status);

            const botoes = document.createElement("div");
            botoes.className = "btnCard";

            const btnConcluir = document.createElement("button");
            btnConcluir.className = "btnConcluir";
            btnConcluir.textContent = tarefa.concluida ? "Reabrir" : "Concluir";
            btnConcluir.addEventListener("click", function() {
                if (tarefa.concluida) {
                    tarefa.concluida = false;
                } else {
                    tarefa.concluida = true;
                }
                salvarTarefas();
                mostrarTarefas();
            });

            const btnExcluir = document.createElement("button");
            btnExcluir.className = "btnExcluir";
            btnExcluir.textContent = "Excluir";
            btnExcluir.addEventListener("click", function() {
                if (confirm("Deseja excluir esta tarefa?")) {
                    tarefas.splice(indice, 1);
                    salvarTarefas();
                    mostrarTarefas();
                }
            });

            botoes.appendChild(btnConcluir);
            botoes.appendChild(btnExcluir);
            card.appendChild(botoes);
            listaTarefas.appendChild(card);
        });
    }

    atualizarDashboard();
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = nomeTarefa.value.trim();
    const descricao = descricaoTarefa.value.trim();

    if (nome === "") {
        mensagemErro.textContent = "Digite o nome da tarefa antes de adicionar.";
        nomeTarefa.focus();
        return;
    } else {
        mensagemErro.textContent = "";
    }

    tarefas.push({ nome: nome, descricao: descricao, concluida: false });
    salvarTarefas();
    mostrarTarefas();
    formulario.reset();
    nomeTarefa.focus();
});

mostrarTarefas();

// Alterna o tema e guarda a escolha no navegador.
const botaoTema = document.getElementById("botaoTema");

function atualizarTema() {
    const escuro = document.body.classList.contains("temaEscuro");
    botaoTema.textContent = escuro ? "☀️ Modo claro" : "🌙 Modo escuro";
    botaoTema.setAttribute("aria-pressed", String(escuro));
}

if (localStorage.getItem("temaTarefas") === "escuro") {
    document.body.classList.add("temaEscuro");
}

atualizarTema();

botaoTema.addEventListener("click", function() {
    if (document.body.classList.contains("temaEscuro")) {
        document.body.classList.remove("temaEscuro");
        localStorage.setItem("temaTarefas", "claro");
    } else {
        document.body.classList.add("temaEscuro");
        localStorage.setItem("temaTarefas", "escuro");
    }
    atualizarTema();
});