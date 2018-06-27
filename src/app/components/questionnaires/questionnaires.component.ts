import { Component, OnChanges } from '@angular/core';
import { Globals } from '../../class/globals';
import { Question, Reponse, Quizz } from '../../class/question';

@Component({
  selector: 'questionnaires-component',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent implements OnChanges {


  constructor(public globals: Globals){
  }

  ngOnInit(){
    this.globals.CurrentScreen = "questionnaires";
  }

  ngOnChanges(){
    if(this.globals.Quizzs){

    }
  }

  public getQuestionsFor(quizz:Quizz):Array<Question>{
    let questions:Array<Question> = new Array<Question>();
    for(let i =0; i < this.globals.Questions.length; i ++){
      if(this.globals.Questions[i].QuizzId == quizz.Id){
        questions.push(this.globals.Questions[i])
      }
    }
    return questions;
  }

  handleFileInput(files: FileList) {
    // this.globals.EtablissementLogo = files.item(0);
}
}
