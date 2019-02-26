import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    NgbModule,
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
