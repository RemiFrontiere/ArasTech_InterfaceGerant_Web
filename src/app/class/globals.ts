import { Injectable } from "@angular/core";
// import { Http, Headers } from '@angular/http'
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
// import { RequestOptions } from '@angular/http';
import { Media } from './media';
import { Groupe } from './groupe';
import { Quiz } from './quiz';
import { Balise } from './balise';


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

  public headers = new Headers(
        {
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          'Access-Control-Allow-Credentials':'true',
          'Access-Control-Allow-Methods':'OPTIONS,GET,PUT,POST,DELETE'
        }
    );
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
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Get
    requestOptions.headers = this.headers;

    this._balises = new Array<Balise>();
    this._groupes = new Array<Groupe>();
    this._medias = new Array<Media>();

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
        if(i["group"]){
          group = new Groupe(i["group"]["id"], i["group"]["label"], beaconsGroup)
        }

        let balise = new Balise(i["id"], i["code"], i["title"], i["subtitle"], i["description"],
        quizs, group, medias);
        this._balises.push(balise);

        if(i["group"]){
          group.addBalise(balise);
          if(!this._groupes.find(x => x.Id == group.Id)){
            this._groupes.push(group);
          }
        }


      }
    });
  }


  public apiPostBalise(balise:Balise)
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Post
    requestOptions.headers = this.headers;

    console.log("SAVEDJSON:", JSON.stringify(balise,this.getCircularReplacer()))

    this.http.post('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons',
    JSON.stringify(balise, this.getCircularReplacer())
    ,requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
      this.getJson()
    });
  }

  public apiDeleteBalise(balise:Balise)
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Delete
    requestOptions.headers = this.headers;

    this.http.delete('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons/'+balise.Id
    ,requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
      this.getJson()
    });
  }

  public getCircularReplacer = () => {
    const seen = new WeakSet;
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

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
