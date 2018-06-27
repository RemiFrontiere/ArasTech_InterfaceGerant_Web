import { Injectable } from "@angular/core";
// import { Http, Headers } from '@angular/http'
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
// import { RequestOptions } from '@angular/http';
import { Media } from './media';
import { Groupe } from './groupe';
import { Quiz } from './quiz';
import { Balise } from './balise';
import { Question, Quizz, Reponse } from './question';


@Injectable()
export class Globals {

  private _isLogged:boolean = false;
  private _currentScreen:string = "app";
  private _etablissementName:string = "";
  private _modalIsDisplay:boolean = false;
  private _balises:Array<Balise>;
  private _groupes:Array<Groupe>;
  private _medias:Array<Media>;
  private _quizzs:Array<Quizz>;
  private _questions:Array<Question>;
  private _reponses:Array<Reponse>;

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
    this._quizzs = new Array<Quizz>();
    this._questions = new Array<Question>();
    this._reponses = new Array<Reponse>();
    this.apiGetBalise();
    this.apiGetQuestions();
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

  public apiGetBalise()
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
      // console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;

      for (let i of json) {
        let group: Groupe = null;
        let medias: Array<Media> = new Array<Media>();
        let quizs: Array<Quiz> = new Array<Quiz>();
        let beaconsGroup: Array<Balise> = new Array<Balise>();

        if(i["medias"]){
          for(let media of i['medias']){
            medias.push(new Media(media["id"],media["beacon_id"], media["label"], media["weight"], media["link"], media["mime_type"]));
            if(!this._medias.find(x => x.Id == media.Id)){
              this._medias.push(new Media(media["id"],media["beacon_id"], media["label"], media["weight"], media["link"], media["mime_type"]))
            }
          }
        }
        if(i["quizzs"]){
          for(let quiz of i['quizzs']){
            quizs.push(new Quiz(quiz["id"], quiz["title"], quiz["duration"], quiz["color"], quiz["difficulty"]));
          }
        }
        // if(i["group"]){
        //   group = new Groupe(i["group"]["id"], i["group"]["label"], beaconsGroup)
        // }
        let balise = new Balise(i["id"], i["code"], i["title"], i["subtitle"], i["description"],  i["group_id"] || null, medias || null);
        console.log(balise)

        this._balises.push(balise);
      }
    });
    // GROUPES
    this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups',requestOptions).subscribe(res => {
      // console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;
      for (let i of json) {
        this.Groupes.push(new Groupe(i["id"], i["label"]))
      }
    });
  }


  public apiPostBalise(balise:Balise)
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Post
    requestOptions.headers = this.headers;


    // console.log("SAVEDJSON:", JSON.stringify(balise,this.getCircularReplacer()))

    this.http.post('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons',
    JSON.stringify(balise, this.getCircularReplacer())
    ,requestOptions).subscribe(res => {
      // console.log("HTTPResult:",res);
      this.apiGetBalise();
    });
  }

  public apiDeleteBalise(balise:Balise)
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Delete
    requestOptions.headers = this.headers;
    this._balises.splice(this._balises.findIndex(x => x.Id == balise.Id), 1);

    this.http.delete('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons/'+balise.Id
    ,requestOptions).subscribe(res => {
      // console.log("HTTPResult:",res);
      // this.apiGetBalise()
    });
  }

  public apiGetGroupes()
  {
    let json;
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Get
    requestOptions.headers = this.headers;

    this.Groupes = new Array<Groupe>();

    // GROUPES
    this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups',requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;
      for (let i of json) {
        this.Groupes.push(new Groupe(i["id"], i["label"]))
      }
    });
  }

  public apiPutBalise(balise:Balise):void
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Put
    requestOptions.headers = this.headers;

    this.http.put('http://alexisboulet.craym.eu/aras-tech-api/web/api/beacons/'+balise.Id,
    JSON.stringify(balise, this.getCircularReplacer()),
    requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
    });
  }

  public apiPostGroupe(group:Groupe):void
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Post
    requestOptions.headers = this.headers;

    console.log("SAVEDJSON:", JSON.stringify(group,this.getCircularReplacer()))

    this.http.put('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups',
    JSON.stringify(group, this.getCircularReplacer()),
    requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
      this.apiGetGroupes();
    });
  }

  public apiDeleteGroupe(group:Groupe)
  {
    this._groupes.splice(this._groupes.findIndex(x => x.Id == group.Id), 1);

    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Delete
    requestOptions.headers = this.headers;

    this.http.delete('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups/'+group.Id
    ,requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
      this._groupes.splice(this._groupes.findIndex(x => x.Id == group.Id), 1);
    });
  }

  public apiPutGroupe(group:Groupe):void
  {
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Put
    requestOptions.headers = this.headers;

    this.http.put('http://alexisboulet.craym.eu/aras-tech-api/web/api/groups/'+group.Id,
    JSON.stringify(group, this.getCircularReplacer()),
    requestOptions).subscribe(res => {
      console.log("HTTPResult:",res);
    });
  }

  public apiGetQuestions()
  {
    let json;
    let requestOptions = new RequestOptions();
    requestOptions.method = RequestMethod.Get
    requestOptions.headers = this.headers;

    this._quizzs = new Array<Quizz>();
    this._questions = new Array<Question>();
    this._reponses = new Array<Reponse>();

    // QUESTIONNAIRE
    this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/questions',requestOptions).subscribe(res => {
      // console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;
      for (let i of json) {
        this._questions.push(new Question(i["id"], i["label"], i["quizz_id"]))
      }
      // console.log(questions)
    });

    // QUESTIONS
    this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/quizzs',requestOptions).subscribe(res => {
      // console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;
      for (let i of json) {
        this._quizzs.push(new Quizz(i["id"], i["title"], i["duration"], i["number_of_requested_good_answers"], i["color"], i["difficulty"], i["beacon_id"]))
      }
      // console.log(quizzs)
    });

    // "id":1,
    // "label":"1987 \/ 1988",
    // "is_right":false,
    // "question_id":1

    // REPONSES
    this.http.get('http://alexisboulet.craym.eu/aras-tech-api/web/api/answers',requestOptions).subscribe(res => {
       // console.log("HTTPResult:",res);
      json = res.json();
      this.jsonSav = json;
      for (let i of json) {
        this._reponses.push(new Reponse(i["id"], i["label"], i["is_right"], i["question_id"]))
      }
       console.log(this._reponses)
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

  get Quizzs():Array<Quizz>{
    return this._quizzs;
  }
  set Quizzs(value: Array<Quizz>){
    this._quizzs = value
  }

  get Questions():Array<Question>{
    return this._questions;
  }
  set Questions(value: Array<Question>){
    this._questions = value
  }

  get Reponses():Array<Reponse>{
    return this._reponses;
  }
  set Reponses(value: Array<Reponse>){
    this._reponses = value
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
