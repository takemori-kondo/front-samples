/*
下記ページをベースにしています
https://angular.jp/guide/attribute-directives
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-sample02-directives',
  templateUrl: './sample02-directives.component.html',
  styleUrls: ['./sample02-directives.component.scss']
})
export class Sample02DirectivesComponent {

  color = '';
}
