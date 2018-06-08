import { Component,Injectable, OnInit, OnDestroy } from '@angular/core';
import { Media } from '../../class/media';
import { Groupe } from '../../class/groupe';
import { Quiz } from '../../class/quiz';
import { Balise } from '../../class/balise';

import { BaliseComponent } from '../balise/balise.component';
import { Globals } from '../../class/globals';

@Component({
  selector: 'balises-component',
  templateUrl: './balises.component.html',
  styleUrls: ['./balises.component.scss']
})

@Injectable()
export class BalisesComponent {

  public oneModalIsOpen:Balise = null;
  public oneModalNewBaliseIsOpen:boolean = false;

  public modalVerifActived:boolean = false;


  public modalBaliseTitle:string = null;
  public modalBaliseCode:string = null;
  public modalBaliseSousTitle:string = null;
  public modalBaliseDescription:string = null;
  public modalBaliseGroupe:Groupe = null;

  constructor(public globals: Globals) {
  }

  ngOnInit(){
    this.globals.CurrentScreen = "balises";
  }

  ngOnDestroy(){
  }

  public openModifModal(balise: Balise):void{
    // this.modalBaliseTitle = balise.Titre;
    // this.modalBaliseSousTitle = balise.SousTitre;
    // this.modalBaliseDescription = balise.Description;
    this.modalBaliseGroupe = this.globals.Groupes.find(x => x.Id == balise.GroupeId);
    this.oneModalIsOpen = balise;
    this.modalVerifActived = false;
  }

  public openAddModal():void{
    this.oneModalNewBaliseIsOpen = true;
    this.modalBaliseGroupe = this.globals.Groupes[0]
  }

  public removeModal():void{
    document.body.classList.remove('modalIsDisplay');
    this.oneModalIsOpen = null;
    this.oneModalNewBaliseIsOpen = false;
    this.modalVerifActived = false;
  }


  public createBalise():void{
    let codeBalise:string = "";
    let num0:number;
    for(let i=0; i < 15; i++){
      num0 = Math.floor(Math.random() * 9)
      codeBalise += num0.toString()
    }

    let createdBalise: Balise = new Balise(
      this.globals.Balises[this.globals.Balises.length-1].Id + 1,
      this.modalBaliseCode,
      this.modalBaliseTitle || "",
      this.modalBaliseSousTitle || "",
      this.modalBaliseDescription || "",
      this.modalBaliseGroupe.Id,
      null
    )
    console.log(createdBalise)
    this.globals.apiPostBalise(createdBalise);
    this.removeModal();
  }

  public saveModificationForBalise():void{

    this.globals.apiPutBalise(this.oneModalIsOpen);
    this.removeModal();
  }

  public removeBalise():void{
    this.globals.apiDeleteBalise(this.oneModalIsOpen);
    this.removeModal();
  }

  public onModalGroupChange(group:Groupe):void{
    this.modalBaliseGroupe = group
    this.oneModalIsOpen.GroupeId = group.Id
  }
}
