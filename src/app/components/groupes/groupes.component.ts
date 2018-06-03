import { Component, Injectable } from '@angular/core';
import { GroupeComponent } from '../groupe/groupe.component';
import { Globals } from '../../class/globals';
import { Groupe } from '../../class/Groupe';
import { Balise } from '../../class/balise';

@Component({
  selector: 'groupes-component',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss']
})

export class GroupesComponent {
  // public groupes :Array<Groupe>;
  public oneModalIsOpen:Groupe = null;

  constructor(public globals: Globals) {
  }

  public openModifModal(Balise: Groupe):void{
    this.oneModalIsOpen = Balise;
    console.log(Balise + "OPEN")
  }

  public removeModal():void{
    document.body.classList.remove('modalIsDisplay');
    this.oneModalIsOpen = null;
  }


}
