import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocFormComponent } from './project/poc-form/poc-form.component';


const routes: Routes = [
  {path: '' , redirectTo: 'poc' , pathMatch: 'full'},
  { path: 'poc' , component: PocFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
