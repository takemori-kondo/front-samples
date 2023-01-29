export const typeSample3 = () => {
  console.clear();
  console.log('typeサンプル3');

  // array
  let numList: number[] = [10, 20, 30];
  numList.push(40);
  numList[0] = 15;
  console.log(numList);

  // immutable array
  let immutableStringList: readonly string[] = ['apple', 'banana', 'cherry'];
  // immutableStringList[0] = 'ABC'; // エラーになる
  // immutableStringList.push(1); // エラーになる
  console.log(immutableStringList);

  // タプル、列挙型などもあるが、略

  // シグネチャ型(call signature, type signature)
  let mapFunction: (item: number) => number = (p: number) => { return p * 3; };
  console.log(mapFunction(20));
  mapFunction = (p: number) => { return p * p; }
  console.log(mapFunction(20));
  // mapFunction = (p: string) => { return p; } // エラーになる
};