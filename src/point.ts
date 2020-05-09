export class Point {
  constructor(private _x: number, private _y?:  number) {
    // this.x = number;
    // this.y = number2;
  }

  getX() {
    return this._x;
  }
  setX(value) {
    if (value < 0)
      throw new Error('value cannon be less than 0.');
    this._x = value;
  }
  // private readonly x: number;
  // y: number;
  // draw: () => void;
  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }
}
