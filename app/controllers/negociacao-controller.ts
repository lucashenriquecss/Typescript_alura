import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { List } from "../models/lista-negociacao.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private list = new List();
    private negociacaoView = new NegociacaoView('#negociacaoView',true );
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO=6;
    private readonly DOMINGO=0;

    constructor(){
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacaoView.update(this.list);
    }
   public adicionar() : void{
        
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
       if(!this.diaUtil(negociacao.data)){
           this.mensagemView.update('Apenas negociações em dias úteis.');
           return ;
       }

        this.list.adicionar(negociacao);      
        this.limparFormulario();
        this.atualizaView();
        
    }
    private diaUtil(data:Date){
        return data.getDay()> DiaDaSemana.DOMINGO  && data.getDay() < DiaDaSemana.SABADO;
    }
 

    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacaoView.update(this.list);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}