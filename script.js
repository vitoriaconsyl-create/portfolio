const formulario = document.querySelector('#meuFormulario');
const btnTema = document.querySelector('#btn-tema');
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");
const btnTopo = document.getElementById("btn-topo");

menuToggle.addEventListener("click", () => { //Quando clicar no botao do menu hamburguer
    nav.classList.toggle("active"); //adiciona ou remove a classe
});

document.addEventListener("click", (event) => { //Detecta o clique em qualquer lugar da tela para fechar o menu
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove("active");
    }
});

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const msg = document.querySelector("#msg").value.trim();
    const primeiroNome = nome.split(" ")[0];

    if (nome === "" || email === "" || msg === "") { // Se algum campo estiver vazio
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigada, ${primeiroNome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener(`submit`, validarFormulario);

function atualizarTextoBotao() { //Atualiza texto do botão
    if (body.classList.contains('dark')) {
        btnTema.textContent = "Claro";
    } else {
        btnTema.textContent = "Escuro";
    }
}

function alternarTema() { //Alterna tema claro ou escuro
    body.classList.toggle('dark');
    atualizarTextoBotao();
}

btnTema.addEventListener('click', alternarTema);

atualizarTextoBotao();

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { //Se rolou mais de 300px
        btnTopo.style.display = "block"; //mostra o botão
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => { // quando clicar no botão
    window.scrollTo({ //rola suavemente até o topo
        top: 0,
        behavior: "smooth"
    });
});

//Array com os projetos

const listaProjetos = [
    {
        titulo: "Portfólio (HTML, CSS e JavaScript)",
        descricao: "Portfólio web desenvolvido com HTML, CSS e JavaScript, contendo layout responsivo, menu interativo e funcionalidades como validação de formulário e alternância de tema, com foco em usabilidade e organização das informações.",
        link: "https://github.com/vitoriaconsyl-create/portfolio.git"
    },
    {
        titulo: "Portfólio (React)",
        descricao: "Aplicação web desenvolvida com React para apresentação profissional, contendo seções de projetos, informações pessoais e formulário de contato. O projeto utiliza componentização, responsividade e alternância de tema (claro/escuro), com foco em organização e experiência do usuário.",
        link: "https://github.com/vitoriaconsyl-create/portfolio-react.git"
    },
    {
        titulo: "Calculadora",
        descricao: "Aplicação web desenvolvida com HTML, CSS e JavaScript para realização de operações matemáticas básicas. O projeto inclui validação de entradas, manipulação do DOM e interface responsiva, proporcionando uma experiência simples e funcional ao usuário.",
        link: "https://github.com/vitoriaconsyl-create/calculadorasimples.git"
    }
];

const container = document.getElementById("lista-projetos");
if (container) {
    listaProjetos.forEach((proj) => { // percorre cada item do array
        const card = document.createElement("article"); //cria o card
        card.classList.add("cardProjeto"); //adiciona uma classe

        //insere dentro do card
        card.innerHTML = ` 
            <h3>${proj.titulo}</h3>
            <p>${proj.descricao}</p>
            <a href="${proj.link}" target="_blank">Ver projeto no GitHub</a>
        `;
        container.appendChild(card); //adiciona o card dentro do container
    });
}