import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    let tom : User = new User("Том", 29);
    console.log("Имя: ", tom.name, " возраст: ", tom.age);

    let person = {name:"Tom", age:23};
    console.log(person.name);
// альтернативный вариант получения свойства
    console.log(person["name"]);
    this.printSomething();
  }

   printSomething(){
     // определение кортежа - кортеж состоит из двух элементов - строки и числа
     let userInfo: [string, number, number];
// инициализация кортежа
     userInfo = ["Tom", 28, 77];
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
//userInfo = [28, "Tom"]; // Ошибка

// использование кортежа
     console.log(userInfo[1]); // 28
     userInfo[1] = 37;
  }

}

class User{
  name : string;
  age : number;
  constructor(_name:string, _age: number){

    this.name = _name;
    this.age = _age;
  }
}

