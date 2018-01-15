import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 @Output() isLogged: EventEmitter<boolean> = new EventEmitter();

  connection(loginId:string, password:string){
    console.log("LOGIN",loginId)
    if(loginId == 'test' && password == 'test'){
      this.isLogged.emit(true);
    }
  }
}
