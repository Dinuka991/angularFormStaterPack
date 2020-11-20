import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.css']
})
export class PocFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.patchValue();

  }
  profileForm = this.fb.group({

      firstName: [''],
       lastName: [''],
        address: [''],
       address2: [''],
        city   : [''],
        state  : [''] ,
        zip    : [''] ,
   emailAddress: [''  , [Validators.required]  ]
    
  });

3
4
5
6
7
8
9
10
11
 
patchValue() {
 
  this.profileForm.patchValue({
    city: 'Colombo',
    state: 'Western province'
  })
}



}