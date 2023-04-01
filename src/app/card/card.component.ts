import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() personagem!: Personagem;
}

export interface Personagem {
  nome: String;
  imagem: String;
  nomeAtor: String;
  descricao: String;
}
