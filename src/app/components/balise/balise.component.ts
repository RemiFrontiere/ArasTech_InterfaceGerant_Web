import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Balise } from '../../class/balise';
import { Globals } from '../../class/globals';
import { Media } from '../../class/media';

@Component({
  selector: 'balise-component',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.scss']
})
export class BaliseComponent implements OnChanges{
  @Input() balise: Balise;
  @Output() openModal: EventEmitter<any> = new EventEmitter();

  public currentMedia:Media = null;

  constructor(private globals: Globals){
    if(this.balise && this.balise.Medias){
      this.currentMedia = this.balise.Medias[0];
    }
    console.log(this.currentMedia)
  }

  ngOnChanges():void{
    if(this.balise && this.balise.Medias && this.balise.Medias.length > 0){
      this.currentMedia = this.balise.Medias[0];
      console.log(this.currentMedia.Link)
    }
  }

  public openModifModal():void{
    this.openModal.emit(this.balise);
    this.globals.modalIsDisplay = true;
    document.body.classList.add('modalIsDisplay');
  }

  public showGroupeName():string{
    if(this.balise){
      if(this.globals.Groupes.find(x => x.Id == this.balise.GroupeId)){
        return this.globals.Groupes.find(x => x.Id == this.balise.GroupeId).Name
      }
      else{
        return 'Aucun'
      }
    }
  }

}
