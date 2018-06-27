import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Question, Reponse } from '../../class/question';
import { Globals } from '../../class/globals';

@Component({
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges{
  @Input() question: Question;

  public reponses:Array<Reponse>;
  // @Output() openModal: EventEmitter<any> = new EventEmitter();
  // public groupBalises:Array<Balise> = new Array<Balise>();

  constructor(private globals: Globals) {
    this.reponses = new Array<Reponse>();
    // if(this.groupe){
    //   this.groupBalises = new Array<Balise>();
    //   for(let i = 0; i < this.globals.Balises.length; i++){
    //     if(this.globals.Balises[i].GroupeId == this.groupe.Id){
    //       this.groupBalises.push(this.globals.Balises[i])
    //     }
    //   }
    // }
  }

  ngOnChanges() {
    // console.log(this.globals.Reponses)
    if(this.question && this.globals.Reponses){
      for(let i=0; i < this.globals.Reponses.length; i++){
        if(this.globals.Reponses[i].QuestionId == this.question.Id){
          this.reponses.push(this.globals.Reponses[i])
        }
      }
    }
  }

  // public openModifModal():void{
  //   this.openModal.emit(this.groupe);
  //   this.globals.modalIsDisplay = true;
  //   document.body.classList.add('modalIsDisplay');
  // }
  //
  // public deleteModal():void{
  //   this.globals.apiDeleteGroupe(this.groupe);
  // }

}
