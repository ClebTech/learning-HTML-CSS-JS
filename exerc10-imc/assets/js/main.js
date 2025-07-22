function calcularIMC() {
    const form = document.querySelector("form");
    const resultado = document.querySelector("#resultado");
    let situacao;

    function evitaCarregar(evento) {
        evento.preventDefault();

        const peso = form.querySelector("#peso");
        const altura = form.querySelector("#altura");

        if (Number.isNaN(Number(peso.value))) {
            resultado.style.backgroundColor = "red";
            resultado.innerHTML = `<strong>ERRO!</strong> Informe o peso corretamente.`;
        } else if (Number.isNaN(Number(altura.value))) {
            resultado.style.backgroundColor = "red";
            resultado.innerHTML = `<strong>ERRO!</strong> Informe a altura corretamente.`;
        } else if (!altura.value || !peso.value) {
            resultado.style.backgroundColor = "red";
            resultado.innerHTML = `<strong>ERRO!</strong> Você precisa informar todos os dados.`;
        } else if (altura.value <= 0 || peso.value <= 0) {
            resultado.style.backgroundColor = "red";
            resultado.innerHTML = `<strong>ERRO!</strong> Você precisa informar os dados corretamente.`;
        } else {
            const imc = Number(peso.value) / Number(altura.value) ** 2;

            if (imc < 18.5) {
                situacao = "Abaixo do peso";
            } else if (imc >= 18.5 && imc <= 24.9) {
                situacao = "Peso normal";
            } else if (imc >= 25 && imc <= 29.9) {
                situacao = "Sobrepeso";
            } else if (imc >= 30 && imc <= 34.9) {
                situacao = "Obesidade Grau 1";
            } else if (imc >= 35 && imc <= 39.9) {
                situacao = "Obesidade Grau 2";
            } else {
                situacao = "Obesidade Grau 3";
            }
            resultado.style.backgroundColor = "lightgreen";
            resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${situacao})`;
        }
    }

    form.addEventListener('submit', evitaCarregar);
}

calcularIMC();

// console.log(Number.isNaN(Number('a')));