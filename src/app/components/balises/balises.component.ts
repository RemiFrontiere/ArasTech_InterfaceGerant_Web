import { Component } from '@angular/core';
import { Oeuvre } from '../../class/oeuvre';
import { BaliseComponent } from '../balise/balise.component';

@Component({
  selector: 'balises-component',
  templateUrl: './balises.component.html',
  styleUrls: ['./balises.component.scss']
})
export class BalisesComponent {

  public balises : Array<Oeuvre>;

  constructor() {
    this.balises = [];
    this.balises.push(new Oeuvre("bfez15dsf","Salle des statues","Supplice d'Andromède","Statue en grès, 1500 av. J.C. Artiste inconnu","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("fsd51fds5","Salle des statues","Thésée et le Minotaure","Statue en argile, 69 av. J.C. Epiphore","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("fds11fds2","Salle des peintures","Charme d'Era","Huile sur toile, 1715 Pascal Mongo","DESCRIPTION","MEDIA"));
  }
}
