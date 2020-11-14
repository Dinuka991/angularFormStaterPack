import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PocFormComponent } from './poc-form.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ PocFormComponent ],
  imports: [
    CommonModule,
    MatCardModule
    
  ]
})
export class PocFormModule { }
