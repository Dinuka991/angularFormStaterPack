import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './project/employee-form/employee-form.component';
import { PocFormComponent } from './project/poc-form/poc-form.component';


const routes: Routes = [
  {path: '' , redirectTo: 'poc' , pathMatch: 'full'},
  { path: 'poc' , component: PocFormComponent },
  { path: 'employee' , component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
