import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { warnMessages } from '../enum';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  date = new Date(2020, 1, 1);

  startMinDate = new Date(2000, 0, 1);
  startMaxDate = new Date(2020, 12, 1);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    //this.firstNameVal();
    //this.nicNumberError();


  }
  profileForm = this.fb.group({

    start: [''],
    end: ['']
 
  });



 
public get warnmessageResult(): typeof warnMessages{
  return warnMessages;
}
  
}




