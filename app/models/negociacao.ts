export class Negociacao {
    constructor( //todo mundo pode visualizar, mas nao alterar ou atribuir valor
        private _data:Date, 
        public readonly quantidade:number, 
        public readonly valor:number
    ) {}
 
    get volume(): number {
        return this.quantidade * this.valor;
    }
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g; //expressão regular
        const date = new Date(dateString.replace(exp,','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date,quantidade,valor);
    }
}