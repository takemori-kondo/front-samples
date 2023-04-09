export { }

export const practice6 = async () => {
  console.clear();
  console.log('string castプラクティス');

  console.log(`typeof (new String(123)) : ${typeof (new String(123))}`);
  console.log(`typeof (String(123))     : ${typeof (String(123))}`);
  console.log(`String(undefined)   : ${String(undefined)}`);
  console.log(`String(null)        : ${String(null)}`);
  console.log(`String(Infinity)    : ${String(Infinity)}`);
  console.log(`String(-Infinity)   : ${String(-Infinity)}`);
  console.log(`String(true)        : ${String(true)}`);
  console.log(`String(false)       : ${String(false)}`);
  console.log(`String(1.23456789123456789123456789) : ${String(1.23456789123456789123456789)}`);
  console.log(`String(0b1010)      : ${String(0b1010)}`);
  console.log(`String(0xFFFF)      : ${String(0xFFFF)}`);
  console.log(`String(0o12)        : ${String(0o12)}`);
  console.log(`String(1.52e10)     : ${String(1.52e10)}`);
};