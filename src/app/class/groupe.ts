import { Balise } from './balise';

//   "group":
//   {
//       "id":1,
//       "label":"Salle des verts",
//       "beacons":[]
//   },

export class Groupe{
  constructor(
    private _id : number,
    private _name : string,
    public _balises : Array<Balise>
  ){}

  get Id(){
    return this._id;
  }
  get Name(){
    return this._name;
  }
  set Name(value:string){
    this._name = value;
  }
  get Balises():Array<Balise>{
    return this._balises;
  }
  set Balises(value:Array<Balise>){
    this._balises = value;
  }

  public addBalise(value:Balise):void{
    if(value != null){
      this._balises.push(value);
    }
  }
}
