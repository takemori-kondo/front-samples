export { }
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
  console.log(`${mark}${iso8601ex_3ms(new Date())} case1-1 : awaitしている間、画面は自由に触れます`);
  await Promise.delay(5000);
  console.log(`${mark}${iso8601ex_3ms(new Date())} case1-2`);

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
  return new Promise(async (resolve, reject) => {
    console.log(`${mark}${iso8601ex_3ms(new Date())} createSomethingAsync-1`);
    await Promise.delay(1000);
    resolve('1st OK');
  })
    .then(async (result) => {
      console.log(`${mark}${iso8601ex_3ms(new Date())} createSomethingAsync-2 : before result=${result}`);
      await Promise.delay(1000);
      return '2nd OK';
    })
    .then(async (result) => {
      console.log(`${mark}${iso8601ex_3ms(new Date())} createSomethingAsync-3 : before result=${result}`);
      if (isThrowing) { throw new Error('ERROR!!!!'); }
      await Promise.delay(1000);
      return '3rd OK';
    })
    .then(async (result) => {
      console.log(`${mark}${iso8601ex_3ms(new Date())} createSomethingAsync-4 : before result=${result}`);
      return;
    })
    .catch(async (error) => {
      console.log(`${mark}${iso8601ex_3ms(new Date())} createSomethingAsync-catch : error=${error}`);
      return;
    });
}
function iso8601ex_3ms(date: Date) {
  return ('0000' + date.getFullYear()).slice(-4) + '-' +
    ('00' + date.getMonth()).slice(-2) + '-' +
    ('00' + date.getDay()).slice(-2) + 'T' +
    ('00' + date.getHours()).slice(-2) + ':' +
    ('00' + date.getMinutes()).slice(-2) + ':' +
    ('00' + date.getSeconds()).slice(-2) + '.' +
    ('000' + date.getMilliseconds()).slice(-3);
}
