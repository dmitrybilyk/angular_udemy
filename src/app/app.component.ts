import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-app',
  template: `<ul>
      <li *ngFor="let user of users | async">
          <p>Имя пользователя: {{user.name}}</p>
          <p>Возраст пользователя: {{user.age}}</p>
      </li>
  </ul>`,
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  users: Observable<Object>;
  constructor(private httpService: HttpService){}
  ngOnInit(){

    this.users = this.httpService.getUsers();
  }
}
