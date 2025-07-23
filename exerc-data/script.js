
// console.log(data.toString()); //data atual

// const data2 = new Date(2025, 3, 21, 15, 47, 51, 859);  //Ano, mês (Janeiro = 0 e Dezembro = 11), dia, hora, minutos, segundos, milissegundos
// console.log(data2.toString());

// const data3 = new Date('2021-01-17 20:18:39');
// console.log(data3.toString());

// console.log(Date.now());

const dataAtual = document.querySelector(".dataAtual");


const data = new Date(); //instanciando o objeto data

function adicionandoZeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function retornaDiaDaSemana(numeroDia){
    if(numeroDia === 0) return "Domingo";
    if(numeroDia === 1) return "Segunda-feira";
    if(numeroDia === 2) return "Terça-feira";
    if(numeroDia === 3) return "Quarta-feira";
    if(numeroDia === 4) return "Quinta-feira";
    if(numeroDia === 5) return "Sexta-feira";
    if(numeroDia === 6) return "Sábado";
}

function formatandoData(data){
    const ano = adicionandoZeroEsquerda(data.getFullYear());
    const mes = adicionandoZeroEsquerda(data.getMonth());
    const dia = adicionandoZeroEsquerda(data.getDate());
    const hora = adicionandoZeroEsquerda(data.getHours());
    const minuto = adicionandoZeroEsquerda(data.getMinutes());
    const segundo = adicionandoZeroEsquerda(data.getSeconds());

    const diaSemana = retornaDiaDaSemana(data.getDay());

    return `<strong>${dia}/${mes}/${ano}</strong> ${hora}:${minuto}:${segundo} (${diaSemana})`;
}


dataAtual.innerHTML = formatandoData(data);

