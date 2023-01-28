import { helloWorld } from "./sample01-hello-world/index.js";
import { typeSample1 } from "./sample02-syntax/sample1-type1.js";
import { typeSample2 } from "./sample02-syntax/sample2-type2.js";
import { typeSample3 } from "./sample02-syntax/sample3-type3.js";
import { otherSyntaxSample } from "./sample02-syntax/sample4-etc.js";
import { classSample } from "./sample02-syntax/sample5-class.js";
import { practice1 } from "./sample03-practices/practice1-property-check.js";
import { practice2 } from "./sample03-practices/practice2-object-merge.js";

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
}