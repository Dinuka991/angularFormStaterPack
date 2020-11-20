import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.css']
})
export class PocFormComponent implements OnInit {
  employeeId: FormControl;
  middleName: FormControl;
  myModel: boolean;
  jobs: string[] = ['Tempary , Full Time , Part Time']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.patchValue();
    this.onChanges();
    this.containsControl();
    this.getErrors();
    this.profileForm.pristine;


  }
  profileForm = this.fb.group({

      firstName: [''],
       lastName: [''],
        address: [''],
       address2: [''],
        city   : [''],
        state  : [''] ,
        zip    : [''] ,
    nicNumber  : [''],
   emailAddress: [''  , [Validators.required]  ],
   mobileNumber: [''],
   myModel     : [''],    
   jobType     : ['' , [Validators.required]] 
    
  });

   
  

patchValue() {
  this.profileForm.patchValue({
    city: 'Colombo',
    state: 'Western province'
  })
}
onChanges(): void {
  this.profileForm.get('address').valueChanges.subscribe(val => {
    console.log(val)
  });
}
containsControl() {
  console.log(this.profileForm.contains("firstName"));
}
getErrors() {
 
  const controlErrors: ValidationErrors = this.profileForm.errors;
  if (controlErrors) {
    Object.keys(controlErrors).forEach(keyError => {
      console.log("firtName "+ ' '+keyError);
    });
  }
}
addControl() {
  this.employeeId = new FormControl('', [Validators.required]);
  this.profileForm.addControl("middleName",this.employeeId);
}

registerControl() {
  this.middleName = new FormControl('', [Validators.required]);
  this.profileForm.addControl("middleName",this.middleName);
}
remodeControl() {
  this.profileForm.removeControl("middleName");
}
 
onSubmit(form: NgForm) {
  console.log('Your form data : ', form.value);
}




}