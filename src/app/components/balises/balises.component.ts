import { Component, OnInit, OnDestroy } from '@angular/core';
import { Oeuvre } from '../../class/oeuvre';
import { BaliseComponent } from '../balise/balise.component';
import { Globals } from '../../class/globals';

@Component({
  selector: 'balises-component',
  templateUrl: './balises.component.html',
  styleUrls: ['./balises.component.scss']
})
export class BalisesComponent {

  public balises : Array<Oeuvre>;
  public oneModalIsOpen:Oeuvre = null;

  constructor(private globals: Globals) {
    this.balises = [];
    this.balises.push(new Oeuvre("bfez15dsf","Salle des statues","Supplice d'Andromède","Statue en grès, 1500 av. J.C. Artiste inconnu",
    "Dans la mythologie grecque, Poséidon, Dieu de la mer, jaloux que cette femme soit plus belle que ses filles, la fera attacher à un rocher pour qu’elle soit dévorée par un monstre marin. Elle sera sauvée par le héros grecque Persée.","MEDIA"));
    this.balises.push(new Oeuvre("fsd51fds5","Salle des statues","Thésée et le Minotaure","Statue en argile, 69 av. J.C. Epiphore","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","MEDIA"));
    this.balises.push(new Oeuvre("fds11fds2","Salle des peintures","Charme d'Era","Huile sur toile, 1715 Pascal Mongo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","MEDIA"));
  }

  ngOnInit(){
    this.globals.CurrentScreen = "balises";
  }

  ngOnDestroy(){
  }

  public openModifModal(oeuvre: Oeuvre):void{
    this.oneModalIsOpen = oeuvre;
    console.log(oeuvre + "OPEN")
  }

  public removeModal():void{
    document.body.classList.remove('modalIsDisplay');
    this.oneModalIsOpen = null;
  }
}
