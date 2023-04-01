import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-2-semana-8';

  personagem = {
    nome: 'Miguel Garza',
    imagem:'../../assets/miguel.jpg',
    nomeAtor: 'Sebastian Rulli',
    descricao:
      'Miguel Garza volta de Tóquio ao México para assumir o posto do avô no comando de um cartel. '+ 
      'Agora terá de disputar o controle dos negócios com dois rivais'
  };
  
}


