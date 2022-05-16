import { Negociacao } from './negociacao.js';

export class List {

    private list : Negociacao[] = []; // Array<Negociacao>

 

    public adicionar(negociacao: Negociacao){
        this.list.push(negociacao);
    }

    public listar():readonly Negociacao[]{ //listar e ser imutavel;ReadonlyArray<Negociacao>
        return this.list
    }
}