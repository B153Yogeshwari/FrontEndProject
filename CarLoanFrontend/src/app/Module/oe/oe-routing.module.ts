import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyEnquiryComponent } from './verify-enquiry/verify-enquiry.component';

const routes: Routes = [
  {path: 'check_cibil', component:CheckCibilComponent},
  {path: 'verify_enquiry', component:VerifyEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
