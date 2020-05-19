function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
  return x + y;
}

let result1 = add(5, 4);
console.log(result1);   // 9
let result2 = add("5", "4");
console.log(result2);   // 54
