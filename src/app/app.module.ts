import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MissionComponent } from './mission/mission.component';
import { HelpachildComponent } from './helpachild/helpachild.component';
import { ProductsComponent } from './products/products.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    HelpachildComponent,
    ProductsComponent,
    SurveyformComponent,
    HomeComponent
  ],
  imports: [
    MaterialModule,
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
      RouterModule.forRoot([
        {path: 'surveyform' , component : SurveyformComponent},
        {path: 'products' , component : ProductsComponent},
        {path: 'mission' , component : MissionComponent},
        {path: 'helpachild' , component: HelpachildComponent},
         {path: 'home', component: HomeComponent},
        ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
