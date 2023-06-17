import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';

const routes: Routes = [
//  {path:'fill_Enquiry',component:CreateEnquiryComponent},
    {path:'view_Enquiry',component:ViewEnquiryComponent},
 // {path:'reject_mail',component:RejectMailComponent},
 // {path:'sanction_mail',component:SanctionMailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
