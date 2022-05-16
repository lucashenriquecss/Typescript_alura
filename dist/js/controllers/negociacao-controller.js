import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { List } from "../models/lista-negociacao.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.list = new List();
        this.negociacaoView = new NegociacaoView('#negociacaoView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.list);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis.');
            return;
        }
        this.list.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    diaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
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
    atualizaView() {
        this.negociacaoView.update(this.list);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
