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

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    HelpachildComponent,
    ProductsComponent,
    SurveyformComponent
  ],
  imports: [
    MaterialModule,
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
