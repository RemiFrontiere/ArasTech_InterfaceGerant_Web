import { Media } from './media';
import { Groupe } from './groupe';
import { Quiz } from './quiz';


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
    private id : number,
    private code: string,
    private title : string,
    private subtitle : string,
    private description : string,
    private quizzs : Array<Quiz>,
    private group : Groupe,
    private medias : Array<Media>
  ){}

  get Id():number{
    return this.id;
  }

  get Code():string{
    return this.code;
  }

  get Titre():string{
    return this.title;
  }

  get SousTitre():string{
    return this.subtitle;
  }

  get Description():string{
    return this.description;
  }

  get Quizs():Array<Quiz>{
    return this.quizzs;
  }

  get Groupe():Groupe{
    return this.group;
  }

  get Medias():Array<Media>{
    return this.medias;
  }

  set Titre(value: string){
    this.title = value
  }

  set SousTitre(value: string){
    this.subtitle = value;
  }

  set Description(value: string){
    this.description = value;
  }

  set Quizs(value: Array<Quiz>){
    this.quizzs = value;
  }

  set Groupe(value:Groupe){
    this.group = value;
  }

  set Media(value:Array<Media>){
    this.medias = value;
  }



}
