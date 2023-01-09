// ES2018
'use strict';

/* exported outputPractice2_Event */
const outputPractice2_Event = () => {
  console.clear();
  window.alert('F12を押してconsoleタブに出力された内容を確認してください。');

  /*
イベントへの入門  
https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events

イベントのご紹介  
https://www.quirksmode.org/js/introevents.html

HTMLでonClick()を使用するのが悪い習慣なのはなぜですか?  
https://stackoverflow.com/questions/5871640/why-is-using-onclick-in-html-a-bad-practice

JS 関数名が要素 ID と競合するのはなぜですか?  
https://stackoverflow.com/questions/9158238/why-js-function-name-conflicts-with-element-id

# 最新のプラクティス

- イベントハンドラ属性を使ってよく、単一の関数呼び出しのみを記載する。ただしid属性name属性の問題は知っておく

# 最新のプラクティスの理由

- そもそも複雑になった時点で、3大Frameworkのいずれかを採用することを検討するべきである
  （複雑なページをFrameworkを使わずに作ること自体をやめるべきである。複雑になった場合のデメリットを考慮しない）
- 3大Frameworkへステップアップするための架け橋として似た記法を採用する
  （3大Frameworkはいずれもコンポーネントベースの哲学が導入され、UIと振る舞いが1対のUIコンポーネントになる前提になり、イベントハンドラ属性ライクな記法になる）
  （コンポーネントベースにより再利用の概念は「UIコンポーネントの再利用」「再利用可能なServiceクラス」の2つの軸で再定義された）
  （言い換えると、過去のプラクティスであるhtmlとjsの分離という括りは、コンポーネントベースを採用しない場合は、現在も有効な暫定的な方針であると言える）

# 過去のプラクティス

1. イベントハンドラ属性(Early event handlers)は避ける。どうしても使うなら、関数の呼び出しなど単純な記述にする
2. イベントハンドラプロパティ(Traditional event registration model)も避ける
3. イベントリスナ(W3C)の登録を推奨する。特にページ初期化処理に関しては必ずイベントリスナ形式にする

# 過去のプラクティスの理由

- html上にインラインでjavascriptコードが記載されるのは好ましくない
- 複数登録できない
- id属性やname属性と関数名が干渉する（歴史的な経緯により）
  */
  console.log('この関数自体、イベントハンドラ属性で呼び出されています。');
};