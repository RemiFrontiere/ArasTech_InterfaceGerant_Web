import { Balise } from './balise';

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
  // get Balises()
  //   return this._balises;
  // }
  // set Balises(value:Array<Balise>){
  //   this._balises = value;
  // }
}
