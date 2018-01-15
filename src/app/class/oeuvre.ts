export class Oeuvre{
  constructor(
    private _id : string,
    private _nom : string,
    private _groupe : string,
    private _titre : string,
    private _sousTitre : string,
    private _description : string,
    private _media : string
  ){}

  get Id(){
    return this._id;
  }

  get Nom(){
    return this._nom;
  }

  get Groupe(){
    return this._groupe;
  }

  get Titre(){
    return this._titre;
  }

  get SousTitre(){
    return this._sousTitre;
  }

  get Description(){
    return this._description;
  }

  get Media(){
    return this._media;
  }

  set Nom(value: string){
    this._nom = value;
  }

  set Groupe(value: string){
    this._groupe = value;
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

  set Media(value: string){
    this._media = value;
  }

}
