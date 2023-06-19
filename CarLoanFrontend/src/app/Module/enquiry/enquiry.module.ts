import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewEnquiryComponent } from '../re/view-enquiry/view-enquiry.component';



@NgModule({
  declarations: [
    SaveEnquiryComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
   
    ReactiveFormsModule,
    HttpClientModule
  ]
  
})
export class EnquiryModule { }
