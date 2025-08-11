function atualizarRelogio(){
    const data = new Date();

    dataAtual.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
    horaAtual.innerHTML = data.toLocaleString('pt-BR', {timeStyle: 'long'});
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
