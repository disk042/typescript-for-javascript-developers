export {};

// 文字列のLiteral型
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';

// 数字のLiteral型
let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
// month = 13;

// 型付けする必要は高くないが、より制約が厳しくなる
let TRUE: true = true;
