const formulario = document.querySelector('#meuFormulario');
const btnTema = document.querySelector('#btn-tema');
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("click", (event) => {
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

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigada, ${primeiroNome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener(`submit`, validarFormulario);

function atualizarTextoBotao() {
    if (body.classList.contains('dark')) {
        btnTema.textContent = "Claro";
    } else {
        btnTema.textContent = "Escuro";
    }
}

function alternarTema() {
    body.classList.toggle('dark');
    atualizarTextoBotao();
}

btnTema.addEventListener('click', alternarTema);

atualizarTextoBotao();