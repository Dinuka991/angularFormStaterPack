import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { warnMessages } from '../enum';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.css']
})
export class PocFormComponent implements OnInit {
  employeeId: FormControl;
  middleName: FormControl;
  myModel: boolean;
  jobs: string[] = ['Tempary , Full Time , Part Time'];
  userPatternMobile = "^((\\+94-?)|07 | 7)?[0-9]{10}$";


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
   mobileNumber: ['' , [Validators.required ]],
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

get firstNameVal(){
  return this.profileForm['firstName'].value;
}
 

get nicNumberVal(){
  return this.profileForm['nicNumber'].value;
}
get mobileNumber(): any{
  return this.profileForm.get('mobileNumber');
}
public get warnmessageResult(): typeof warnMessages{
  return warnMessages;
}

onSubmit(form: NgForm) {
  console.log('Your form data : ', form.value);
}




}