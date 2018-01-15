import { Component, Input } from '@angular/core';

@Component({
  selector: 'balise-component',
  templateUrl: './balise.component.html',
  styleUrls: ['./balise.component.scss']
})
export class BaliseComponent {
  @Input() balise: number;
}
