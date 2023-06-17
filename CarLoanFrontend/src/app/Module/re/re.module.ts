import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';


@NgModule({
  declarations: [
    ViewEnquiryComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
