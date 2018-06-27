import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Groupe } from '../../class/groupe';
import { Globals } from '../../class/globals';
import { Balise } from '../../class/balise';

@Component({
  selector: 'groupe-component',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnChanges{
  @Input() groupe: Groupe;
  @Output() openModal: EventEmitter<any> = new EventEmitter();
  public groupBalises:Array<Balise> = new Array<Balise>();

  constructor(private globals: Globals) {
    if(this.groupe){
      this.groupBalises = new Array<Balise>();
      for(let i = 0; i < this.globals.Balises.length; i++){
        if(this.globals.Balises[i].GroupeId == this.groupe.Id){
          this.groupBalises.push(this.globals.Balises[i])
        }
      }
    }
  }

  ngOnChanges() {
    if(this.groupe){
      this.groupBalises = new Array<Balise>();
      for(let i = 0; i < this.globals.Balises.length; i++){
        if(this.globals.Balises[i].GroupeId == this.groupe.Id){
          this.groupBalises.push(this.globals.Balises[i])
        }
      }
    }
  }

  public openModifModal():void{
    this.openModal.emit(this.groupe);
    this.globals.modalIsDisplay = true;
    document.body.classList.add('modalIsDisplay');
  }

  public deleteModal():void{
    this.globals.apiDeleteGroupe(this.groupe);
  }

}
