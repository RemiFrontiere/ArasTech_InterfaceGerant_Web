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
    this.balises.push(new Oeuvre("ID","NOM","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","rgedg","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","NzrerOM","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","NOfdM","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","NOfdsfsdM","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","fsdv","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","rzrz","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","bvc","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
    this.balises.push(new Oeuvre("ID","re","GROUPE","TITRE","SOUS-TITRE","DESCRIPTION","MEDIA"));
 }
}
