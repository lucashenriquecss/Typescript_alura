export class List {
    constructor() {
        this.list = []; // Array<Negociacao>
    }
    adicionar(negociacao) {
        this.list.push(negociacao);
    }
    listar() {
        return this.list;
    }
}
