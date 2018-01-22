import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

  private _isLogged:boolean = false;
  private _currentScreen:string = "app";

  constructor(){

  }


  get isLogged(){
    return this._isLogged;
  }
  set isLogged(value: boolean){
    this._isLogged = value
  }

  get CurrentScreen(){
    return this._currentScreen;
  }
  set CurrentScreen(value: string){
    this._currentScreen = value
  }
}
