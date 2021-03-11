export {};

function error(message: string): never{
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!');
// 例外処理の場合はnever型を定義する。never型は値が戻ってこない。例外処理以外の変数を代入できない。
