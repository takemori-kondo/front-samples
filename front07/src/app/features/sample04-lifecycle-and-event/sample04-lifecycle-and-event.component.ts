import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample04-lifecycle-and-event',
  templateUrl: './sample04-lifecycle-and-event.component.html',
  styleUrls: ['./sample04-lifecycle-and-event.component.scss']
})
export class Sample04LifecycleAndEventComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  /*
  頻出のフックイベントだけ抜粋
  ngOnChangesについては、sample01-templateを参照してください
  */

  messages: string[] = [];

  /*
  データフェッチやサードパーティライブラリ初期化後の操作に利用するハンドラ
  */
  ngOnInit(): void {
    const text = `${new Date().toISOString()} ngOnInit`;
    console.log(text);
    this.messages.push(text);
  }

  /*
  @ContentChildren（≒ng-content投影内容）にアクセスが必要な場合に利用するハンドラ
  */
  ngAfterContentInit(): void {
    const text = `${new Date().toISOString()} ngAfterContentInit`;
    console.log(text);
    this.messages.push(text);
  }

  /*
  @ViewChildren（子コンポーネント）にアクセスが必要な場合に利用するハンドラ
  */
  ngAfterViewInit(): void {
    const text = `${new Date().toISOString()} ngAfterViewInit`;
    console.log(text);
    this.messages.push(text);
  }

  /*
  破棄処理に利用するハンドラ
  */
  ngOnDestroy(): void {
    const text = `${new Date().toISOString()} ngOnDestroy`;
    console.log(text);
    this.messages.push(text);
  }
}
