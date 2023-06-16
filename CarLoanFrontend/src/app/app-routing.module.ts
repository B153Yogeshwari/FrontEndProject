import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveEnquiryComponent } from './Module/enquiry/save-enquiry/save-enquiry.component';

const routes: Routes = [
  {
    path:'',component:SaveEnquiryComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
