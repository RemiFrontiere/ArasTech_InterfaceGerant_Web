import { Component, OnChanges, OnInit } from '@angular/core';
import { Globals } from '../../class/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private globals: Globals){
    console.log("IVI");
  }

  ngOnInit(){
  }

  connect(isLogged:boolean){
    console.log("LogAvantGLOBAL:", this.globals.isLogged);
    this.globals.isLogged = isLogged;
    console.log("LogAprèsGLOBAL:",this.globals.isLogged);
  }

  ngOnChanges(){
  console.log("CHANGE:", this.globals.isLogged);
  }
}
