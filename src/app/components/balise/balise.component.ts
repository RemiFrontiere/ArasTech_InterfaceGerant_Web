import { Component, Input } from '@angular/core';
import { Oeuvre } from '../../class/oeuvre';

@Component({
  selector: 'balise-component',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.scss']
})
export class BaliseComponent {
  @Input() oeuvre: Oeuvre;

  constructor(){
    
  }

}
