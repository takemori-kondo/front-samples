import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample01TemplateComponent } from './features/sample01-template/sample01-template.component';
import { CommonModule } from '@angular/common';
import { Sample01TemplateAlertsComponent } from './features/sample01-template-alerts/sample01-template-alerts.component';
import { Sample02DirectivesComponent } from './features/sample02-directives/sample02-directives.component';
import { Sample02HighlightDirective } from './features/sample02-highlight.directive';
import { Sample03DiComponent } from './features/sample03-di/sample03-di.component';
import { Sample04LifecycleAndEventComponent } from './features/sample04-lifecycle-and-event/sample04-lifecycle-and-event.component';
import { Sample05RoutingComponent } from './features/sample05-routing/sample05-routing.component';
import { BaseRouteReuseStrategy, RouteReuseStrategy } from '@angular/router';

class shouldReuseRouteTrueStrategy extends BaseRouteReuseStrategy { constructor() { super(); this.shouldReuseRoute = function () { return false; }; } }

@NgModule({
  declarations: [
    AppComponent,
    Sample01TemplateComponent,
    Sample01TemplateAlertsComponent,
    Sample02DirectivesComponent,
    Sample02HighlightDirective,
    Sample03DiComponent,
    Sample04LifecycleAndEventComponent,
    Sample05RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: shouldReuseRouteTrueStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
