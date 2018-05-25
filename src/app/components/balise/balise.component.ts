import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Oeuvre } from '../../class/oeuvre';
import { Globals } from '../../class/globals';

@Component({
  selector: 'balise-component',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.scss']
})
export class BaliseComponent {
  @Input() oeuvre: Oeuvre;
  @Output() openModal: EventEmitter<any> = new EventEmitter();

  constructor(private globals: Globals){

  }

  public openModifModal():void{
    this.openModal.emit(this.oeuvre);
    this.globals.modalIsDisplay = true;
    document.body.classList.add('modalIsDisplay');
  }

}
