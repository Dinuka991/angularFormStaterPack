import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './project/address/address.component';
import { EmployeeFormComponent } from './project/employee-form/employee-form.component';
import { PocFormComponent } from './project/poc-form/poc-form.component';


const routes: Routes = [
  {path: '' , redirectTo: 'poc' , pathMatch: 'full'},
  { path: 'poc' , component: PocFormComponent },
  { path: 'employee' , component: EmployeeFormComponent},
  { path: 'address' , component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
