// ES2018
'use strict';

/* exported outputES2015_vol1 */
const outputES2015_vol1 = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  厳格モード  
  https://kangax.github.io/compat-table/es6/
  */

  var numList = [10, 20, 30];
  var fruitList = ['apple', 'banana', 'cherry'];

  console.log('1. default function parameters');
  function dfp(a = 'paramA', b = 'paramB') { return a + b; }
  console.log(dfp(undefined, 'BOOOOO!'));

  console.log('2. rest parameters');
  function rp(...restParams) { return restParams; }
  console.log(rp('a', 'b'));

  console.log('3. spread syntax for iterable objects');
  console.log(Math.max(...numList));

  console.log('4. object literal extensions');
  var methodName = 'methodX';
  var propName = 'propA';
  var getterName = 'propB';
  var setterName = 'propC';
  var propD = 'shorthand property!';
  var obj =
  {
    [methodName]() { return 'computed method!'; },
    methodY() { return 'shorthand method!'; },
    [propName]: 'computed property!',
    get [getterName]() { return 'computed getter!'; },
    set [setterName](value) { console.log(value); },
    propD,
  };
  obj.propC = 'computed setter!';
  console.log(obj);

  console.log('5. for..of');
  for (const item of fruitList) {
    console.log(item);
  }

  console.log('6. octal and binary literals');
  console.log(0o11);
  console.log(0b11);

  console.log('7. template literals');
  console.log(`aaa
bbb
ccc
${fruitList}`);

  console.log('8. RegExp "y" and "u" flags（略）');

  console.log('9~11. destructuring declarations/assignment/parameters');
  var [varA, varB] = fruitList;
  console.log(varA);
  console.log(varB);
  var varC;
  var varD;
  [varC, varD] = numList;
  console.log(varC);
  console.log(varD);
  function dp([paraA, paraB]) { return paraA + paraB; }
  console.log(dp(fruitList));

  console.log('12. Unicode code point escapes');
  console.log('\u{1f97a}');

  // 13. new.target
  console.log('13. new.target（略）');
}

/* exported outputES2015_vol2 */
const outputES2015_vol2 = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  厳格モード  
  https://kangax.github.io/compat-table/es6/
  */

  console.log('14. const');
  const CONST_SAMPLE = 2;
  console.log(CONST_SAMPLE);

  console.log('15. let');
  let letSample = 1;
  console.log(letSample);

  console.log('16. block-level function declaration（略。strictでの仕様統一）');

  console.log('17. arrow functions');
  const arrowFunc = (x) => { return x; };
  console.log(arrowFunc(10));

  console.log('18, 19. class & super');
  class BaseClass {
    // publicプロパティやpublicフィールドはメンバ宣言できない（getter、setter、メソッド、privateフィールドは可能）
    // ※ typescriptならば型チェックの一環なのでアクセス修飾子なども含めて可能になる
    constructor(w = 0, h = 0) {
      this.width = w;
      this.height = h;
    }
  }
  class ExtendClass extends BaseClass {
    // extendsクラスのbaseメンバは、purototype継承と異なりサブクラスに直接定義される
    // hasOwnProperty('...')が、trueを返す
    constructor(w = 0, h = 0, d = 0) {
      super(w, h);
      this.depth = d;
    }
  }
  const objA = new BaseClass(10, 20);
  const objB = new ExtendClass(10, 20, 30);
  console.log(objA);
  console.log(objB);
  console.log(Object.prototype.hasOwnProperty.call(objA, 'width'));
  console.log(Object.prototype.hasOwnProperty.call(objB, 'width'));

  console.log('20. generators (iterator)');
  function* generatorSample() { yield 'first'; yield 'second'; yield 'third'; }
  const gen = generatorSample();
  for (const item of gen) {
    console.log(item);
  }
}

/* exported outputES2015_vol3 */
const outputES2015_vol3 = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  厳格モード  
  https://kangax.github.io/compat-table/es6/
  */

  console.log('21. typed arrays（略）');

  console.log('22~25. Map, Set, WeakMap, WeakSet（略）');

  console.log('26~27. Proxy, Reflect（略）');

  console.log('28. Promise（略）');

  console.log('28. Symbol（略）');

  console.log('30. well-known symbols（略）');

  console.log('31. Object static methods');
  console.log(Object.assign);
  console.log(Object.is);
  console.log(Object.getOwnPropertySymbols);
  console.log(Object.setPrototypeOf);

  console.log('32. function "name" property（略）');

  console.log('33. String static methods');
  console.log(String.raw);
  console.log(String.fromCodePoint);

  console.log('34. String.prototype methods');
  console.log(String.prototype.codePointAt);
  console.log(String.prototype.normalize);
  console.log(String.prototype.repeat);
  console.log(String.prototype.startsWith);
  console.log(String.prototype.endsWith);
  console.log(String.prototype.includes);
  console.log(String.prototype[Symbol.iterator]);

  console.log('35. RegExp.prototype properties');
  console.log(RegExp.prototype.flags);
  console.log(RegExp.prototype[Symbol.match]);
  console.log(RegExp.prototype[Symbol.replace]);
  console.log(RegExp.prototype[Symbol.split]);
  console.log(RegExp.prototype[Symbol.search]);
  console.log(RegExp[Symbol.species]);

  console.log('36. Array static methods');
  console.log(Array.from);
  console.log(Array.of);
  console.log(Array[Symbol.species]);

  console.log('37. Array static methods');
  console.log(Array.prototype.copyWithin);
  console.log(Array.prototype.find);
  console.log(Array.prototype.findIndex);
  console.log(Array.prototype.fill);
  console.log(Array.prototype.keys);
  console.log(Array.prototype.values);
  console.log(Array.prototype.entries);
  console.log(Array.prototype.splice);
  console.log(Array.prototype[Symbol.iterator]);
  console.log(Array.prototype[Symbol.unscopables]);

  console.log('38. Number properties');
  console.log(Number.isFinite);
  console.log(Number.isInteger);
  console.log(Number.isSafeInteger);
  console.log(Number.isNaN);
  console.log(Number.parseFloat);
  console.log(Number.parseInt);
  console.log(Number.EPSILON);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log(Number.MAX_SAFE_INTEGER);

  console.log('39. Math methods');
  console.log(Math.clz32);
  console.log(Math.imul);
  console.log(Math.sign);
  console.log(Math.log10);
  console.log(Math.log2);
  console.log(Math.log1p);
  console.log(Math.expm1);
  console.log(Math.cosh);
  console.log(Math.sinh);
  console.log(Math.tanh);
  console.log(Math.acosh);
  console.log(Math.asinh);
  console.log(Math.atanh);
  console.log(Math.trunc);
  console.log(Math.fround);
  console.log(Math.cbrt);
  console.log(Math.hypot);

  console.log('40. Date.prototype[Symbol.toPrimitive]（略）');

  console.log('41. Subclassing（略）');
  console.log('42. Misc（略）');
  console.log('43. Annex b（略）');

  console.log('44. module mode, import（略）');
  // モジュールのimportはCORSの対象なので、ローカルファイルで実行すると遮断されてしまう
  // ※ ローカルファイル間は同一ドメイン扱いにならないため
};