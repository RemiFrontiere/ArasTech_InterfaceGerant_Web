import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// On import nos Components
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { EtablissementComponent } from './components/etablissement/etablissement.component';
import { BalisesComponent } from './components/balises/balises.component';
import { BaliseComponent } from './components/balise/balise.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { GroupeComponent } from './components/groupe/groupe.component';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Les variables GLOBALS
import { Globals } from './class/globals';

// Materials - Dans une classe pour éviter d'avoir à tous les importer dans le NgModule de notre app
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule {}


const appRoutes: Routes = [
  { path: 'balises', component: BalisesComponent },
  { path: 'groupes', component: GroupesComponent },
  { path: 'etablissement', component: EtablissementComponent },
  {
    path: 'app',
    component: AppComponent,
    data: { title: 'App' }
  },
  { path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [ // On déclare nos Components
    AppComponent,
    LoginComponent,
    EtablissementComponent,
    BalisesComponent,
    BaliseComponent,
    GroupesComponent,
    GroupeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MaterialModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
