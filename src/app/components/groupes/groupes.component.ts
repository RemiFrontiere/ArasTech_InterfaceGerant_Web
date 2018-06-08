import { Component, Injectable, OnChanges } from '@angular/core';
import { GroupeComponent } from '../groupe/groupe.component';
import { Globals } from '../../class/globals';
import { Groupe } from '../../class/groupe';
import { Balise } from '../../class/balise';

@Component({
  selector: 'groupes-component',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss']
})

export class GroupesComponent implements OnChanges{
  // public groupes :Array<Groupe>;
  public oneModalIsOpen:Groupe = null;
  public oneModalNewGroupeIsOpen:boolean = false;

  public balisesForModifModal:Array<Balise>;
  public allGroup:Array<Groupe>;
  public modalGroupNom:string = null;

  constructor(public globals: Globals) {
    this.allGroup = new Array<Groupe>();
    this.allGroup = globals.Groupes;
  }

  public openModifModal(Balise: Groupe):void{
    this.balisesForModifModal = new Array<Balise>();
    if(Balise){
      for(let i = 0; i < this.globals.Balises.length; i++){
        if(this.globals.Balises[i].GroupeId == Balise.Id){
          this.balisesForModifModal.push(this.globals.Balises[i])
        }
      }
    }
    this.modalGroupNom = Balise.Name;
    this.oneModalIsOpen = Balise;
    console.log(Balise + "OPEN")
  }

  public openAddModal():void{
    this.oneModalNewGroupeIsOpen = true;
  }

  public removeModal():void{
    document.body.classList.remove('modalIsDisplay');
    this.oneModalIsOpen = null;
    this.oneModalNewGroupeIsOpen = false;
    // this.modalVerifActived = false;
  }

  ngOnChanges() {
    this.allGroup = new Array<Groupe>();
    this.allGroup = this.globals.Groupes;
  }




  public getOthersBalises():Array<Balise>{
    let aRetourner:Array<Balise> = new Array<Balise>();

    for(let i = 0; i < this.globals.Balises.length; i++){
      if(this.balisesForModifModal.find(x => x.Id == this.globals.Balises[i].Id)){

      }
      else{
        aRetourner.push(this.globals.Balises[i])
      }
    }

    return aRetourner;
  }
  public removeOneBaliseFromGroup(balise:Balise):void{
    this.balisesForModifModal.splice(this.balisesForModifModal.findIndex(x => x.Id == balise.Id),1);
  }
  public addOneBaliseToGroup(balise:Balise):void{
    if(balise && !this.balisesForModifModal.find(x => x.Id == balise.Id)){
      this.balisesForModifModal.push(balise);
    }
  }

  public saveModification():void{

    for(let i = 0; i < this.globals.Balises.length; i++){
      if(this.globals.Balises[i].GroupeId == this.oneModalIsOpen.Id){
        this.globals.Balises[i].GroupeId = null;
      }
    }

    for(let i = 0; i < this.balisesForModifModal.length; i++){
      this.globals.Balises.find(x => x.Id == this.balisesForModifModal[i].Id).GroupeId = this.oneModalIsOpen.Id;
      this.globals.apiPutBalise(this.globals.Balises.find(x => x.Id == this.balisesForModifModal[i].Id))
    }

    if(this.oneModalIsOpen.Name != this.modalGroupNom){
      this.oneModalIsOpen.Name = this.modalGroupNom;
      this.globals.apiPutGroupe(this.oneModalIsOpen);
    }

    this.ngOnChanges();
    this.removeModal();
  }

  public createGroupe():void{
    this.globals.apiPostGroupe(new Groupe(1,this.modalGroupNom));
    this.removeModal();
  }


}
