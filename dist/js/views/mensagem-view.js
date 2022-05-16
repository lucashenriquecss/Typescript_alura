import { View } from './view.js';
export class MensagemView extends View {
    template(model) {
        //unico metodo que sempre é uma string
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
