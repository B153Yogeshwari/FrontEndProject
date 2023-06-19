import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyEnquiryComponent } from './verify-enquiry/verify-enquiry.component';


@NgModule({
  declarations: [
    CheckCibilComponent,
    VerifyEnquiryComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
