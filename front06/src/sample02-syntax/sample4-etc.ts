export const otherSyntaxSample = () => {
  console.clear();
  console.log('細かい文法のサンプル');

  // ES2015で後追い実装された系1. option parameter
  const sum = (p1: number = 10, p2: number = 20) => p1 + p2;
  console.log(sum(15));

  // ES2015で後追い実装された系2. rest
  const logItems = (...restParams: string[]) => { for (const item of restParams) { console.log(item); } }
  logItems('apple', 'banana', 'cherry');

  // 複数の型を許容（union type）
  const log = (p1: number | boolean) => { console.log(p1); }
  log(20);
  log(true);

  // ジェネリクス
  function map<T>(sourceArray: T[], func: (item: T) => T): T[] {
    let result = [];
    for (let i = 0; i < sourceArray.length; i++) {
      result[i] = func(sourceArray[i]);
    }
    return result;
  }
  let result = map([10, 20, 30], (p) => 5 * p);
  for (let item of result) {
    console.log(item);
  }
};