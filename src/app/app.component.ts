import { Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'my-app',
  template: `<data-comp></data-comp>
  <data-comp></data-comp>`
})
export class AppComponent {}
