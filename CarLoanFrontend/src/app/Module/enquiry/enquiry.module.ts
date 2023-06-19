import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEnquiryComponent } from './save-enquiry/save-enquiry.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
<<<<<<< HEAD
    SaveEnquiryComponent,
=======
    SaveEnquiryComponent
>>>>>>> 27d84b3d143afa8b4864083cd0c112c20248a539

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
  
})
export class EnquiryModule { }
