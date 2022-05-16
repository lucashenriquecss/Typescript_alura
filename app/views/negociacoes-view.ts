import { List } from '../models/lista-negociacao.js';
import { View } from './view.js';

export class NegociacaoView extends View<List>{
  

    protected template(model: List): string{
        //unico metodo que sempre é uma string
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listar().map(negociacao => {
                        return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;

                    }).join('')};
                </tbody>
            </table> 
        `;
    }

    public formatar(data:Date): string {
        return new Intl.DateTimeFormat().format(data);
    }

    update(model: List): void{
        const template = this.template(model)
        this.elemento.innerHTML = template ;
    }
}