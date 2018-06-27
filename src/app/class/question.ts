// "id":1,
//    "label":"En quelle ann\u00e9e l'oeuvre a-t-elle \u00e9t\u00e9 r\u00e9alis\u00e9e ?",
//    "quizz_id":1


export class Question{
  constructor(
    private id : number,
    private label : string,
    private quizzId : number
  ){}

  get Id(){
    return this.id;
  }
  get Label(){
    return this.label;
  }
  set Label(value:string){
    this.label = value;
  }

  get QuizzId(){
    return this.quizzId;
  }
  set QuizzId(value:number){
    this.quizzId = value;
  }
}


// "id":1,
// "label":"1987 \/ 1988",
// "is_right":false,
// "question_id":1

export class Reponse{
  constructor(
    private id : number,
    private label : string,
    private isRight : boolean,
    private questionId : number
  ){}

  get Id(){
    return this.id;
  }
  get Label(){
    return this.label;
  }
  set Label(value:string){
    this.label = value;
  }

  get IsRight(){
    return this.isRight;
  }
  set IsRight(value:boolean){
    this.isRight = value;
  }

  get QuestionId(){
    return this.questionId;
  }
  set QuestionId(value:number){
    this.questionId = value;
  }
}


// "id":2,
//  "title":"quizz sur les expositions",
//  "duration":55,
//  "number_of_requested_good_answers":78,
//  "color":"green",
//  "difficulty":"easy",
//  "beacon_id":1
export class Quizz{
  constructor(
    private id : number,
    private title : string,
    private duration : number,
    private number_of_requested_good_answers: number,
    private color : string,
    private difficulty : string,
    private beaconId : number
  ){}

  get Id(){
    return this.id;
  }
  get Title(){
    return this.title;
  }
  set Title(value:string){
    this.title = value;
  }

  get Duration(){
    return this.duration;
  }
  set Duration(value:number){
    this.duration = value;
  }

  get numberOfRequestedGoodAnswers(){
    return this.number_of_requested_good_answers;
  }
  set numberOfRequestedGoodAnswers(value:number){
    this.number_of_requested_good_answers = value;
  }

  get Color(){
    return this.color;
  }
  set Color(value:string){
    this.color = value;
  }

  get Difficulty(){
    return this.difficulty;
  }
  set Difficulty(value:string){
    this.difficulty = value;
  }

  get BeaconId(){
    return this.beaconId;
  }
  set BeaconId(value:number){
    this.beaconId = value;
  }
}
