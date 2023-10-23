/*
- テンプレートにおいてSPAルーティング用リンクは、linkの代わりにrouterlinkを使用する
- routerlinkにURL形式でクエリパラメータやfragmentを書いても認識されない(渡した値が特殊文字含めエンコードされるため)
    - [queryParams], [fragment]で渡す必要がある
- Angular独自のparamsがある
    - Routing定義で:idと記載された部分など。URLとしては;区切りで複数の値を持つ
- ActivatedRouteで現在のルートのparams, queryParams, fragmentを取得可能
- デフォルトでは同一コンポーネントへ遷移する際、再生成は行われない
    - 行うようにするには、RouteReuseStrategyを変える必要がある

以下の機能についてはサンプルは省略。公式を参照のこと

- SPAリダイレクトの宣言方法
- 複数router-outlet
- CanActivate, CanDeactivateなどのルートガード

https://angular.jp/guide/routing-overview
https://angular.jp/guide/router-tutorial-toh
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sample05-routing',
  templateUrl: './sample05-routing.component.html',
  styleUrls: ['./sample05-routing.component.scss']
})
export class Sample05RoutingComponent implements OnInit {

  url: string | null = null;
  params: string | null = null;
  queryParams: unknown = null;
  fragment: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.url = JSON.stringify(this.route.snapshot.url);
    this.params = JSON.stringify(this.route.snapshot.params);
    this.queryParams = JSON.stringify(this.route.snapshot.queryParams);
    this.fragment = this.route.snapshot.fragment;
  }

  navigate() {
    this.router.navigate(["sample05-routing/333"], { queryParams: { p1: 'baz', p2: 'qux' }, fragment: 'fffff' });
  }
}

