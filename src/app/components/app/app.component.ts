import { Component, OnChanges, OnInit } from '@angular/core';
import { Globals } from '../../class/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private globals: Globals){
  }

  ngOnInit(){
  }

  connect(isLogged:boolean){
    // console.log("LogAvantGLOBAL:", this.globals.isLogged);
    this.globals.isLogged = isLogged;
    // console.log("LogAprèsGLOBAL:",this.globals.isLogged);
  }

  ngOnChanges(){
  }

  changeToolbarCurrentColor(value:string){
    this.globals.CurrentScreen = "app";

    switch(value) {
      case 'app':
        this.globals.CurrentScreen = value;
        break;
      case 'balises':
        this.globals.CurrentScreen = value;
        break;
      case 'groupes':
        this.globals.CurrentScreen = value;
        break;
      case 'etablissement':
        this.globals.CurrentScreen = value;
        break;
  }
}
}
