import { Media } from './Media';
import { Groupe } from './Groupe';
import { Quiz } from './Quiz';


export class Balise{

//   "id": 1,
//   "code":"ABCDEFGH15AZERT",
//   "title":"Titre d'Balise",
//   "subtitle":"Sous-titre d'Balise",
//   "description":"C'est un beacon de test",
//   "quizzs":[
//       {
//           "id": 1,
//           "title":"Quizz difficile",
//           "duration":15,
//           "color":"red",
//           "difficulty":"hard"
//       }
//   ],
//   "group":
//   {
//       "id":1,
//       "label":"Salle des verts",
//       "beacons":[]
//   },
//   "medias":[
//       {
//           "id": 1,
//           "beacon_id": 1,
//           "label": "photo_beacon_1.mp4",
//           "weight": 43210,
//           "link": "https://link-to-the-video.com",
//           "mime_type": "video/mp4"
//       },
//       {
//           "id": 2,
//           "beacon_id": 1,
//           "label": "video_beacon_1.mp4",
//           "weight": 43210,
//           "link": "https://link-to-the-video.com",
//           "mime_type": "video/mp4"
//       }
//   ]
// }
// ],
// "quizzs":
// [
// {
//   "id": 1,
//   "title":"Quizz difficile",
//   "duration":15,
//   "number_of_good_answer_required": 2,
//   "color":"red",
//   "difficulty":"hard"
// },
// {
//   "id": 2,
//   "title":"Quizz facile",
//   "number_of_good_answer_required": 1,
//   "duration":5,
//   "color":"green",
//   "difficulty":"easy"
// }
  constructor(
    private _id : number,
    private _code: number,
    private _titre : string,
    private _sousTitre : string,
    private _description : string,
    private _quizs : Array<Quiz>,
    private _groupe : Groupe,
    private _medias : Array<Media>
  ){}

  get Id():number{
    return this._id;
  }

  get Code():number{
    return this._code;
  }

  get Titre():string{
    return this._titre;
  }

  get SousTitre():string{
    return this._sousTitre;
  }

  get Description():string{
    return this._description;
  }

  get Quizs():Array<Quiz>{
    return this._quizs;
  }

  get Groupe():Groupe{
    return this._groupe;
  }

  get Medias():Array<Media>{
    return this._medias;
  }

  set Titre(value: string){
    this._titre = value;
  }

  set SousTitre(value: string){
    this._sousTitre = value;
  }

  set Description(value: string){
    this._description = value;
  }

  set Quizs(value: Array<Quiz>){
    this._quizs = value;
  }

  set Groupe(value:Groupe){
    this._groupe = value;
  }

  set Media(value:Array<Media>){
    this._medias = value;
  }



}
