import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

  private _isLogged:boolean = true;
  private _currentScreen:string = "app";
  private _etablissementName:string = "";
  private _modalIsDisplay:boolean = false;
  // private _etablissementLogo:file = "";

  constructor(){

  }


  get isLogged(){
    return this._isLogged;
  }
  set modalIsDisplay(value: boolean){
    this._modalIsDisplay = value
  }
  get modalIsDisplay(){
    console.log("get")
    return this._modalIsDisplay;
  }
  set isLogged(value: boolean){
    console.log("set")
    this._isLogged = value
  }

  get CurrentScreen(){
    return this._currentScreen;
  }
  set CurrentScreen(value: string){
    this._currentScreen = value
  }

  get EtablissementName(){
    return this._etablissementName;
  }
  set EtablissementName(value: string){
    this._etablissementName = value
  }

  // get EtablissementLogo(){
  //   return this._etablissementLogo;
  // }
  // set EtablissementLogo(value: file){
  //   this._etablissementLogo = value
  // }
}
