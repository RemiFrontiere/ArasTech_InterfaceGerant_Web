import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Groupe } from '../../class/Groupe';
import { Globals } from '../../class/globals';

@Component({
  selector: 'groupe-component',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent {
  @Input() groupe: Groupe;
  @Output() openModal: EventEmitter<any> = new EventEmitter();

  constructor(private globals: Globals) {

  }

  public openModifModal():void{
    this.openModal.emit(this.groupe);
    this.globals.modalIsDisplay = true;
    document.body.classList.add('modalIsDisplay');
  }

}
