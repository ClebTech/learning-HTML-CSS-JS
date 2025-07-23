function adicionandoZeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function retornaDiaDaSemana(numeroDia){
    switch(numeroDia){
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
    }
}

function retornaNomeDoMes(mes){
    switch(mes){
        case 0:
            return "janeiro";
        case 1:
            return "fevereiro";
        case 2:
            return "março";
        case 3:
            return "abril";
        case 4:
            return "maio";
        case 5:
            return "junho";
        case 6:
            return "julho";
        case 7:
            return "agosto";
        case 8:
            return "setembro";
        case 9:
            return "outubro";
        case 10:
            return "novembro";
        case 11:
            return "dezembro";
    }
}

function formatandoData(data){
    const ano = data.getFullYear();
    const mes = data.getMonth();
    const dia = data.getDate();

    const diaSemana = retornaDiaDaSemana(data.getDay());
    const mesNome = retornaNomeDoMes(mes);

    return `${diaSemana}, ${dia} de ${mesNome} de ${ano}`;
}

function formatandoHora(data){
    const hora = adicionandoZeroEsquerda(data.getHours());
    const minuto = adicionandoZeroEsquerda(data.getMinutes());
    const segundo = adicionandoZeroEsquerda(data.getSeconds());

    return `${hora}:${minuto}:${segundo}`;
}

const dataAtual = document.querySelector("#dataAtual");
const horaAtual = document.querySelector("#horaAtual");

function atualizarRelogio(){
    const data = new Date(); //instanciando o objeto data

    dataAtual.innerHTML = formatandoData(data);
    horaAtual.innerHTML = formatandoHora(data);
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();


