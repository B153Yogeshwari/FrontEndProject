import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewEnquiryComponent } from '../re/view-enquiry/view-enquiry.component';



@NgModule({
  declarations: [
    SaveEnquiryComponent,
<<<<<<< HEAD
    
=======
  
>>>>>>> 158c8d1f5d6f0aba5a5f2a31f990aa72776b402e
  ],
  imports: [
    CommonModule,
    FormsModule,
   
    ReactiveFormsModule,
    HttpClientModule
  ]
  
})
export class EnquiryModule { }
