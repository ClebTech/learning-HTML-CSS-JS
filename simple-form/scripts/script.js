function myFunction(){
    const form = document.querySelector('form');
    const dados = document.querySelector('#dados');


    function recebeEventoFrom (evento){
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const email = form.querySelector('#email');
        const idade = form.querySelector('#idade');

        const pessoas = [];

        pessoas.push({nome: nome.value, 
                    email: email.value, 
                    idade: idade.value});

        console.log(pessoas);
        dados.innerHTML += `<p>${nome.value}, ${email.value}, ${idade.value}</p>`
    }

    form.addEventListener('submit', recebeEventoFrom);
}

myFunction();