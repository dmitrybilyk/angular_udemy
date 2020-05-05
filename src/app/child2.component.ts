import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'child2-comp',
  template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})
export class ChildComponent2{

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
    this.onChanged.emit(increased);
  }
}
