export  abstract class View<T>{ //T = definindo o tipo, quem vai definir sao as filhas

    protected elemento: HTMLElement; // só View tem acesso, mas as classes filhas da herança podem 'tocar'
    private escapar = false;

    constructor(selector?:string, escapar?: boolean){

        const elemento = document.querySelector(selector);
        
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error(`Seletor ${selector} não existe no DOM. Verifique desenvolvedor!!!`)
        }
        
        if (escapar){
            this.escapar = escapar;
        }
    }
    
    protected abstract template(model: T): string;
    
    public update(model: T): void{
        let template = this.template(model);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<script><\/script>/, '')
        }
        this.elemento.innerHTML = template ;
    }
}