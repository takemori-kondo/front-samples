// ES2018
'use strict';

console.log(this);



/* exported legacyFunction */
function legacyFunction(context) {
  console.log(`${context} legacyFunction's this is ${this}, this.myname is ${this?.myname}`);
}
// eslint-disable-next-line no-undef
legacyFunction('global call');



/* exported arrowFunction_ */
const arrowFunction_ = (context) => {
  console.log(`${context} arrowFunction_'s this is ${this}, this.myname is ${this?.myname}`);
};
// eslint-disable-next-line no-undef
arrowFunction_('global call');



/* exported callFunctions_ */
function callFunctions_(context) {
  legacyFunction(context);
  arrowFunction_(context);
}



function ClassA() {
  this.myname = "Class A";
}
ClassA.prototype.legacy = legacyFunction;
ClassA.prototype.arrow_ = arrowFunction_;
/* exported callClassA____ */
function callClassA____(context) {
  const obj = new ClassA();
  obj.legacy(context);
  obj.arrow_(context);
}



class ClassB {
  constructor(legacy, arrow_) {
    this.myname = "Class B";
    this.legacy = legacy;
    this.arrow_ = arrow_;
  }
}
/* exported callClassB____ */
function callClassB____(context) {
  const obj = new ClassB(legacyFunction, arrowFunction_);
  obj.legacy(context);
  obj.arrow_(context);
}


class ClassC {
  constructor() {
    this.myname = "Class C";
  }
  legacy(context) {
    console.log(`method!`);
    console.log(`${context} method's this is ${this}, this.myname is ${this.myname}`);
  }
}
/* exported callClassC____ */
function callClassC____(context) {
  const obj = new ClassC();
  obj.legacy(context);
}



const objA = {
  myname: "object A",
  legacy: legacyFunction,
  arrow_: arrowFunction_,
};
/* exported callObjA______ */
function callObjA______(context) {
  objA.legacy(context);
  objA.arrow_(context);
}



const objB = {
  myname: "object B"
};
objB.legacy = legacyFunction;
objB.arrow_ = arrowFunction_;
/* exported callObjB______ */
function callObjB______(context) {
  objB.legacy(context);
  objB.arrow_(context);
}



const objC = {
  myname: "object C",
  func_arrow: function () {
    return () => { return this; }
  },
  arrowarrow: () => {
    return () => { return this; }
  }
};
/* exported callObjC______ */
function callObjC______(context) {
  console.log(`${context} objC's func_arrow() is ${objC.func_arrow()}`);
  console.log(`${context} objC's func_arrow()() is ${objC.func_arrow()()}, func_arrow()().myname is ${objC.func_arrow()()?.myname}`);

  console.log(`${context} objC's arrowarrow() is ${objC.arrowarrow()}`);
  console.log(`${context} objC's arrowarrow()() is ${objC.arrowarrow()()}, arrowarrow()().myname is ${objC.arrowarrow()()?.myname}`);
}



const objD = {
  func_func_: function () {
    const f = function () { return this; }
    return f;
  },
  arrowfunc_: () => {
    const f = function () { return this; }
    return f;
  }
};
/* exported callObjD______ */
function callObjD______(context) {
  console.log(`${context} objD's func_func_() is ${objD.func_func_()}`);
  console.log(`${context} objD's func_func_()() is ${objD.func_func_()()}, func_func_()().myname is ${objD.func_func_()()?.myname}`);
  const objX = {};
  objX.myname = "object X";
  objX.f = objD.func_func_();
  console.log(`${context} objX's f() is ${objX.f()}, f().myname is ${objX.f().myname}`);

  console.log(`${context} objD's arrowfunc_() is ${objD.arrowfunc_()}`);
  console.log(`${context} objD's arrowfunc_()() is ${objD.arrowfunc_()()}, arrowfunc_()().myname is ${objD.arrowfunc_()()?.myname}`);
  const objY = {};
  objY.myname = "object Y";
  objY.f = objD.arrowfunc_();
  console.log(`${context} objY's f() is ${objY.f()}, f().myname is ${objY.f().myname}`);
}