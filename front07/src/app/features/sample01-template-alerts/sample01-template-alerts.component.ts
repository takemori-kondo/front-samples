/*
下記ページをベースにしています
https://angular.jp/start
https://angular.jp/generated/live-examples/getting-started-v0/stackblitz.html
*/

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../sample01-template/sample01-template.component';

@Component({
  selector: 'app-sample01-template-alerts',
  templateUrl: './sample01-template-alerts.component.html',
  styleUrls: ['./sample01-template-alerts.component.scss']
})
export class Sample01TemplateAlertsComponent implements OnChanges {
  @Input()
  product: Product | undefined;

  @Output()
  notify = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      console.log(changes['product'].currentValue);
    }
  }
}
