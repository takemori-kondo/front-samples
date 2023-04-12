import { helloWorld } from "./sample01-hello-world/index.js";
import { typeSample1 } from "./sample02-syntax/sample1-type1.js";
import { typeSample2 } from "./sample02-syntax/sample2-type2.js";
import { typeSample3 } from "./sample02-syntax/sample3-type3.js";
import { otherSyntaxSample } from "./sample02-syntax/sample4-etc.js";
import { classSample } from "./sample02-syntax/sample5-class.js";
import { practice1 } from "./sample03-practices/practice1-property-check.js";
import { practice2 } from "./sample03-practices/practice2-object-merge.js";
import { practice3 } from "./sample03-practices/practice3-promise.js";
import { practice4 } from "./sample03-practices/practice4-promise2.js";
import { practice5 } from "./sample03-practices/practice5-cast-to-number.js";
import { practice6 } from "./sample03-practices/practice6-cast-to-string.js";

export class Samples {
  public sample01_helloWorld() {
    helloWorld();
  }
  public sample02_1_typeSample1() {
    typeSample1();
  }
  public sample02_2_typeSample2() {
    typeSample2();
  }
  public sample02_3_typeSample3() {
    typeSample3();
  }
  public sample02_4_otherSyntaxSample() {
    otherSyntaxSample();
  }
  public sample02_5_classSample() {
    classSample();
  }
  public sample03_practice1() {
    practice1();
  }
  public sample03_practice2() {
    practice2();
  }
  public async sample03_practice3(isClearLog: boolean) {
    await practice3(isClearLog);
  }
  public async sample03_practice4() {
    await practice4();
  }
  public sample03_practice5() {
    practice5();
  }
  public sample03_practice6() {
    practice6();
  }
}