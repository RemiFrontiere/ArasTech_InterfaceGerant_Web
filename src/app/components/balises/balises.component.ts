import { Component,Injectable, OnInit, OnDestroy } from '@angular/core';
import { Media } from '../../class/Media';
import { Groupe } from '../../class/Groupe';
import { Quiz } from '../../class/Quiz';
import { Balise } from '../../class/Balise';

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
    this.oneModalIsOpen = balise;
    this.modalVerifActived = false;
    console.log(balise)
  }

  public openAddModal():void{
    this.oneModalNewBaliseIsOpen = true;
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
      codeBalise.toString(),
      this.modalBaliseTitle || "",
      this.modalBaliseSousTitle || "",
      this.modalBaliseDescription || "",
      null,
      null,
      null
    )
    console.log(createdBalise)
    this.globals.apiPostBalise(createdBalise);
    this.removeModal();
  }

  public removeBalise():void{
    this.globals.apiDeleteBalise(this.oneModalIsOpen);
    this.removeModal();
  }
}
