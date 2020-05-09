import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BoldDirective} from './bold.directive';
import { WhileDirective} from './while.directive';
import {DataComponent} from './data.component';
import {DataService} from './data.service';
import {LogService} from './log.service';

import { ReactiveFormsModule }   from '@angular/forms';
// import {LogService} from './log.service';


@NgModule({
  declarations: [
   DataComponent, AppComponent, WhileDirective, BoldDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
