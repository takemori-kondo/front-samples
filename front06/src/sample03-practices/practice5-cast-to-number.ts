export { }

export const practice5 = async () => {
  console.clear();
  console.log('number castプラクティス');

  console.log(`typeof (new Number('123')) : ${typeof (new Number('123'))}`);
  console.log(`typeof (Number('123'))     : ${typeof (Number('123'))}`);
  console.log(`Number(undefined)   : ${Number(undefined)}`);
  console.log(`Number(null)        : ${Number(null)}`);
  console.log(`Number('Infinity')  : ${Number('Infinity')}`);
  console.log(`Number('-Infinity') : ${Number('-Infinity')}`);
  console.log(`Number('true')      : ${Number('true')}`);
  console.log(`Number(true)        : ${Number(true)}`);
  console.log(`Number('false')     : ${Number('false')}`);
  console.log(`Number(false)       : ${Number(false)}`);
  console.log(`Number('')          : ${Number('')}`);
  console.log(`Number(' ')         : ${Number(' ')}`);
  console.log(`Number('　')        : ${Number('　')}`);
  console.log(`Number(' \t\r\n　') : ${Number(' \t\r\n　')}`);
  console.log(`Number('abcdefgh')  : ${Number('abcdefgh')}`);
  console.log(`Number('1bcdefgh')  : ${Number('1bcdefgh')}`);
  console.log(`Number('1.23456789123456789123456789') : ${Number('1.23456789123456789123456789')}`);
  console.log(`Number('0b1010')    : ${Number('0b1010')}`);
  console.log(`Number('0b1012')    : ${Number('0b1012')}`);
  console.log(`Number('0xFFFF')    : ${Number('0xFFFF')}`);
  console.log(`Number('0xFFFG')    : ${Number('0xFFFG')}`);
  console.log(`Number('FF')        : ${Number('FF')}`);
  console.log(`Number('0o12')      : ${Number('0o12')}`);
  console.log(`Number('0o129')     : ${Number('0o129')}`);
  console.log(`Number('1.52e10')   : ${Number('1.52e10')}`);
};