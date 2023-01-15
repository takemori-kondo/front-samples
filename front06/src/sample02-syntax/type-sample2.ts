console.log('typeサンプル2');

let sample2 = () => {
  // object
  class FooClass {
    public propA: number = 20;
    public propB: string = 'foofoo';
  }
  class BarClass {
    public propA: number = 30;
    public propC: boolean = true;
  }
  class BazClass {
    public propA: number = 40;
    public propB: string = 'bazbaz';
    public propC: boolean = false;
  }

  let objQux = { propA: 10, propB: 'qux' };
  console.log(objQux);
  console.log(objQux.propA);
  // console.log(obj.propC); // エラーになってくれる

  let objFoo: FooClass = new FooClass();
  console.log(objFoo);
  console.log(objFoo.propA);
  // console.log(objFoo.propC); // エラーになってくれる

  let objBar: BarClass = new BarClass();
  console.log(objBar);
  console.log(objBar.propA);

  let objBaz: BazClass = new BazClass();
  console.log(objBaz);
  console.log(objBaz.propA);

  // 「継承」はなく「形状」：例1
  objQux = objFoo; // 形状を満たす
  objFoo = objQux; // 形状を満たす

  // 「継承」はなく「形状」：例2
  // objQux = objBar; // 形状を満たさない
  // objBar = objQux; // 形状を満たさない

  // 「継承」はなく「形状」：例3
  objQux = objBaz; // 形状を満たす
  // objBaz = objQux; // 形状を満たさない

  // 「継承」はなく「形状」：例4
  objFoo = objBaz; // 形状を満たす
  objBar = objBaz; // 形状を満たす
  // objBaz = objFoo; // 形状を満たさない
  // objBaz = objBar; // 形状を満たさない
  console.log(objFoo);
  console.log(objBar);
}
sample2();