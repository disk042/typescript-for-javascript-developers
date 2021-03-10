export {};

// let profile: (string | number)[]= ['Daiuske', 43];
// これだと型の指定としては緩い

let profile: [string, number] = ['Daisuke', 43];
// profile = [43, 'Daisuke'];
// tuple型だと配列の順序も決めて制約を持たせることが可能
// 型推論はないので、PGが覚える必要がある
