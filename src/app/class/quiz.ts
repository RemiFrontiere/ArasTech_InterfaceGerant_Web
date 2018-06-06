//           "id": 1,
//           "title":"Quizz difficile",
//           "duration":15,
//           "color":"red",
//           "difficulty":"hard"

export class Quiz{
  constructor(
    private _id : number,
    private _title : string,
    private _duration: number,
    private _color: string,
    private _diffiulty: string
  ){}

  get Id():number{
    return this._id;
  }
  get Title():string{
    return this._title;
  }
  set Title(value:string){
    this._title = value;
  }

  get Duration():number{
    return this._duration;
  }
  set Duration(value:number){
    this._duration = value;
  }

  get Color():string{
    return this._color;
  }
  set Color(value:string){
    this._color = value;
  }

  get Difficulty():string{
    return this._diffiulty;
  }
  set Difficulty(value:string){
    this._diffiulty = value;
  }
}
