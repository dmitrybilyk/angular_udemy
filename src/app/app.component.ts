import { Component } from '@angular/core';

class Item{
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {

    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  // template: `<!--<child-comp [userName]="name" [userAge]="age"><h2>Добро пожаловать {{name}}!</h2></child-comp>-->
    // <input type="number" [(ngModel)]="age" />`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
export class AppComponent {

  clicks: number = 0;

  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }

  text: string;
  price = 110;
  age = 25;
  colspan = 4;

  items: Item[] =
    [
      {purchase: 'Хлеб', done: false, price: 15.9},
      {purchase: 'Масло', done: false, price: 60},
      {purchase: 'Картофель', done: true, price: 22.6},
      {purchase: 'Сыр', done: false, price: 310}
    ];
  isRed: false;
  name = 'Lena';

  addItem(text: string, price: number): void {

    // tslint:disable-next-line:triple-equals
    if (text == null || text.trim() == '' || price == null) {
      return;
    }
    this.items.push(new Item(text, price));
  }
}
