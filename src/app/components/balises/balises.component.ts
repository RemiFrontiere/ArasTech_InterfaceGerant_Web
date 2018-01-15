import { Component } from '@angular/core';

import { BaliseComponent } from '../balise/balise.component';

@Component({
  selector: 'balises-component',
  templateUrl: './balises.component.html',
  styleUrls: ['./balises.component.scss']
})
export class BalisesComponent {

  public balises : Array<number>;

  constructor() {
    this.balises = [1,2,2,5,4,4];
 }
}
