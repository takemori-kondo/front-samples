export const practice2 = () => {
  console.clear();
  console.log('オブジェクトのマージ');

  // Object.assign(dest, src, src ...)
  // getter、setterを考慮させたい場合
  const postData1 = { StaffId: 85, StaffNm: "太郎" };
  const additionalParameter1 = { StaffNm: "次郎", StaffCd: "D0" };
  const additionalParameter2 = { BloodType: "B" };
  Object.assign(postData1, additionalParameter1, additionalParameter2);
  console.log(postData1);

  // rest
  // 新たなobjectリテラルを作りたい場合
  const baseParameter = { StaffId: 96, StaffNm: "花子" };
  const postData2 = { ...baseParameter, ...additionalParameter1, ...additionalParameter2 };
  console.log(baseParameter);
  console.log(postData2);
};