import { Component } from '@angular/core';

//importando dados
import { dados } from './arquivo';

//Criando component
@Component({
  selector: 'app-root',
  //apontando para o template html
  templateUrl: './app.component.html',
})

//Exportando dados
export class AppComponent {
  dados = dados;
}
