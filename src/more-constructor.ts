export {};

// 初期化する際は、constructorの引数にアクセス修飾子をつけることで初期化処理が行われる。
class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('はむさん', 43);
console.log(me);
