export {};

let bmi: (weight: number, height: number) => number = (
  weight: number,
  height: number
  ): number =>  weight /  (height * 2);
// returnを省略して書ける

console.log(bmi(83, 1.78));
