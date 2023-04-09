export const typeSample2 = () => {
  console.clear();
  console.log('typeサンプル2');

  // object
  class FooClass {
    public propA: number = 10;
    public propB: string = 'foofoo';
  }
  class BarClass {
    public propA: number = 20;
    public propC: boolean = true;
  }
  class BazClass {
    public propA: number = 30;
    public propB: string = 'bazbaz';
    public propC: boolean = false;
  }

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

  let objQux = { propA: 40, propB: 'qux' };
  console.log(objQux);
  console.log(objQux.propA);
  // console.log(obj.propC); // エラーになってくれる

  // 構造的な比較（「継承」はなく「形状」）：例1
  objQux = objFoo; // 形状を満たす
  objFoo = objQux; // 形状を満たす
  console.log('OK : objQux = objFoo');
  console.log('OK : objFoo = objQux');
  console.log(`objQux=${JSON.stringify(objQux)}`);

  // 構造的な比較（「継承」はなく「形状」）：例2
  // objQux = objBar; // 形状を満たさない
  // objBar = objQux; // 形状を満たさない

  // 構造的な比較（「継承」はなく「形状」）：例3
  objQux = objBaz; // 形状を満たす
  // objBaz = objQux; // 形状を満たさない
  console.log('OK : objQux = objBaz');
  console.log(`objQux=${JSON.stringify(objQux)}`);

  // 構造的な比較（「継承」はなく「形状」）：例4
  objFoo = objBaz; // 形状を満たす
  objBar = objBaz; // 形状を満たす
  // objBaz = objFoo; // 形状を満たさない
  // objBaz = objBar; // 形状を満たさない
  console.log('OK : objFoo = objBaz');
  console.log('OK : objBar = objBaz');
  console.log('objFoo=');
  console.log(objFoo);
  console.log('objBar=');
  console.log(objBar);
};