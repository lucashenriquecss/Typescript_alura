export class View{

    protected elemento: HTMLElement; // só View tem acesso, mas as classes filhas da herança podem 'tocar'

    constructor(selector:string){
        this.elemento = document.querySelector(selector)
    }
    
    template(model: string): string{
        //unico metodo que sempre é uma string
        throw Error('Classe filha precisa implementar o metodo template')

    }
    update(model: string): void{
        const template = this.template(model)
        this.elemento.innerHTML = template ;
    }
}