//   "group":
//   {
//       "id":1,
//       "label":"Salle des verts",
//       "beacons":[]
//   },

export class Groupe{
  constructor(
    private id : number,
    private label : string
  ){}

  get Id(){
    return this.id;
  }
  get Name(){
    return this.label;
  }
  set Name(value:string){
    this.label = value;
  }
  //
  // public addBalise(value:Balise):void{
  //   if(value != null){
  //     this._balises.push(value);
  //   }
  // }
}
