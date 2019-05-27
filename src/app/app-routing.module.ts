import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './ReactiveForms/ReactiveForms.component';
import { TemplateDrivenformsComponent } from './TemplateDrivenforms/TemplateDrivenforms.component';

const routes: Routes = [
  { path: 'ReactiveFormsComponent', component: ReactiveFormsComponent },
  { path: 'TemplateDrivenformsComponent', component: TemplateDrivenformsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
