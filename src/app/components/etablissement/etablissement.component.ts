import { Component } from '@angular/core';
import { Globals } from '../../class/globals';

@Component({
  selector: 'etablissement-component',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.scss']
})
export class EtablissementComponent {

  constructor(private globals: Globals){
  }

  ngOnInit(){
    this.globals.CurrentScreen = "etablissement";
  }

  handleFileInput(files: FileList) {
    // this.globals.EtablissementLogo = files.item(0);
}
}
