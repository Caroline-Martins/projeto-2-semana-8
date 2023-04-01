import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  personagem: any = {
    nome: 'Miguel Garza',
    imagem:'../../assets/miguel.jpg',
    nomeAtor: 'Sebastian Rulli',
    descricao:
      'Miguel Garza volta de Tóquio ao México para assumir o posto do avô no comando de um cartel. '+ 
      'Agora terá de disputar o controle dos negócios com dois rivais'
  };
}