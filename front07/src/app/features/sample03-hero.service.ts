/*
下記ページをベースにしています
https://angular.jp/guide/dependency-injection-overview
https://angular.jp/generated/live-examples/dependency-injection/stackblitz.html
*/
/*
- DI機能
- @Injectable()でDI可能なクラスになる
    - @Injectable({ providedIn: 'root' })なら、providersへの記述は不要
- providersへ記述する場合、遅延ローディングとInjectorの仕様、forRootパターンの理解が必要
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sample03HeroService {
  getHeroes() { return HEROES; }
}

export type Hero = {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];