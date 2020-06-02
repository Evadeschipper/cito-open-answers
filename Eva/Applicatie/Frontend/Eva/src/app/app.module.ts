import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {AnalyserenAntwoordComponent} from './visualize-variable/analyseren-antwoord.component';

import {MatRadioModule} from '@angular/material/radio';
import {AgGridModule} from '@ag-grid-community/angular';
import {MatCheckboxModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {HttpClientModule} from '@angular/common/http';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {HomeComponent} from './home/home.component';
import { LoadVariablesComponent } from './load-variables/load-variables.component';
import { ExecuteScriptComponent } from './execute-script/execute-script.component';
import { FilterVariablesComponent } from './filter-variables/filter-variables.component';

const routes: Routes = [
  {path: 'analyserenantwoord', component: AnalyserenAntwoordComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AnalyserenAntwoordComponent,
    HomeComponent,
    LoadVariablesComponent,
    ExecuteScriptComponent,
    FilterVariablesComponent
  ],
  imports: [
    AngularFileUploaderModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([]),
    MatCheckboxModule,
    ScrollingModule,
    MatRadioModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
