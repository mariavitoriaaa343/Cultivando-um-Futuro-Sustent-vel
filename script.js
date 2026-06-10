let numero = 0;

function contar() {
    let intervalo = setInterval(() => {
        numero += 10;
        document.getElementById("numero").textContent = numero;

        if (numero >= 1000) {
            clearInterval(intervalo);
        }
    }, 20);
}