import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Globals } from '../../class/globals';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ Globals ]
})
export class LoginComponent {
 @Output() isLogged: EventEmitter<boolean> = new EventEmitter();

 constructor(private globals: Globals){

 }
  connection(loginId:string, password:string){
    if(loginId == 'test' && password == 'test'){
      this.isLogged.emit(true);
    }
  }

  ngOnInit(){
    console.log("INITLOGIN:", this.globals.isLogged);
    //this.isLogged = false;
  }

}
