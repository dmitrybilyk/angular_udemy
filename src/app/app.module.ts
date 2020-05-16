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
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {NotFoundComponent} from './not-found.component';
import {ItemComponent} from './item.component';
import {ItemDetailsComponent} from './item.details.component';
import {ItemStatComponent} from './item.stat.component';
import {AboutGuard} from './about.guard';
import {ExitAboutGuard} from './exit.about.guard';
// import {LogService} from './log.service';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard]
  }
];

@NgModule({
  declarations: [
   DataComponent, AppComponent, WhileDirective, BoldDirective, NotFoundComponent, HomeComponent, AboutComponent,
  ItemComponent, ItemDetailsComponent, ItemStatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, LogService, AboutGuard, ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
