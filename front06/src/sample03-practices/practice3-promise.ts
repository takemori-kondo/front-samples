export { }
/*
# Promiseの説明

1. (resolve, reject) => { ... }をコンストラクター引数に取る
2. resolveを実行するとthenに飛ぶ
3. rejectを実行するとcatchに飛ぶ
4. thenやcatchはそのターンには呼ばれない
5. thenやcatchはチェーン可能
6. 履行済や拒否済のPromiseでも、後からthenやcatchをチェーン可能
    - 履行中になりチェーン内容を実行する
7. 単一のPromiseに複数回（チェーンではなく）直接thenすると、並列になる
8. Task.WhenAll()と同じ内容は、Promise.all()

```js
function delay(delay_ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(delay_ms), delay_ms);
    console.log("delay started");
  });
}
const myPromise = delay(1000);
myPromise
  .then(result => {
    console.log(result + "ms waited!");
    return delay(2000);
  })
  .then(result => {
    console.log(result + "ms waited!");
  })
  .catch(result => {
    console.log("rejected!");
  });
```
 */

declare global {
  interface PromiseConstructor {
    /**
     * (Extension method) buildを通すにはimportが必要です。  
     * 非同期の待機
     * @param delay_ms 待機時間
     * @returns (awaitable) void
     */
    delay: (delay_ms: number) => Promise<void>;
  }
}

// 標準ライブラリ型のprototypeにdelayを実装してしまっているが、一般的には非推奨なプラクティスです。真似しないでください。
Promise.delay = function (delay_ms: number): Promise<void> {
  console.log(`delay ${delay_ms}`);
  return new Promise((resolve) => setTimeout(resolve, delay_ms));
}

export const practice3 = async (isClearLog: boolean) => {
  let mark: string = `[isClearLog=${isClearLog}] `;
  if (isClearLog) {
    console.clear();
    mark = '';
  }
  console.log('Promise(awaitable)関連');

  // 1. 基本
  console.log(`${mark}case1`);
  console.log(`${mark}${(new Date()).toISOString()} case1-1 : awaitしている間、画面は自由に触れます`);
  await Promise.delay(5000);
  console.log(`${mark}${(new Date()).toISOString()} case1-2`);

  // 2. チェーン
  console.log(`${mark}case2`);
  const p1 = createSomethingAsync(mark, false);
  await p1;

  // チェーン（途中でエラーが発生した場合）
  console.log(`${mark}case3`);
  const p2 = createSomethingAsync(mark, true);
  await p2;
};

function createSomethingAsync(mark: string, isThrowing: boolean) {
  return new Promise<void>((resolve) => resolve())
    .then(async () => {
      console.log(`${mark}${(new Date()).toISOString()} createSomethingAsync-1`);
      await Promise.delay(1000);
      return '1st OK';
    })
    .then(async (result) => {
      console.log(`${mark}${(new Date()).toISOString()} createSomethingAsync-2 : before result=${result}`);
      await Promise.delay(1000);
      return '2nd OK';
    })
    .then(async (result) => {
      console.log(`${mark}${(new Date()).toISOString()} createSomethingAsync-3 : before result=${result}`);
      if (isThrowing) { throw new Error('ERROR!!!!'); }
      await Promise.delay(1000);
      return '3rd OK';
    })
    .then((result) => {
      console.log(`${mark}${(new Date()).toISOString()} createSomethingAsync-4 : before result=${result}`);
      return;
    })
    .catch((error) => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`${mark}${(new Date()).toISOString()} createSomethingAsync-catch : error=${error}`);
      return;
    });
}
