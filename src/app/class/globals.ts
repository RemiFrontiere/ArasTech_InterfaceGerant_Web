import { Injectable } from "@angular/core";
// import { Http, Headers } from '@angular/http'
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
// import { RequestOptions } from '@angular/http';
import { Media } from './Media';
import { Groupe } from './Groupe';
import { Quiz } from './Quiz';
import { Balise } from './Balise';


@Injectable()
export class Globals {

  private _isLogged:boolean = true;
  private _currentScreen:string = "app";
  private _etablissementName:string = "";
  private _modalIsDisplay:boolean = false;
  private _balises:Array<Balise>;
  private _groupes:Array<Groupe>;
  private _medias:Array<Media>;

  public jsonSav = null;
  // private _etablissementLogo:file = "";

  constructor(private http:Http){
    this._balises = new Array<Balise>();
    this._groupes = new Array<Groupe>();
    this._medias = new Array<Media>();
    this.getJson();
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

  public getJson()
  {
    let json;
    let headers = new Headers({ 'Access-Control-Allow-Origin':'*','Content-Type': 'application/json' });
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Get
    // requestOptions.headers = headers;

    // this.http.get('assets/json/all.json').subscribe(res => {
    this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons',requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;

      for (let i of json) {
        let group: Groupe = null;
        let medias: Array<Media> = new Array<Media>();
        let quizs: Array<Quiz> = new Array<Quiz>();
        let beaconsGroup: Array<Balise> = new Array<Balise>();

        for(let media of i['medias']){
          medias.push(new Media(media["id"],media["beacon_id"], media["label"], media["weight"], media["link"], media["mime_type"]));
          if(!this._medias.find(x => x.Id == media.Id)){
            this._medias.push(new Media(media["id"],media["beacon_id"], media["label"], media["weight"], media["link"], media["mime_type"]))
          }
        }
        for(let quiz of i['quizzs']){
          quizs.push(new Quiz(quiz["id"], quiz["title"], quiz["duration"], quiz["color"], quiz["difficulty"]));
        }
        group = new Groupe(i["group"]["id"], i["group"]["label"], beaconsGroup)

        let balise = new Balise(i["id"], i["code"], i["title"], i["subtitle"], i["description"],
        quizs, group, medias);
        this._balises.push(balise);

        group.addBalise(balise);
        if(!this._groupes.find(x => x.Id == group.Id)){
          this._groupes.push(group);
        }
      }
    });
  }

  public apiPostBalise(balise:Balise)
  {
    let json;

    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Post

    this.http.post('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons',
    this.jsonSav
    ,requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
    });
  }

  get Balises():Array<Balise>{
    return this._balises;
  }
  set Balises(value: Array<Balise>){
    this._balises = value
  }

  get Groupes():Array<Groupe>{
    return this._groupes;
  }
  set Groupes(value: Array<Groupe>){
    this._groupes = value
  }

  get Medias():Array<Media>{
    return this._medias;
  }
  set Medias(value: Array<Media>){
    this._medias = value
  }
}
