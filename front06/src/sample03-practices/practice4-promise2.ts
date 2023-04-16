export const practice4 = async () => {
  console.clear();
  try {
    // 例1. 単にN ms待機し、履行結果（≒await後の戻り値）のないpromise
    {
      const delayTime1 = 300;
      const promise1 = new Promise((resolve) => setTimeout(resolve, delayTime1));
      await promise1;
      console.log(`${delayTime1} ms delayed!`);
    }

    // 例2. fetchで取得したpromise。履行結果（≒await後の戻り値）はResponseオブジェクト
    {
      const promise2 = fetch('https://api.sampleapis.com/beers/ale');
      const response = await promise2;
      const responseBody: unknown = await response.json();
      console.log(responseBody);
    }

    // 例3. Promise.all()の典型的な使い方。履行結果（≒await後の戻り値）は各promiseの履行結果の配列
    // ブラウザ上でF12を押し開発者モードを開きネットワークを表示しておくと、並列にリクエストしていることが分かる
    const promiseList = [
      fetch('https://api.sampleapis.com/beers/ale'),
      fetch('https://api.sampleapis.com/coffee/hot'),
      fetch('https://api.sampleapis.com/wines/reds')
    ];
    const promise3 = Promise.all(promiseList);
    const responseList = await promise3;
    for (const response of responseList) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const responseBody = await response.json();
      console.log(responseBody);
    }

    // 例4. リジェクト例
    const promise4 = new Promise((_, reject) => setTimeout(
      () => {
        reject(new Error('任意のエラー'));
      }, 300));
    await promise4;
    // ↑でリジェクトされるので以降の処理に到達しない
    const delayTime4 = 500;
    const promise5 = new Promise((resolve) => setTimeout(resolve, delayTime4));
    await promise5;
    console.log(`${delayTime4} ms delayed!`);
  }
  catch (error) {
    // いずれかのawait内にリジェクトされた場合も、ここに来る
    console.log(error);
  }
};
