import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import {FormsModule} from '@angular/forms';
import {ChildComponent2} from './child2.component';
import {ChildComponent3} from './child.component3';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, ChildComponent2, ChildComponent3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
