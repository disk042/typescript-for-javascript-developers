export {};

function double(value: number): number;
function double(value: string): string;

// anyでOK。シグネチャーで型制約をしているのでanyでもnumberとstring以外は受け付けない。
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
