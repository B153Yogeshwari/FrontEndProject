import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    SaveEnquiryComponent,
    SaveEnquiryComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
  
})
export class EnquiryModule { }
