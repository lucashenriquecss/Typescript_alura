import { Negociacao } from './negociacao.js';

export class List {

    private list : Negociacao[] = []; // Array<Negociacao>

 

    adicionar(negociacao: Negociacao){
        this.list.push(negociacao);
    }

    listar():readonly Negociacao[]{ //listar e ser imutavel;ReadonlyArray<Negociacao>
        return this.list
    }
}