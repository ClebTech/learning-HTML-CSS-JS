function myFunction(){
    const formu = document.querySelector('form'); //estou selecionando o meu formulario pela tag <form>
    const dados = document.querySelector('#dados'); //estou selecioanando a div com id 'dados', nesta div serão mostrados os dados na tela


    function recebeEventoForm (evento){ //função que recebe o objeto chamado 'evento', que é o objeto de evento gerado automaticamente pelo navegador quando o formulário é enviado, 
        //nesse objeto há dados como: o tipo de evento (submit), o elemento que ativou o evento (formulario), e metodos para manipular o evento (preventDefault). 
        //Ou seja, quando o usuario clica para enviar o formulario... perceba que o 'evento', neste contexto, é o envio do formulário, que ocorre quando o botão de submit é acionado.
        evento.preventDefault(); //evitar que a pagina recarregue e os dados desapareçam, que é o comportamento 'default' ao enviar o formulario

        const nome = formu.querySelector('#nome'); //guardando o dado do input que tem id 'nome' dentro de uma constante chamada 'nome'
        const email = formu.querySelector('#email'); //guardando o dado do input que tem id 'email' dentro de uma constante chamada 'email'
        const idade = formu.querySelector('#idade'); //guardando o dado do input que tem id 'idade' dentro de uma constante chamada 'idade'

        const pessoas = []; //criando um array que armazenará os objetos 'pessoa', porém ela é recriado a cada submissão, isso não é um problema nesse código simples

        pessoas.push({nome: nome.value,     //adicionando no array um objeto 'pessoa', estou pegando o valor que esta na const criada previamente, só funciona com inputs ou similares
                    email: email.value, 
                    idade: idade.value});

        dados.innerHTML += `<p>${nome.value}, ${email.value}, ${idade.value}</p>`;  //mostrando os dados do usuario na tela, atraves da div 'dados'
    }

    formu.addEventListener('submit', recebeEventoForm); //dentro da tag <form> há um botão de submit, aqui estou dizendo que quando esse botão de submit for acionado, 
    //a função 'recebeEventoFrom' deverá ser executada... eu não coloco paranteses na função, pois quero que a função seja executada apenas quando o botão submit for acionado, 
    //caso eu coloque parenteses, a função será executada imediatamente, mesmo se o usuario nao clicar em submit e isso resultaria em um erro. Perceba que, 
    //quando eu ponho parenteses na frente da função eu estou passando o resultado que função retorna e nao a função em si, quando eu não coloco parenteses, 
    //eu estou passando a propria função como referencia
}

myFunction();
