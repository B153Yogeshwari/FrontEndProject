import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SaveEnquiryComponent,
    ViewEnquiryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SaveEnquiryComponent,
    FormsModule,
    ViewEnquiryComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EnquiryModule { }
