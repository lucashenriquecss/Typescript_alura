import { List } from "../models/lista-negociacao.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.list = new List();
        this.negociacaoView = new NegociacaoView('#negociacaoView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.list);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.list.adicionar(negociacao);
        this.negociacaoView.update(this.list);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        this.limparFormulario();
    }
    criarNegociacao() {
        const exp = /-/g; //expressão regular
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
