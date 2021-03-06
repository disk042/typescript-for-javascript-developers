export {};
// export{}することで、ファイルをモジュール化してグローバル空間で定義しないようにする
let name = 'TypeScript';

// 型宣言する: boolean アノテーションという
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
