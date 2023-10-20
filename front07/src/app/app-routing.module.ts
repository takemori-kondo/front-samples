import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample01TemplateComponent } from './features/sample01-template/sample01-template.component';
import { Sample02DirectivesComponent } from './features/sample02-directives/sample02-directives.component';
import { Sample03DiComponent } from './features/sample03-di/sample03-di.component';
import { Sample04LifecycleAndEventComponent } from './features/sample04-lifecycle-and-event/sample04-lifecycle-and-event.component';

const routes: Routes = [
  { path: 'sample01-template', component: Sample01TemplateComponent },
  { path: 'sample02-directives', component: Sample02DirectivesComponent },
  { path: 'sample03-di', component: Sample03DiComponent },
  { path: 'sample04-lifecycle-and-event', component: Sample04LifecycleAndEventComponent },
  { path: '', redirectTo: 'sample01-template', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
