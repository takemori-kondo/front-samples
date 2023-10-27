import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
/*
# 基本事項

1. inputタグとビハインドコードからの制御を橋渡しする仕組み
2. FormControl、FormArray、FormGroupによりJSONのような論理構造を表現できる
3. [formGroup]を割り当てたタグの子孫タグに各種Nameディレクティブでバインド
    - [formGroup]="expression"
        - formControlName="foo"
        - formGroupName="bar"
        - formArrayName="baz"
4. FormBuilderは、new FormControl(), new FormGroup()などの略記ヘルパ
    - 第1要素:第1引数相当。初期値（T | FormControlState<T>）
        - 例：{ value: null, disabled: true }
    - 第2要素:第2引数相当。検証（ValidatorFn | FormControlOptions | ValidatorFn[]）
        - [Validators.minLength(2)]
    - 第3要素:第3引数相当。非同期検証（AsyncValidatorFn | AsyncValidatorFn[]）
        - 略
    - readonlyの初期値を割り当てる手段はない

# ビハインドからの操作

1. FormGroupインスタンス.get('foo')
2. FormGroupインスタンス.setValue({ foo: value }, { emitEvent: true })
2. FormGroupインスタンス.patchValue({ foo: value }, { emitEvent: true })
*/
@Component({
  selector: 'app-sample06-reactive-forms',
  templateUrl: './sample06-reactive-forms.component.html',
  styleUrls: ['./sample06-reactive-forms.component.scss']
})
export class Sample06ReactiveFormsComponent implements OnInit {

  form: FormGroup;
  get aliasesFormArray() {
    return this.form.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [{ value: null, disabled: false }, [Validators.required]],
      lastName: [{ value: null, disabled: false }],
      address: this.formBuilder.group({
        street: [],
        city: [],
        state: [],
        zip: [],
      }),
      aliases: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    const result = {
      firstName: 'John',
      lastName: 'Doe',
      aliases: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
      ]
    };
    this.aliasesFormArray.clear();
    for (let i = 0; i < result.aliases.length; i++) {
      this.aliasesFormArray.push(this.formBuilder.group({ id: [], name: [] }));
    }
    this.form.patchValue({ firstName: result.firstName, lastName: result.lastName });
    this.form.patchValue({ aliases: result.aliases });
  }

  showValue($event: unknown) {
    console.log($event);
    console.log(this.form.get('firstName')?.value);
    const arry = this.form.get('aliases') as FormArray;
    const fg = arry.controls[0] as FormGroup;
    console.log(fg.get('id')?.value);
    console.log(this.form.value);
    window.alert(JSON.stringify(this.form.value, null, 4));
  }



}
