/*
下記ページをベースにしています
https://angular.jp/guide/dependency-injection-overview
https://angular.jp/generated/live-examples/dependency-injection/stackblitz.html
*/

import { Component } from '@angular/core';
import { Hero, Sample03HeroService } from '../sample03-hero.service';

@Component({
  selector: 'app-sample03-di',
  templateUrl: './sample03-di.component.html',
  styleUrls: ['./sample03-di.component.scss']
})
export class Sample03DiComponent {

  heroes: Hero[];

  constructor(private service: Sample03HeroService) {
    this.heroes = service.getHeroes();
  }
}
