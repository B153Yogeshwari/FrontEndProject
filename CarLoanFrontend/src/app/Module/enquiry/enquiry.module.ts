import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';
<<<<<<< HEAD
=======

>>>>>>> 13575445df3d65d7c5182340c9c57e996da223b1
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewEnquiryComponent } from '../re/view-enquiry/view-enquiry.component';



@NgModule({
  declarations: [
<<<<<<< HEAD
    SaveEnquiryComponent
=======
    SaveEnquiryComponent,
<<<<<<< HEAD
    
=======
  
>>>>>>> 158c8d1f5d6f0aba5a5f2a31f990aa72776b402e
>>>>>>> 13575445df3d65d7c5182340c9c57e996da223b1
  ],
  imports: [
    CommonModule,
    FormsModule,
   
    ReactiveFormsModule,
    HttpClientModule
  ]
  
})
export class EnquiryModule { }
