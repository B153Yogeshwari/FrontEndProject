import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';



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
    ViewEnquiryComponent
  ]
})
export class EnquiryModule { }
