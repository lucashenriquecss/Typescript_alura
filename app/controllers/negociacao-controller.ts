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
    private negociacaoView = new NegociacaoView('#negociacaoView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO=6;
    private readonly DOMINGO=0;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.list);
    }
   public adicionar() : void{
        const negociacao = this.criarNegociacao();
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
    private criarNegociacao(): Negociacao{
        const exp = /-/g; //expressão regular
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date,quantidade,valor);
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