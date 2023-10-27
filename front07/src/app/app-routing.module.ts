import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample01TemplateComponent } from './features/sample01-template/sample01-template.component';
import { Sample02DirectivesComponent } from './features/sample02-directives/sample02-directives.component';
import { Sample03DiComponent } from './features/sample03-di/sample03-di.component';
import { Sample04LifecycleAndEventComponent } from './features/sample04-lifecycle-and-event/sample04-lifecycle-and-event.component';
import { Sample05RoutingComponent } from './features/sample05-routing/sample05-routing.component';
import { Sample06ReactiveFormsComponent } from './features/sample06-reactive-forms/sample06-reactive-forms.component';

const routes: Routes = [
  { path: 'sample01-template', component: Sample01TemplateComponent },
  { path: 'sample02-directives', component: Sample02DirectivesComponent },
  { path: 'sample03-di', component: Sample03DiComponent },
  { path: 'sample04-lifecycle-and-event', component: Sample04LifecycleAndEventComponent },
  { path: 'sample05-routing/:id', component: Sample05RoutingComponent },
  { path: 'sample06-reactive-forms', component: Sample06ReactiveFormsComponent },
  { path: '', redirectTo: 'sample01-template', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
