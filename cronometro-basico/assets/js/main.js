let hora = 0;
let minuto = 0;
let segundo = 0;
let timer = null; //para garantir que o temporizador nn seja chamado multiplas vezes e o tempo fique acelerado

const cronometro = document.querySelector("#cronometro");
const botaoIniciar = document.querySelector("#iniciar");
const botaoPausar = document.querySelector("#pausar");
const botaoZerar = document.querySelector("#zerar");

function myFunction(){
    if(segundo === 59){
        segundo = 0;
        if(minuto === 59){
            hora++;
            minuto = 0;
        }else{
            minuto++;
        }
    }else{
        segundo++;
    }
    cronometro.innerHTML = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}`;
}

function chamaCronometro(){
    if(timer !== null) return;
    cronometro.style.color = 'black';
    timer = setInterval(myFunction, 1000);
}

botaoIniciar.addEventListener('click', chamaCronometro);

botaoPausar.addEventListener('click', function (){
    clearInterval(timer);
    cronometro.style.color = 'red';
    timer = null;
});
botaoZerar.addEventListener('click', function (){
    clearInterval(timer);
    hora = 0; minuto = 0; segundo = 0;
    cronometro.style.color = 'black';
    timer = null;
    cronometro.innerHTML = '00:00:00';
});

