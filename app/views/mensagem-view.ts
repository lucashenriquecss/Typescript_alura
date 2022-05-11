import { List } from '../models/lista-negociacao.js';
import { View } from './view.js';

export class MensagemView extends View<string>{
  

    template(model: string): string{
        //unico metodo que sempre é uma string
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
  
}