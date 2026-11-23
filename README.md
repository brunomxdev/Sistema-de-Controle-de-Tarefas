# Sistema de Controle de Tarefas

Este projeto consiste em um sistema simples de controle de tarefas, desenvolvido utilizando HTML, CSS e JavaScript. O objetivo é permitir que o usuário organize suas atividades, acompanhe as tarefas pendentes e concluídas e tenha um controle básico do que precisa fazer.

O projeto foi desenvolvido como parte dos estudos da disciplina de Linguagem de Programação Web I.

## Funcionalidades

- Adicionar novas tarefas com nome e descrição.
- Marcar tarefas como concluídas.
- Reabrir tarefas que já foram concluídas.
- Excluir tarefas cadastradas.
- Visualizar a quantidade total de tarefas, pendentes e concluídas.
- Alternar entre o modo claro e o modo escuro.
- Salvar as tarefas e a preferência de tema no navegador.
- Validar o formulário para impedir o cadastro de tarefas sem nome.

## Tecnologias utilizadas

- **HTML5:** estrutura das páginas.
- **CSS3:** estilização e responsividade.
- **JavaScript:** funcionalidades e interatividade.
- **LocalStorage:** armazenamento das tarefas e do tema selecionado.

## Estrutura do projeto

```text
Controle-de-Tarefas/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

## Como utilizar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o arquivo `index.html` no navegador.
4. Digite o nome da tarefa e, se desejar, uma descrição.
5. Clique em **Adicionar Tarefa** para cadastrá-la.
6. Utilize os botões disponíveis para concluir, reabrir ou excluir as tarefas.

O sistema também permite alternar entre os modos claro e escuro por meio do botão localizado no cabeçalho.

## Armazenamento dos dados

As tarefas são armazenadas utilizando o `localStorage` do navegador. Dessa forma, as informações permanecem salvas mesmo depois que a página é atualizada ou fechada.

Como o projeto não utiliza banco de dados, as informações ficam armazenadas localmente no navegador utilizado.

## Objetivo da atividade

O projeto tem como objetivo colocar em prática os conhecimentos adquiridos durante as aulas de JavaScript, principalmente:

- Manipulação de elementos HTML através do DOM.
- Utilização de variáveis e funções.
- Estruturas condicionais `if/else`.
- Arrays e métodos como `forEach()`, `filter()` e `push()`.
- Eventos com `addEventListener()`.
- Validação de formulários.
- Armazenamento de dados com `localStorage`.

## Considerações finais

O desenvolvimento deste sistema permitiu colocar em prática conceitos fundamentais de JavaScript, principalmente a manipulação do DOM e a utilização de eventos para tornar uma página interativa.

Além disso, o projeto demonstra como é possível desenvolver uma aplicação funcional utilizando apenas HTML, CSS e JavaScript, sem a necessidade de frameworks ou banco de dados.
