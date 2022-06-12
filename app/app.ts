import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();

const form = document.querySelector('.form')//Pegando o formulario para adicionar

if(form){
    form.addEventListener('submit', event => {
        event.preventDefault(); // Cancelanddo evento padrao 
        controller.adicionar();  
    });
}else{
    throw Error('Não foi possível inicializar aplicação, verifique se o form existe.');
}

