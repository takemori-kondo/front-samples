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

@NgModule({
  declarations: [
    AppComponent,
    Sample01TemplateComponent,
    Sample01TemplateAlertsComponent,
    Sample02DirectivesComponent,
    Sample02HighlightDirective,
    Sample03DiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
