export  abstract class View<T>{ //T = definindo o tipo, quem vai definir sao as filhas

    protected elemento: HTMLElement; // só View tem acesso, mas as classes filhas da herança podem 'tocar'

    constructor(selector:string){
        this.elemento = document.querySelector(selector)
    }
    
    protected abstract template(model: T): string;
    
    public update(model: T): void{
        const template = this.template(model)
        this.elemento.innerHTML = template ;
    }
}