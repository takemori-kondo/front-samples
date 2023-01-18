let practice2 = () => {
  console.log('オブジェクトのマージ');

  // Object.assign(dest, src, src ...)
  // getter、setterを考慮させたい場合
  let postData1 = { StaffId: 85, StaffNm: "太郎" };
  let additionalParameter1 = { StaffNm: "次郎", StaffCd: "D0" };
  let additionalParameter2 = { BloodType: "B" };
  Object.assign(postData1, additionalParameter1, additionalParameter2);
  console.log(postData1);

  // rest
  // 新たなobjectリテラルを作りたい場合
  let baseParameter = { StaffId: 96, StaffNm: "花子" };
  let postData2 = { ...baseParameter, ...additionalParameter1, ...additionalParameter2 };
  console.log(baseParameter);
  console.log(postData2);
}
practice2();