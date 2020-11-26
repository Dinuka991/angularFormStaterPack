import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PocFormComponent } from './poc-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [ PocFormComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
    

     
  ],
  providers: [MatDatepickerModule , MatNativeDateModule]
})
export class PocFormModule { }
