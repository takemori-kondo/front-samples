/*
下記ページをベースにしています
https://angular.jp/start
https://angular.jp/generated/live-examples/getting-started-v0/stackblitz.html
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-sample01-template',
  templateUrl: './sample01-template.component.html',
  styleUrls: ['./sample01-template.component.scss']
})
export class Sample01TemplateComponent {

  products: Product[];

  constructor() {
    this.products = products;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addProduct() {
    this.products.push({
      id: this.products.length + 1,
      name: 'Tablet',
      price: 399,
      description: 'A 7inch Tablet'
    });
  }
}

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
}
const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
