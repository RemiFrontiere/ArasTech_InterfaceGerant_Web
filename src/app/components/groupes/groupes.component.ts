import { Component } from '@angular/core';
import { GroupeComponent } from '../groupe/groupe.component';
import { Globals } from '../../class/globals';
import { Groupe } from '../../class/groupe';
import { Balise } from '../../class/balise';


@Component({
  selector: 'groupes-component',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss']
})
export class GroupesComponent {
  public groupes :Array<Groupe>;
  public oneModalIsOpen:Groupe = null;

  constructor(private globals: Globals) {
    this.groupes = new Array<Groupe>();
    this.groupes.push(new Groupe(1,"Chambre",[new Balise(1),new Balise(2),new Balise(3)]))
    this.groupes.push(new Groupe(2,"Cuisine",[new Balise(3)]))
    this.groupes.push(new Groupe(3,"Salon",[new Balise(1),new Balise(2),new Balise(3),new Balise(1),new Balise(2),new Balise(3)]))
  }

  public openModifModal(oeuvre: Groupe):void{
    this.oneModalIsOpen = oeuvre;
    console.log(oeuvre + "OPEN")
  }

  public removeModal():void{
    document.body.classList.remove('modalIsDisplay');
    this.oneModalIsOpen = null;
  }
}
