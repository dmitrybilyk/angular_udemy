import { Input, Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<ng-content></ng-content>
  <h2>Добро пожаловать {{userAge2}}!</h2>`,
  styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
  name = "Dima Bilyk";
  @Input() userName: string;
  userAge2: number;

  @Input()
  set userAge(age: number) {
    if (age < 0) {
      this.userAge2 = 0;
    } else if (age > 100) {
      this.userAge2 = 100;
    } else {
      this.userAge2 = age;
    }
  }

  get userAge() {
    return this.userAge2;
  }
}
