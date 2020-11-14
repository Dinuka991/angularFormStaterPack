import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PocFormModule } from './project/poc-form/poc-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PocFormService } from './project/poc-form.service';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PocFormModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ PocFormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
