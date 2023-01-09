// ES2018
'use strict';

/* exported outputPractice1_For */
const outputPractice1_For = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  for  
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for

  for...in  
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...in
  
  for...of  
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of

  Array.prototype.forEach()  
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  for           : OK
  for in        : 非推奨（そもそも配列に対して使用する機能ではない）
  for of        : 他言語のfoeachと等価
  Array.forEach : 非推奨
  */
  const itemList = [{ ItemId: 1, ItemName: 'apple' }, { ItemId: 2, ItemName: 'banana' }, { ItemId: 3, ItemName: 'cherry' }];
  console.log('"for" sample');
  for (let i = 0; i < itemList.length; i++) {
    console.log(itemList[i]);
  }
  console.log('"for in" sample (非推奨)');
  for (const i in itemList) {
    console.log(itemList[i]);
  }
  console.log('"for of" sample');
  for (const item of itemList) {
    console.log(item);
  }
  console.log('"Array.forEach" sample (非推奨)');
  itemList.forEach((item) => console.log(item));
};