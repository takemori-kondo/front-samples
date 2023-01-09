// ES2018
'use strict';

/* exported outputES2016_2018 */
const outputES2016_2018 = async () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  厳格モード  
  https://kangax.github.io/compat-table/es2016plus/
  */
  /*
  2023年現在、直接ネイティブでの使用は控え、ES2015へターゲットすることを推奨（iPhone6、iPad 4thのOSバージョンがES2015なので）
  */
  console.log('2016. exponentiation (**) operator');
  console.log(2 ** 8);

  console.log('2017-1. async functions');
  const delay = (ms) => { return new Promise((resolve) => setTimeout(resolve, ms)); };
  const funcAsync = async () => {
    console.log(`start:${new Date()}`);
    await delay(1000);
    console.log(`end:${new Date()}`);
  };
  await funcAsync();

  console.log('2017-2. trailing commas in function syntax');
  const sum = (a, b,) => {
    return a + b;
  };
  console.log(sum(10, 5));

  console.log('2018-1. object rest/spread properties（略）');
  console.log('2018-2. Promise.prototype.finally（略）');
  console.log('2018-3. Asynchronous Iterators（略）');
};