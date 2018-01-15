import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLogged : boolean = false;

  connect(isLogged:boolean){
    this.isLogged = isLogged;
  }
}
