const display = document.getElementById("display");

function adicionar(valor) {
    const ultimo = display.value.slice(-1);

    // evita dois operadores seguidos
    if ("+-*/".includes(valor) && "+-*/".includes(ultimo)) {
        return;
    }

    display.value += valor;
}

function limpar() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Erro";
    }
}