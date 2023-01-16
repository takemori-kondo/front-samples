// ES2018
'use strict';

/* exported outputES2011 */
const outputES2011 = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  ES2011  
  https://kangax.github.io/compat-table/es5/
  */

  console.log('1. Object/array literal extensions');
  var obj = {
    get propA() { return 1; },
    set propB(value) { },
    TrailingCommas: [10, 20, 30,],
  }
  console.log(obj);

  console.log('2. Object static methods');
  console.log(Object.create);
  console.log(Object.defineProperty);
  console.log(Object.defineProperties);
  console.log(Object.getPrototypeOf);
  console.log(Object.keys);
  console.log(Object.seal);
  console.log(Object.freeze);
  console.log(Object.preventExtensions);
  console.log(Object.isSealed);
  console.log(Object.isFrozen);
  console.log(Object.isExtensible);
  console.log(Object.getOwnPropertyDescriptor);
  console.log(Object.getOwnPropertyNames);

  console.log('3. Array methods');
  console.log(Array.isArray);
  console.log(Array.prototype.indexOf);
  console.log(Array.prototype.lastIndexOf);
  console.log(Array.prototype.every);
  console.log(Array.prototype.some);
  console.log(Array.prototype.forEach);
  console.log(Array.prototype.map);
  console.log(Array.prototype.filter);
  console.log(Array.prototype.reduce);
  console.log(Array.prototype.reduceRight);
  // Array.prototype.sort // 挙動変更
  // [].unshift(0) === 1; // 挙動変更

  console.log('4. String properties and methods');
  console.log('foobar'[3]);
  console.log(String.prototype.split);
  console.log(String.prototype.substr);
  console.log(String.prototype.trim);

  console.log('5. Date methods');
  console.log(Date.prototype.toISOString);
  console.log(Date.now);
  console.log(Date.prototype.toJSON);

  console.log('6. Function.prototype.bind');
  console.log(Function.prototype.bind);

  console.log('7. JSON');
  console.log(typeof JSON === 'object');
  console.log(JSON.parse);
  console.log(JSON.stringify);

  console.log('8. Immutable globals');
  console.log(typeof undefined);
  console.log(typeof NaN);
  console.log(typeof Infinity);

  console.log('9. Number methods（略）');
  console.log('10. Miscellaneous（略）');
  console.log('11. Strict mode（略）');

  console.log('12. LineContinuation');
  const str = 'aaa \
  bbb \
  ccc';
  console.log(str);

  console.log('13. standardization（略）');
  // 13. standardization
  // eval()
  // typeof
  // delete
  // arguments
  // debugger
};