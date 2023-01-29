export const practice1 = () => {
  console.clear();
  console.log('プロパティ存在チェック');

  // 補足1. そもそもプロパティ存在チェックより型定義が正攻法
  // 補足2. フロントサイド・ビジネスロジック中にプロパティ存在チェックが染み出すのはたちが悪いので、最低でもDI Service内に押しやる
  // 補足3. レガシなASP.NET Web APIからの慣習で、jsonがPascalCaseはよくあること
  const result: any = {
    StaffList: [
      { StaffId: 85, StaffCd: "d0000093", StaffNm: "\u5C71\u7530\u592A\u90CE", ShoeSize: 27.5 },
      { StaffId: 96, StaffCd: "d0000104", StaffNm: "\u5C71\u7530\u82B1\u5B50", ShoeSize: 0 }
    ]
  };
  const staff0 = result.StaffList[0];
  const staff1 = result.StaffList[1];

  // 非推奨。プロトタイプを辿るため遅い
  console.log(`StaffId is ${'StaffId' in staff0}`);
  console.log(`OtherNm is ${'OtherNm' in staff0}`);
  console.log('');

  // 推奨。プロトタイプを辿らない。なお、class糖衣構文の基本クラスメンバは各継承メンバが定義されるため、派生クラスでもtrueが返る
  console.log(`StaffId is ${staff0.hasOwnProperty('StaffId')}`);
  console.log(`OtherNm is ${staff0.hasOwnProperty('OtherNm')}`);
  console.log('');

  // 非推奨。null、false、0の時、判定がおかしくなる
  console.log(`StaffId is ${staff0.StaffId ? true : false}`);
  console.log(`ShoeSize is ${staff0.ShoeSize ? true : false}`);
  console.log(`OtherNm is ${staff0.OtherNm ? true : false}`);
  console.log('');
  console.log(`StaffId is ${staff1.StaffId ? true : false}`);
  console.log(`ShoeSize is ${staff1.ShoeSize ? true : false}`); // falseになってしまう
  console.log(`OtherNm is ${staff1.OtherNm ? true : false}`);
};