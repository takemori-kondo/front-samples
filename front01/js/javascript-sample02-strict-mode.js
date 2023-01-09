// ES2018
'use strict';

/* exported outputStrictMode */
const outputStrictMode = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
  厳格モード  
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode
  */

  // 1-1. 未宣言の変数への代入
  try { undeclaredVar = 'foo'; } catch (error) { console.log(error); }

  // 1-2. オブジェクトプロパティへの代入の失敗
  const obj = { get prop() { return 17 } };
  try { obj.prop = 5; } catch (error) { console.log(error); }

  // 1-3. オブジェクトプロパティの削除の失敗
  try { delete [].length; } catch (error) { console.log(error); }

  // 1-4. 引数名の重複
  // sum = (a, a) =>  a + a;

  // 1-5. 古い 8 進数リテラル
  // const a = 015;

  // 1-6. プリミティブ値へのプロパティの設定
  try { 'with'.you = 'far away'; } catch (error) { console.log(error); }

  // 2-1. with 文の削除
  // with (obj) { console.log(prop); }

  // 2-2. 漏洩のない eval
  eval('var evalVar = 42; console.log("inner:" + evalVar);');
  try { console.log('outer:' + evalVar); } catch (error) { console.log(error); }

  // 2-3. ブロックスコープ付き関数宣言
  foo();
  try { bar(); } catch (error) { console.log(error); }
  function foo() { console.log("関数直下に入れ子された関数はHoistingされる"); }
  if (true) {
    function bar() { console.log("関数直下ではない場合は、Hoistingされない"); }
  }

  // 3-1. eval や arguments にバインドしたり代入したりしないようにする（eval、argumentsのキーワード化）
  // 3-2. 引数と arguments の添字を同期させない
  // 4-1. this の置き換えを行わない
  // 4-2. 積み重ねプロパティの削除
  // 5-1. 予約語の追加
};