import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Balise } from '../../class/balise';
import { Globals } from '../../class/globals';

@Component({
  selector: 'balise-component',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.scss']
})
export class BaliseComponent {
  @Input() balise: Balise;
  @Output() openModal: EventEmitter<any> = new EventEmitter();

  constructor(private globals: Globals){

  }

  public openModifModal():void{
    this.openModal.emit(this.balise);
    this.globals.modalIsDisplay = true;
    document.body.classList.add('modalIsDisplay');
  }

  public showGroupeName():string{
    if(this.balise.Groupe){
      return this.balise.Groupe.Name
    }
    else{
      return 'Aucun'
    }
  }

}
