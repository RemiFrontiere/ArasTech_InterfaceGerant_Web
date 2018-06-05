import { Component } from '@angular/core';
import { Globals } from '../../class/globals';

@Component({
  selector: 'questionnaires-component',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent {

  constructor(private globals: Globals){
  }

  ngOnInit(){
    this.globals.CurrentScreen = "questionnaires";
  }

  handleFileInput(files: FileList) {
    // this.globals.EtablissementLogo = files.item(0);
}
}
