import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample01TemplateComponent } from './features/sample01-template/sample01-template.component';
import { CommonModule } from '@angular/common';
import { Sample01TemplateAlertsComponent } from './features/sample01-template-alerts/sample01-template-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample01TemplateComponent,
    Sample01TemplateAlertsComponent
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
