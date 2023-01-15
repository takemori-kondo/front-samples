console.log('typeサンプル1');

let sample1 = () => {
  // number
  let num: number = 1 + 2;
  console.log(num);

  // boolean
  let boo: boolean = false || true || undefined;
  console.log(boo);

  // string
  let str: string = 'this is text';
  console.log(str);

  // 使わない
  // let obj: object = { propA: 1, propB: 'foo' };
  // console.log(obj);
  // console.log(obj.propA); // 不可能（C#のobject型に任意のインスタンスを入れた時と同じ）

  // 非推奨
  // let variable: any = { propA: 10, propB: 'foo' };
  // console.log(variable);
  // console.log(variable.propA);
  // console.log(variable.propC); // 出来てしまう
};
sample1();
