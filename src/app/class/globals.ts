import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

  private _isLogged:boolean = false;

  constructor(){

  }


  get isLogged(){
    return this._isLogged;
  }
  set isLogged(value: boolean){
    this._isLogged = value
  }
}
