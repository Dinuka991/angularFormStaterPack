import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.css']
})
export class PocFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  profileForm = this.fb.group({

      firstName: [''],
       lastName: [''],
        address: [''],
       address2: [''],
           city: [''],
          state: [''],
            zip: [''],
   emailAddress: [''  , [Validators.required]  ]
    
  });

}