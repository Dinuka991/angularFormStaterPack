import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { warnMessages } from '../enum';
import { PocFormService } from '../poc-form.service';

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
  userEmailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"



  constructor(private fb: FormBuilder , private pocFormService: PocFormService) { }

  ngOnInit() {
    this.patchValue();
    this.onChanges();
    this.containsControl();
    this.getErrors();
    this.profileForm.pristine;
    //this.firstNameVal();
    //this.nicNumberError();


  }
  profileForm = this.fb.group({

      firstName: ['', [Validators.required]],
       lastName: ['', [Validators.required]],
    nicNumber  : ['', [Validators.required] ],
    empNumber  : [''],
   myModel     : [''],    
   jobType     : ['' ] ,

   address: [''],
   city   : [''],
   state  : [''] ,
   zip    : [''] ,
emailAddress: [''  , [Validators.required  , Validators.pattern(this.userEmailPattern) ]  ],
mobileNumber: ['' , [Validators.required ]],
    
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
  return this.profileForm.get('fisrtName').value;
}
 

get nicNumberVal(){
  return this.profileForm['nicNumber'].value;
}
get mobileNumber2(): any{
  return this.profileForm.get('mobileNumber');
}
get nicNumberError(): any{
  return this.profileForm.get('nicNumber');
}
get fname2(): any{
  return this.profileForm.get('firstName');
}
get lname2(): any{
  return this.profileForm.get('lastName');
}
get email2(): any{
  return this.profileForm.get('emailAddress');
}
public get warnmessageResult(): typeof warnMessages{
  return warnMessages;
}



onSubmit(form: NgForm) {
  if(this.profileForm.valid){
  console.log('Your form data : ', form.value);
  const requestObj = {
    employeeId : 1,
    employeeName:  this.profileForm.value.lastName,
    employeeMobile:  this.profileForm.value.mobileNumber,
    employeeEmail: this.profileForm.value.emailAddress,
    employeeDate : "2001-12-11"
  };
  this.pocFormService.postCustomer(requestObj)
    .subscribe((data: any) => {
      console.log(data);
    })
  alert(requestObj);
  console.log(requestObj)
     
  }

  
}
cancel(){
  this.profileForm.reset();
}




}